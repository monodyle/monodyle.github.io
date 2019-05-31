---
title: 'Tạo hiệu ứng 3D trên website của bạn?'
layout: post
date: '2019-05-29 22:22:54 +0700'
categories: dev
tags: 3d facebook javascript
---

Tối hôm qua trong lúc đang code đồ án, mắt nhắm mắt mở thì có tiếng thông báo messenger của thằng bạn. Với câu hỏi: “Muốn cho cái hình 3D giống trên facebook lên website như nào?”

![Lời nhờ vả tới từ người bạn](https://i.imgur.com/0MfBCvd.png)

Từ đó giờ mình ngại làm hình 3D vl, vì nghe đồn phải làm depth nên chả tìm hiểu làm gì cho mất công. Giờ thì lại phải đụng đến, thế là lên Google tìm bí kíp làm ảnh 3D trên facebook, mò mẫm lúc cuối cùng cũng làm được.

![Trông cũng hay hay](https://i.imgur.com/3O7fEnV.png)

Nhưng đấy là facebook, còn muốn dùng trên website thì phải làm sao? Thế là lại đi tìm **Đại hiền triết Google** hỏi thăm bí kíp.

Sau một hồi ngồi tra cứu thì điều mình nhận ra đầu tiên là *“Đcm, sắp trễ tiến độ đồ án rồi”*. Thế nhưng việc tìm hiểu một kiến thức mới làm lung lạc ý chí hoàn thành đồ án đúng hạn của mình, thế là mình đành ngậm ngùi ngồi research tiếp.

Sau một hồi tìm hiểu sơ sơ thì mình đã hiểu, gọi là **3D** cho sang mồm thế thôi, thực chất nó là **hiệu ứng 2.5D**. Vì chúng ta không thể rotate Object được làm 3D ở 3 chiều khác nhau được. Mình đã ngờ ngợ về cơ chế thực hiện ảnh 3D này giống như cơ chế [depth map](https://en.wikipedia.org/wiki/Depth_map) trong **portrait mode** của **iPhone**, và hóa ra là đúng thật. Vì ảnh sử dụng một cái depth map để tạo hiệu ứng chiều sâu cho khung cảnh, sau đó tách object ra khỏi môi trường và thực hiện những hiệu ứng khác nhờ code.

![Depth Map trên iPhone](https://i.imgur.com/PUhb7JB.png)

## Nhưng chi tiết hơn thì dư lào mới đúng?

Ý tưởng đầu tiên mình nghĩ ra là **Fragment Shader**. Vì nó là thứ thông dụng nhất để fake hiệu ứng 3D sử dụng shader. Nếu ai có lập trình WebGL thì hẳn sẽ hiểu 1 chút.

![Tạo ảnh 3D sử dụng Fragment Shader - http://cssing.org.ua/examples/depthmap/](https://i.imgur.com/KBZXMWE.png)

Chắc chắn là thứ củ cải này rồi, vì việc làm cái cít này khá dễ (nhưng cũng khó đấy), và size ảnh cũng sẽ khá nhỏ. *But no, fucking no.* Nếu bạn để ý thì cái hình ở trên facebook, object bị tách ra trông có cạnh khá thô, và không phải ai cũng có thể làm depth map chính xác được.

Thế là bất ngờ thay có một phương pháp gọi là **chuyển vị đỉnh** (*vertex displacement*), bằng vào việc tạo ra các đỉnh của object và chuyển vị chúng.

![loveiko with 3d logo](https://i.imgur.com/WVHm3je.png)

Đây là phương pháp mà [loveiko](https://loveiko.com/) sử dụng trên website của họ. Một cách khác để fake 3D, nhưng mục đích của mình phải tìm ra cách làm sao để làm được như vậy cơ, ứ phải là làm bằng cách nào.

#### Ngồi decomplied

Sau khi decomplied... well, có vẻ như không đúng ý mình lắm, facebook không sử dụng *vertex-fragment displacement* như mình mong đợi, mà cái facebook sử dụng... thực sự là một *model 3D*, bảo sao generate lâu thế.

Và thế là bằng một vài kỹ thuật chuyên môn để mò source của facebook, mình dần xác định được chính xác thứ facebook đang dùng là gì. Đó là ***[Three.js](https://threejs.org/)** framework*. Nice.

Vấn đề là thực sự facebook đang sử dụng một Model 3D để tạo ra hiệu ứng 3D, nếu bạn đủ rảnh để ngồi tìm object trong three.js và đổi giá trị `material.wireframe = true` thì bạn sẽ thấy vertex data của tấm ảnh 3D đó.

![wireframe vertex data](https://i.imgur.com/tnsBraX.png)

Document: [https://threejs.org/docs/#api/en/materials/MeshBasicMaterial.wireframe](https://threejs.org/docs/#api/en/materials/MeshBasicMaterial.wireframe)

## Cơ chế 3D hoạt động kiểu gì?

Đầu tiên, hãy nói về portrait mode của iPhone. Chức năng có mục đích lưu trữ lại dữ liệu dephth của bức ảnh. Mình mạnh dạn lên Google tìm kiếm với từ khóa “*how did kinect depth sensor works?*” và tìm được 1 video khá thú vị để giải thích cách hoạt động của depth: https://www.youtube.com/watch?v=uq9SEJxZiUg

![https://www.youtube.com/watch?v=uq9SEJxZiUg](https://i.imgur.com/wka6XMF.png)

Và theo [tài liệu của Apple](https://developer.apple.com/documentation/avfoundation/cameras_and_media_capture/streaming_depth_data_from_the_truedepth_camera), những dữ liệu này sẽ trở thành những đám mây lưu trữ **điểm** (point), chứ không phải là **lưới** (mesh).

Tiếp nhé, facebook sẽ dựa trên **thuật toán nội suy** (interpolation algorithm) để tạo ra một model 3D thực tế dựa trên ảnh người dùng cung cấp.

### Hiểu cơ chế rồi, nhưng mà việc gì phải khó khăn thế?

Ngồi ngâm cứu mãi cái [tài liệu của Facebook](https://developers.facebook.com/blog/post/2018/02/20/3d-posts-facebook/), cũng như [bài giới thiệu](https://www.oculus.com/blog/introducing-new-features-for-3d-photos-on-facebook/) về tính năng 3D của Facebook do **Oculus** đăng tải, mới thấy việc dùng *gITF 2.0* để tạo ảnh 3D coi bộ hơi rắc rối so với một trang web thông dụng, thế nên phải tìm cách khác để sử dụng hiệu ứng 3D trên website của chúng ta.

Ừ thì muốn tạo ảnh 3D, luôn phải đáp ứng được điều kiện là có 1 tấm ảnh, và 1 tấm depth map cho nó. Nếu sử dụng phương pháp dùng cursor thông dụng thì coi bộ nhìn “không giống 3D” cho lắm. Thế nên cứ phải có 2 tấm ảnh để đạt điều kiện trên cái đã.

![Chuẩn bị hoàn tất](https://i.imgur.com/siITaG3.jpg)

Tiếp theo, việc xây dựng 1 source library để tạo ảnh 3D quá rắc rối và đau đầu, vậy nên chúng ta phải tính đến phương pháp sử dụng thư viện có sẵn. **Three.js** ư? Về cơ bản thì nghĩ tới việc dùng nó thôi  cũng làm mình cảm giác đau đầu rồi, vì thực sự Threejs là một thư viện quá lớn, vả lại nó dành cho 3D models thì đúng hơn là tấm ảnh 2.5D mà chúng ta đang muốn xây dựng.

Thế thì phải tìm thư viện khác thôi. Google-sama thần thánh lại một lần nữa đưa em tới những chân trời xa lạ. Miệt mài tìm kiếm bao lâu thì mình cũng tìm ra thư viện **Pixi.js**. Và những gì chúng ta cần có là JavaScript, một thư viện Pixi.js và WebGL.

Nhớ tải **Pixi.js** về hoặc xử dụng cdn ở đâu đó nếu bạn muốn.

Việc đầu tiên, khởi tạo app... yeah, always. Đây là cách nhanh nhất để bắt đầu với pixi.js.

```js
let app = new PIXI.Application({
        width: window.innerWidth,
        height: window.innerHeight
    });
document.body.appendChild(app.view);
```

Tiếp theo là nhúng ảnh vào scene thôi, hãy tạo một sprite từ tấm ảnh có sẵn vào stage.

```js
let img = new PIXI.Sprite.from('/images/mee.jpg');
img.width = window.innerWidth;
img.height = window.innerHeight;
app.stage.addChild(img);
```

Và đây là những gì chúng ta đạt được:

![Horrayyy](https://i.imgur.com/wZdZ3tF.png)

Bây giờ tới việc tạo sprite từ tấm ảnh depth map đã tạo từ trước, thêm nó vào stage. Sau đó khởi tạo bộ lọc từ tấm depth map và apply nó vào stage.

```js
depthMap = new PIXI.Sprite.from('/images/mee-map.jpg');
app.stage.addChild(depthMap);
displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);
app.stage.filters = [displacementFilter];
```

Giờ thì hiệu ứng 3D đã sẵn sàng rồi đó, tuy nhiên thì vẫn chưa hoàn chỉnh. Bởi vì trên facebook còn có thao tác rê chuột thì mới thấy nó "3D-able", ảnh 3D của chúng ta vẫn "chưa thực sự 3D", chính vì vậy nên ta phải thêm event mouseover cho app.

Chúng ta đã có filter tạo chiều sâu, việc cần làm bây giờ là trừ 1 nửa kích thước màn hình tương ứng với vị trí con trỏ chuột x và y. Và khi con trỏ đang ở bên phải màn hình, kết quả thu được sẽ ngược lại (chiều sâu về bên trái) và tạo ra "ảo giác" rằng ảnh đang di chuyển sang bên phải.

```js
window.onmousemove = function (e) {
    displacementFilter.scale.x = (window.innerWidth / 2 - e.clientX) / 20;
    displacementFilter.scale.y = (window.innerHeight / 2 - e.clientY) / 20;
}
```

Yeah, và ta có kết quả như sau, có vẻ như depth map của tui có vấn đề nên hiệu ứng hơi ngu tý. Cơ chế của PixiJs không hoàn toàn giống với Facebook, vậy nên các bạn khi làm detph map nên làm phần object lem ra ngoài 1 xíu, tránh việc khi di chuyển con trỏ chuột thấy có tới 2 Object hiện ra, hơi kỳ =)))

![Thành quả](https://i.imgur.com/jLTRSfF.png)

Tùy theo mỗi trường hợp các bạn nên scale lại thông số cho phù hợp với mục đích sử dụng. And... xong ròi đó.

**Các tài liệu tham khảo:**
 * [https://facebook360.fb.com/2018/10/11/3d-photos-now-rolling-out-on-facebook-and-in-vr/](https://facebook360.fb.com/2018/10/11/3d-photos-now-rolling-out-on-facebook-and-in-vr/)
 * [https://techcrunch.com/2018/06/07/how-facebooks-new-3d-photos-work/](https://techcrunch.com/2018/06/07/how-facebooks-new-3d-photos-work/)
 * [https://www.oculus.com/blog/introducing-new-features-for-3d-photos-on-facebook/?locale=en_US](https://www.oculus.com/blog/introducing-new-features-for-3d-photos-on-facebook/?locale=en_US)
 * [https://developers.facebook.com/blog/post/2018/02/20/3d-posts-facebook/](https://developers.facebook.com/blog/post/2018/02/20/3d-posts-facebook/)
 * [https://www.youtube.com/watch?v=uq9SEJxZiUg](https://www.youtube.com/watch?v=uq9SEJxZiUg)

Hy vọng các bạn enjoy với cái trò này.