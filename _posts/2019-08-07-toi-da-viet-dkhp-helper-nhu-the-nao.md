---
layout: post
title: Tôi đã viết ĐKHP Helper như thế nào?
date: 2019-08-07 20:00
previewImage: /assets/images/posts/dkhp-helper.jpg
description: >
  Cứ 9h sáng, kỳ nào cũng thế, không có sự khoan nhượng nào, một trận chiến khốc liệt, đẫm máu, tất cả vỏn vẹn chưa tới một giây...
tags: [dev, web, javascript]
---

## Ngày xửa ngày xưa...

Cứ 9h sáng, kỳ nào cũng thế, không có sự khoan nhượng nào, một trận chiến khốc liệt trên xa trường, tất cả vỏn vẹn chưa tới một giây...

Sau đó thì web sập. Đấy là thứ mà sinh viên **UIT** vẫn gọi là **Đăng ký học phần**. Vừa mở đăng ký, sinh viên lùa vào như siêu thị sale sản phẩm 100%, ai cũng muốn giành cho mình chỗ tốt, mọi việc cứ thế mà lộn tùng phèo hết cả lên. Ai may mắn nhanh tay thì giành trước, kẻ nào xui xẻo đến sau... coi như khó có cơ hội.

Mình cũng từng như thế, tranh giành khốc liệt, server phía bên trường sập vẫn cứ sập, sinh viên thấy server sập lại cứ thế mà **F5**, mà càng F5 thì cache càng nặng, server càng nhiều request, thế lại càng sập, mà càng sập lại càng khó để đăng ký. Haizz, trước tình cảnh năm nhất và kỳ I năm 2 không thể đăng ký được những gì mình mong muốn. Ấm ức mãi cũng chả giải quyết gì, nhìn nhiều đứa chửi đổng cũng thở dài, cũng nghe nhạc Mr.Siro nhìn ra cửa sổ trầm tư về cuộc sống thường nhật. Bên cạnh vẫn là chiếc laptop hiển thị lỗi, cảm giác cuộc sống đôi khi vô vị.

Xem cái meme nghỉ mắt tý

![Meme nghỉ mắt tý](https://i.imgur.com/4h8ssQu.png)

Tự dưng lúc đó chẹp lưỡi, bảo giá như có thằng nào canh hộ mình, đỡ mất công ngồi đây canh.... Thế mà quên mất mình là dân CNTT, tại sao không giải quyết bằng phương pháp Công nghệ Thông tin? Thế là lại lọ mọ ngồi code, cứ thế mà quên mất đang phải ĐKHP, cứ thế mà ĐKHP Helper đã ra đời.


## Từ ý tưởng tới thực tế

Phác thảo ý tưởng: Ý tưởng ban đầu là spam request __liên tục__ lên server để giành slot trước, tuy nhiên việc spam một số lượng request lớn sẽ làm server nặng thêm, chưa kể nếu server **limit request** thì mình chết chắc. Thế nên phải giãn khoảng cách các request ra. Trước hết là phải viết get request lấy thông tin form để thực hiện post request tiếp theo. Sau đó post request theo token và các thông tin cần thiết trong form kèm danh sách lớp mong muốn lên server, rồi nhận response để kiểm tra việc đăng ký đã hoàn thành hay chưa? Nếu đã đăng ký thành công thì log ra 1 thông báo, cùng việc xóa môn học đó ra khỏi danh sách cần đăng ký, thực hiện lại vòng lặp với các môn học chưa được hoàn thành.

Nói sơ sơ thì chắc mọi người cũng hiểu về bản chất của tool này: Thay thế tay người làm một loạt các hành động thay vì phải ngồi trực và click bằng tay, chứ không phải khai thác lỗi dữ liệu để chiếm slot. Việc một thao tác bằng tay sẽ tốn nhiều thời gian hơn gấp trăm/ngàn lần so với việc để máy thực hiện thao tác giúp chúng ta.

![Request Request Request](https://i.imgur.com/ujWzizu.png)

Bắt tay viết code nào.

Đầu tiên là một get request để lấy thông form đăng ký học phần, ở đây mình sẽ sử dụng **ajax** để request lên trang đkhp

```javascript
var request = $.ajax({
    url: "https://dkhp.uit.edu.vn/sinhvien/hocphan/dangky",
    type: "get"
});

var formData = request.done(function(response) {
    console.log(response);
});
```

Nếu các bạn đã dùng ajax, hẳn sẽ biết việc **request** của ajax bản chất vẫn là load cả một website ra, vì thế nên response của chúng ta là một file text bao gồm html của một trang web, khá giống vơi việc bạn vào trang [đăng ký](https://dkhp.uit.edu.vn/sinhvien/hocphan/dangky) rồi **Ctrl + U** để lấy source trang web. Thế nên thời gian request của ajax và thời gian dùng browser request là tương đương, tốc độ hơn ở đây là xử lý thông tin và không tốn thời gian browser **render DOM** ra màn hình người dùng.

Tuy nhiên vì vẫn sẽ có những lúc server sập, thế nên chúng ta phải phòng hờ trường hợp này bằng cách bắt lỗi từ ajax

![Lỗi khi request](https://i.imgur.com/K63jLcw.png)

```javascript
request.fail(function (xhr, status, errorThrown){
    // Log the error to the console
    console.error(
        "The following error occurred: " + status, errorThrown
    );
});
```

Bước thứ 2, lấy thông tin trong form. Việc các bạn gửi thông tin trong bất kỳ form nào: Đăng nhập, đăng ký, post bài lên facebook, tạo group mới, gửi email, hầu như đều cần một vài thứ thông tin, quan trọng nhất là **token** đối với những form yêu cầu tính bảo mật cao và cũng là thứ để chống spam, chúng thường được lưu trong các hidden input nên ở giao diện sẽ không được hiển thị, nhưng toàn bộ các input có name trong form đều sẽ được gửi như một thông tin kèm theo lên server. Thế nên không thể thiếu những thông tin này.

![form token](https://i.imgur.com/KTr5Pg6.png)

Thông tin tiếp theo chúng ta cần là những môn học cần đăng ký.
```javascript
var ClassList = ['IS401.K11', 'IS402.K11', 'IS405.K11', 'IS405.K11.1'];
```

Phương thức đăng ký, trong trang ĐKHP của UIT có 2 kiểu đăng ký:

1 là check vào checkbox ở những môn mình muốn học rồi đăng ký.
![dkhp cách 1](https://i.imgur.com/vNMFO8e.png)

2 là sử dụng mã môn học, lập 1 danh sách rồi bỏ vào textarea ở khung đăng ký nhanh rồi đăng ký:
![dkhp cách 2](https://i.imgur.com/QaTeegB.png)

Chúng ta phải chọn 1 trong 2 cách để gửi dữ liệu, gửi cả 2 cũng được, nhưng chả ai gửi cả 2 làm gì, lỡ server xử lý cồng kềnh hơn, đâm ra chậm hơn à?

Nếu sử dụng cách 1, chúng ta phải đi check từng cái input để kiếm cái nào phù hợp với danh sách của mình, sau đó lấy dữ liệu từ đó mà post request.
![Cách 1](https://i.imgur.com/Z9q6sHR.png)

Thử inspect xem thử, có vẻ chúng ta sẽ có một name để dùng làm thông tin đăng ký.
![Inspect mã lớp](https://i.imgur.com/78QFkzO.png)

Nhưng mà parse HTML ra sương sương cũng thấy gần 10.000 line, thế nên việc dò thế này khá tốn kém.

Đối với cách 2 chỉ cần 1 cái textarea, mà mình đa đề cập bất kỳ một cái input nào trong form cũng sẽ có name riêng của nó, việc nhập liệu cũng khá dễ, thế nên mình prefer cách thứ 2 hơn.
![Cách 2](https://i.imgur.com/9fFCa0R.png)

Việc cần làm còn lại là post tất cả thông tin chúng ta có lên server đkhp để nhận response.

```javascript
var post = $.ajax({
    url: "https://dkhp.uit.edu.vn/sinhvien/hocphan/dangky",
    type: "POST",
    data: {
        /*
            txtmasv: auth.name,
            form_build_id: form_build_id,
            form_token: form_token,
            form_id: 'uit_dkhp_dangky_form',
            ...
         */
        // everything you got here
    }
});

var response = post.done(function(xhr, status) {
    console.log(status);
}).fail(function (xhr, status, error) { // dont forget the error
    console.error(status, error);
});
```

Thử nghiệm nay nàoooo

![Kết quả thử nghiệm](https://i.imgur.com/2drvjYk.png)

Có vẻ khá ổn, bây giờ thì chúng ta phải kiểm tra danh sách các môn học đã được đăng ký thành công, và loại bỏ chúng ra khỏi danh sách request.

Chúng ta có response trả về từ post request, có một mớ đống hổ lốn đó thì việc check khá dễ dàng, thử inspect các lớp đã đăng ký ta sẽ thấy input name khác với những lớp còn lại:

![Các lớp đã đăng ký](https://i.imgur.com/lucgRiq.png)

Việc cần làm là check làm sao? Lúc này phải dùng **RegEx** thần thánh rồi :evil_laugh:

```javascript
new RegExp("table_lophoc_dadk\\[" + subject_id.replace(".", "\\.") + "\\]");
```

Check xong lưu array vào một variable tạm gọi là `registered`, sau đó lần lượt vứt chúng ra khỏi danh sách lớp ban đầu

```javascript
for (var subject in registered) {
    if (ClassList.includes(subject)) ClassList.splice(ClassList.indexOf(subject), 1);
}
```

Yé, coi như xong ĐKHP Helper rồi đó.

*Nhưng...*

## Làm gì có việc nào dễ dàng bao giờ?

Viết chơi chơi, chạy rồi mừng hết sức, nhưng cảm giác không an tâm vẫn lượn lờ đâu đó quanh đây.

Yé, vừa có cảm giác liền bắt ngay cú lỗi đến từ một câu chuyện như sau: Trước đó mình có cho một biến `registered` chứa các lớp đã được đăng ký thành công để sau khi ajax hoàn thành thì tiến hành xóa những lớp đó khỏi danh sách ban đầu. Nhưng không hiểu sao khi chạy lại vòng lặp thì nó vẫn còn những lớp đã đăng ký ở đó.

Sau một hồi ngồi vật vờ lẩn quẩn với mấy cái vòng for, điều kiện if, mình mới để ý tới việc bất **đồng bộ (*sync*)** của ajax. Nếu bạn có nghiên cứu sâu về ajax, sẽ biết một thứ gọi là **async** (bất đồng bộ). Biến `registered` được gán bên trong ajax thì ra bên ngoài không có các giá trị được gán vào, bởi vì khi ajax chưa chạy tới đó thì biến `registered` đã được chạy rồi.

Tuy nhiên nếu chạy ajax với async mặc định là true thì chúng ta sẽ ăn một cú **undefined** đến từ việc bất đồng bộ biến bên trong và bên ngoài ajax. Thế nên ta phải set lại giá trị `async: false` thì mới đổ được data vào trong các biến bên ngoài ajax.

Hiểu nguyên nhân, thì giải quyết thôi nào, ez ez:
```javascript
$.ajaxSetup({
    async: false
});
```

Bạn tưởng hết lỗi rồi phải không? **Nồ.** Đời làm gì có cái gì như mơ, tránh vỏ dưa thì gặp vỏ dừa thôi. Thứ mà mình quên mất lần này là việc *session login **hết hạn***. Ở UIT bất cứ trang nào cũng có login session không vĩnh cửu, sau một khoảng thời gian đăng nhập sẽ bị logout. Mặc dù có nút ghi nhớ, nhưng không bao giờ hoạt động, chả hiểu để đó làm gì :confused:

Yah, tức là phải có thêm 1 vòng ajax post để login, sau đó login thành công thì mới tiến hành ajax get để lấy thông tin, có thông tin rồi thì mới ajax post để đăng ký.

**Duhhhhhhh!**

May mà login của ĐKHP không có Capcha. Thế nên việc ajax đăng nhập cũng khá đơn giản mà không cần dùng tới token.

Giờ thì khởi tạo một biến config người dùng
```javascript
var auth = {
    name: "17520750",
    pass: "bantuongdaylapasswordcuatoiu?khongphaidauu!hahaha"
};
```

Sau đó viết ajax login
```javascript
var login = $.ajax({
    url: "https://dkhp.uit.edu.vn/",
    type: "POST",
    data: {
        name: auth.name,
        pass: auth.pass,
    }
});

login.done(function (xhrLogin, status) {
    console.log(status);
}).fail(function (xhrFail, status, error) {
    console.error(status, error);
});
```

Ờ, có vẻ ổn, cơ mà sao nó cứ chạy mãi không dừng ấy nhỉ? **Lại quên.** Quên mất hết lớp để đăng ký thì phải dừng

```javascript
if (ClassList.length == 0) {
    console.log("Hết lớp đăng ký rồi bạn tôi ơiiiii!");
    // break;
}
```

Coi như hết lỗi rồi á, hứa.

## Bài học rút lại

* Bản chất của cái tool này không có gì ghê gớm, chỉ là thay vì phải hoạt động bằng tay thì mình sử dụng code để làm việc thay cho mình.
* Có tool không có nghĩa là bạn sẽ đăng ký được lớp trước, mạng của bạn yếu mà có tool thì vẫn vậy.
* **Về việc share code thì mình xin phép không share**, vì như mình đã nói, lượng request quá lớn lên server là lý do thứ nhất làm server sập. Bản thân mình hiểu mình đang làm gì nên mình mới dám làm, thời gian giữa các request mình cũng điều chỉnh có chừng mực.
* Và điều cuối cùng: mình không quan tâm bất cứ dư luận nào nói về việc làm này là chơi bẩn hay cái gì, mình là dân CNTT, mình chỉ giải quyết vấn đề mình đang gặp phải bằng phương pháp CNTT, và mình hiểu mình đang làm gì.

Cảm ơn các bạn đã xem bài viết, hy vọng blog này có ích cho các bạn. Σ(ノ°▽°)ノ

![Kết quả](https://i.imgur.com/ujWzizu.png)