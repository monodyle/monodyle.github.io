---
title: Animation làm sao mới tốt?
excerpt: Dạo mình viết lại cái trang này, tự dưng nổi hứng muốn làm một cái animation ở cuối chân trang. Lọ mọ một hồi thì tòi ra một số vấn đề... Chi tiết thế nào, đọc xong sẽ rõ.
date: Jul 12, 2021
image: /assets/blog/animation-performance/featured.png
tags: [frontend, css]
---

Lâu lắm không viết cái gì mới mới, nhân dịp mình vưa làm lại bộ mặt cho cái blog nay tranh thủ làm một bài, chứ không thể nào lười mãi được. :sad:

Dạo mình viết lại cái trang này (không biết nên gọi là blog là gì nữa...), tự dưng nổi hứng muốn làm một cái animation ở chân trang. Thế là lọ mọ thế nào vẽ figma một hồi ra một cái hình như bên dưới:

![Giao diện thiết kế ban đầu](/assets/blog/animation-performance/01.png)

Ý tưởng ban đầu chính là cái đường cong ở bên dưới sẽ chạy ngang cho nó uốn lượn, sau đó cái mặt trăng sẽ lên xuống theo cái đường cong đó... Nhưng mà mình không biết làm thế nào để cái mặt trăng nó lên xuống, thế là lại dẹp ý tưởng đó đi, thay vào con đường sa mạc đầy sỏi đá như phiên bản hiện tại các bạn thấy :smug:

## Phiên bản đầu tiên

Dễ dàng, với trình độ hơn 5 năm chỉ code HTML và CSS mình có thể nhanh chóng có phiên bản đầu tiên, chạy ngon lành cành đào, trông nó như sau:

![](/assets/blog/animation-performance/02.gif)

Thế là mình tò te đi khoe các cô, các chú, các bác trong nghề, xong bị chửi "bố thằng điên" vì không work. Mình chợt nhớ ra mấy tay to mình khoe chỉ dùng mỗi Safari, nên mình bật Safari lên xem thì... quả nhiên là lỗi thật :okay:

Thế là phải cặm cụi ngồi sửa.

Lý do chính cái animation không work trên Safari là do mình dùng `background-position` để làm hiệu ứng animation, và mình viết theo style position và vị trí như thế này:

```css
@keyframes bg-forward {
  from {
    background-position-x: left 1440px;
  }
  to {
    background-position-x: left;
  }
}
```

Đây là lý do `webkit` nó không hiểu. Cái style này gọi là _two value syntax_, các trình duyệt chạy nhân `chromium` và `webkit` sẽ không hiểu mình viết cái gì cả. Thay vì thế mình nên viết thế này:

```css
@keyframes bg-forward {
  from {
    background-position-x: 1440px;
  }
  to {
    background-position-x: 0;
  }
}
```

Ok, dễ hiểu mà phải không? Nhưng mà mình quá lười, do đó lúc này mình đã có ý định buông xuôi, sugar you you go, sugar me me go. :doubt: Tuy nhiên lương tâm của một kỹ sư mặt tiền như mình không cho phép điều đó xảy ra. Thế là quyết định bắt tay vào sửa.

Phiên bản thứ hai sử dụng _four-value syntax_ trong trong thuộc tính `background-position`, nên nó dĩ nhiên là work rồi. Mình còn kỹ đến độ thêm cả prefix `-webkit-` cho `keyframes`  mặc dù PostCSS đã có `autoprefixer` :surrender:

```css
@-webkit-keyframes bg-forward {
  from {
    background-position: left 1440px top 0;
  }
  to {
    background-position: left 0 top 0;
  }
}

@keyframes bg-forward {
  from {
    background-position: left 1440px top 0;
  }
  to {
    background-position: left 0 top 0;
  }
}
```

Ờ nhưng mà thành quả cũng không khác gì ở trên, trừ việc nó có chạy được trên Safari và Chrome. :go:

## Hành trình giải quyết hiệu năng

Cách đây vài năm, mình nhớ mang máng có đọc được một article về việc performance của web animation, có thể đạt được 60fps. Dĩ nhiên xưa giờ mình có thấy một vài trang web làm animation rất đẹp, chẳng hiểu sao mình làm nhìn đuồi thế. Vậy là ngồi tìm hiểu.

### Cơ chế rendering waterfall

Gốc rễ nằm ở đây, đầu tiên bạn phải biết cách browser render graphic hiển thị lên cho bạn xem như thế nào. Sao mà nó hiện ra được hay ra, đâu phải cứ muốn nó chạy ngang là chạy ngang được đâu. Hồi xưa học ở trường được code mấy cái app cli, ngoài cái màn hình đen chữ trắng ra thì chẳng biết gì. Mãi được học môn Java được code mấy cái app có giao diện, mà cũng dùng thư viện gui có sẵn cả, có biết cụ thể nó hoạt động như nào đâu. Thế là mình được một phen mày mò xem thế quái nào mà browser nó render ra được mấy cái DOM lên, mà còn có animation ảo ma canada đến thế.

Quá trình mà trình duyệt thay đổi một trang web khi các element (phần tử) đang chuyển động có thể được mô tả thông qua các bước như sau:

![](/assets/blog/animation-performance/03.png)

1. **Composite:** Khi một thuộc tính của một phần tử thay đổi, trình duyệt phải thực hiện tình toán lại style của phần tử đó.
2. **Layout:** Trình duyệt sử dụng các style đã được tính toán để tìm ra vị trí và hình dạng của phần tử. Quá trình này được gọi là "layout" nhưng đôi khi cũng được gọi là "reflow".
3. **Paint:** Bước cuối cùng, trình duyệt cần vẽ lại cái đống trên màn hình. Một bước cuối sẽ không hiển thị trong quá trình này đó là trên trang sẽ được chia thành các lớp (layers) và được vẽ độc lập, sau đó kết hợp chúng nó lại thành một quy trình gọi là "Composition _(bố cục)_".

Waterfall thức là quá trình thác nước, phải xong cái này mới tới được cái tiếp theo. Cả quy trình này sẽ cần vừa in với một khung hình, vì màn hình sẽ không cập nhật cho tới khi hoàn tất cả quá trình đó. Vì chi phí cho mỗi lần render lớn như vậy, nên thường bạn sẽ thấy animation của mình chỉ đạt tới dưới 30 frames rate.

### Tuy nhiên...

Không phải tất cả các thuộc tính trong CSS đều sẽ phải trải qua đầy đủ 3 bước trong quá trình rendering waterfall, một số thuộc tính sẽ yêu cầu chi phí ít hơn các thuộc tính khác. Mình sẽ chia chúng thành 3 nhóm:

**Nhóm 1 - Siêu tốn kém**: Các thuộc tính của nhóm này thường ảnh hưởng đến **_hình dạng_** hoặc **_kích thước_** của phần tử.

- Nhóm này sẽ trigger toàn bộ quá trình render đủ 3 bước: **Composite**, **Layout** và **Paint**
- Các thuộc tính ví dụ: `left`, `max-width`, `border-width`, `margin-left`, `font-size`,...

**Nhóm 2 - Trung bình**: Thường các thuộc tính trong nhóm này sẽ không ảnh hưởng tới **_hình dạng_** hoặc **_kích thước_** của phần tử. Tuy nhiên việc thay đổi không nằm trên chính layer của chúng nó.

- Các quá trình bị trigger: **Composite** và **Paint**
- Thuộc tính ví dụ: `color`

**Nhóm 3 - Bảo vệ môi trường**: Các thuộc tính trong nhóm này được hiển thị trong layer của chính nó, không cần phải vẽ lại lên browser. Bởi vì chỉ cần update composition là đủ.

- Quá trình bị trigger: **Composite**
- Các thuộc tính ví dụ: `transform`, `opacity`

Tuy nhiên có một vài thuộc tính, tùy thuộc vào thằng dev cái core của browser đó nó muốn làm cái gì với cái thuộc tính đó. Do vậy để biết chắc chắn, bạn có thể tham khảo trang [CSS Triggers](https://csstriggers.com/) để biết thêm thông tin chi tiết nhé.

Vậy nên cách tốt nhất để tăng hiệu năng cho animation, là cố gắng giảm cost cho browser nhiều nhất có thể. Các bạn có thể xem ví dụ sau để hiểu rõ hơn: https://jsfiddle.net/monodyle/c4v6jzf3/

Dùng Waterfall devtool để xem hiệu năng thế nào nhé.

#### Sử dụng `margin`

![](/assets/blog/animation-performance/04.png)

Như các bạn thấy, FPS trung bình chỉ rơi vào tầm 46. Thấp nhất rơi vào khoảng 17fps. Thử tưởng tượng đánh Dota 2 với cái cấu hình đó chắc ức chế chết chứ không cần team bạn đánh mình. May quá mình dev web.

![](/assets/blog/animation-performance/05.png)

Hình trên ta thấy rõ hơn, tốn quá nhiều thời gian (13.11ms) cho quá trình vẽ lại lên browser, trong khi chi phí tối đa cho mỗi frame là 16.7ms. Vậy nên fps thấp là phải rồi...

#### Sử dụng `transform`

![](/assets/blog/animation-performance/06.png)

Có vẻ khá hơn rồi nè, trông thanh framerate đồng đều hơn. FPS trung bình rơi vào khoảng 58.93ms. Chỉ cần nhìn độ sóng sánh của FPS trung bình và limit cũng đủ để thấy hầu như quá trình render đều rất mượt mà.

![](/assets/blog/animation-performance/07.png)

Xem records, chi phí cho mỗi lần Composite chỉ có 0.08ms, quá đã.

## Tổng kết

Vậy thôi, mình sửa `background-position` thành `transform`, thế là giờ nhìn cái animation nó siêu mượt. :smug: Các bạn có thể quay lại [trang chủ](/) để xem thử animation dưới chân trang.

Bài này phần kỹ thuật mình dịch từ bài [Animation performance and frame rate](https://developer.mozilla.org/en-US/docs/Web/Performance/Animation_performance_and_frame_rate) và thêm mắm thêm muối từ kiến thức của mình. Hy vọng bài viết này sẽ giúp ích cho các bạn theo một cách nào đó.

Hẹn gặp lại, hứa sắp tới sẽ có thêm một bài blog thú vị về CSS.
