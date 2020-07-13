---
layout: post
title: Flexbox vi diệu - Sorting bằng CSS như thế nào cho đúng?
date: 2020-07-12 15:00
previewImage: /assets/images/posts/awesome-flexbox/featured.jpg
description: Công nghệ phát triển nhanh quá, học thôi còn bắt kịp thời đại.
tags: [dev, front-end, css, flexbox]
---

Chuyện là hôm nay lên [Slack](https://slack.com/), có một huynh trưởng làm một trang web static [Kipacast](https://kipacast.info/), nhờ mọi người góp ý về trang này. Sau một hồi góp ý thì mình để ý có một anh trai góp ý là có danh sách bài viết đang được sắp xếp từ cũ tới mới (Bài cuối ở đầu trang), anh cho rằng bài viết mới nhất nên nằm ở đầu trang. Suy nghĩ một hồi thì huynh trưởng chẳng biết làm sao nếu không sử dụng tới JavaScript, vì chẳng ai muốn nhúng JavaScript nếu thực sự không cần thiết.

> "Thêm nút sort bằng CSS hơi quá sức" - *Huynh trưởng said*

## CSS siêu cường

CSS bây giờ không những mạnh mẽ, mà còn có nhiều tính năng vượt trội so với thời mình chân ướt chân ráo vào nghề. Nhưng việc sử dụng CSS như thế nào lại là một bài toán khá nhọc nhằn vì không phải cứ cái gì cũng nhét feature mới vào là dùng được ngay.

Điển hình, xếp layout web dùng **grid** hẳn là tiện thật, nhưng mà browser cũ không hỗ trợ thì dùng làm chi rồi phải fix mớ bug vỡ layout khi vẫn còn người dùng sử dụng IE? :cry:

<div class="hero-image" markdown="1">
![Flexbox & Grid](/assets/images/posts/awesome-flexbox/01.jpg)
</div>

Và giải pháp chính là **flexbox**. Thực chất, flexbox không hề mới, nhưng nó chưa có tính phổ biến, nên việc sử dụng flexbox vẫn đang còn khá mơ hồ, chưa kể phải nhớ đống thuộc tính cũng tương đối vất vả. Thế nên nhiều người vẫn bỏ qua nó.

## Sử dụng flexbox hiệu quả

Như các bạn đã thấy, từ phiên bản **IE 11**, flexbox đã được hỗ trợ. Vậy nên sử dụng flexbox là lựa chọn sáng suốt cho tất cả các dự án không cần phải support **IE 6** :yikes: Nhưng làm sao để sử dụng flexbox hiệu quả, đó lại là một câu chuyện khác.

Đi tới một vài ví dụ đơn giản nhé, hồi xưa mình hay gặp vấn đề trong việc căn giữa chữ trong một cái container bất kỳ.

```html
<div class="box">
  <span class="text">Hello, Monody here! 👋</span>
</div>
```

Giải pháp của hồi đó là nếu đã fix cứng chiều cao của container bằng giá trị `Y`, mình sẽ sử dụng `text-align: center` để căn giữa chữ, và dùng `line-height: Ypx` để chiều cao của dòng bằng với chiều cao của container, vậy là xong rồi. :adore:

```sass
.box
  height: 24px
  text-align: center
  line-height: 24px
```

Nhưng mà nếu gặp trường hợp chiều cao của container không được cố định thì sao?? Một trick (hay còn được gọi là css hack) để giải quyết là set `position: relative` cho container, sau đó bọc nội dung bằng một tag khác và căn giữa element bên trong bằng các thuộc tính sau: `position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)`. Bài toán đã được giải quyết... nhưng mà sao dài quá vậy ta... :surrender:

```sass
.box
  position: relative
  width: ?? px
  height: ?? px

.text
  position: absolute
  text-align: center
  width: 100%
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
```

Một lý do khác là mình thường không sử dụng tới thuộc tính `position` nếu thực sự không cần thiết. Tìm đến với **grid**, chúng ta có thể tìm được một code ngắn hơn:

```sass
.box
  display: grid
  place-items: center
  ^ cái này tương đương với thuộc tính
    justify-content và align-items cùng giá trị là center
```

Nhưng client gọi điện chửi ~~sml~~ vì sao không support IE? Thế là phải lủi thủi ngồi sửa lại thành **flexbox**, bất ngờ là code so với **grid** cũng không dài hơn bao nhiêu:

```sass
.box
  display: flex
  justify-content: center
  align-items: center
```

## ASC & DESC Sorting với flexbox

Mình có một danh sách các bài viết như sau, các bài viết đã được sorting theo DESC:

```html
<div id="posts">
  <div class="item">
    <a href="#" class="title">My first post</a>
    <span class="created_at">a year ago</span>
  </div>
  <div class="item">
    <a href="#" class="title">How to clean code?</a>
    <span class="created_at">5 months ago</span>
  </div>
  <div class="item">
    <a href="#" class="title">First time learn Rust</a>
    <span class="created_at">2 months ago</span>
  </div>
  <div class="item">
    <a href="#" class="title">Flexbox is awesome!</a>
    <span class="created_at">few seconds ago</span>
  </div>
</div>
```

Việc sorting một danh sách có sẵn theo chiều ngược lại quá là điều dễ dàng khi sử dụng flexbox, chỉ cần thêm thuộc tính `flex-direction` cho container là chúng ta đã đảo ngược danh sách lại rồi. :adore:

```sass
#posts
  display: flex
  flex-direction: column-reverse
```

Looking good, CSS is awesome! :smug: Trời, dễ vậy cũng viết blog sao? Vậy thử thêm một tính năng là thêm nút sorting vào cho tập người dùng *khó tính* nhé.

Việc tạo ra nút sorting cũng không khó, chỉ là vấn đề CSS thinking khi bạn đã nắm được hầu hết những gì CSS có thể thực hiện. Mình sẽ tạo ra 2 cái radio input trước container, một cho ASC và một cho DESC nhé:

```html
<input type="radio" name="sorting" value="DESC" checked />
<input type="radio" name="sorting" value="ASC" />
```

Sau đó mình sẽ kiểm tra, nếu cái nào đang check thì sẽ sorting lại theo cái đó, tức là thay đổi giá trị của thuộc tính `flex-direction` qua lại giữa `column` và `column-reverse`. Để kiểm tra được input nào đang được chọn, mình sử dụng **pseudo** `:checked` cho input, và sau đó dùng **General sibling combinator `~`** để tác động vào *flexbox container*:

```sass
#posts
  display: flex

input[type="radio"]:checked ~ #posts
  flex-direction: column

input[type="radio"][value="ASC"]:checked ~ #posts
  flex-direction: column-reverse
```

Wow! Hiệu quả tới bất ngờ, thêm xíu màu mè dô cho nó xịn xò nè :smug:

<script async src="//jsfiddle.net/monodyle/ynf2qtmr/embed/result,html,css/"></script>

Không hề đụng tới một dòng javascript nào, chúng ta vẫn có thể hoàn thành chức năng sorting một cách tốt nhất. Vậy nên khi code, hãy tập hạn chế những thứ chúng ta không thực sự cần. CSS còn rất nhiều thứ thú vị, nó không chỉ là styling, mà còn có thể làm được rất nhiều điều hay ho đó.

Hy vọng bài viết này sẽ mang lại cho bạn điều gì đó :popcorn:
