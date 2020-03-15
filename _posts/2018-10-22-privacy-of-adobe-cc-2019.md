---
layout: post
title: Adobe Creative Cloud 2019 và câu chuyện bảo mật phần mềm
date: 2018-10-22 00:00
previewImage: /assets/images/posts/privacy-of-adobe-cc-2019/featured.jpg
description: Bài viết này phân tích về development security hệ thống activation bản quyền mới của Adobe
tags: [privacy, security]
---

Chờ đợi như bị nạn đói từ tháng 8, các con chiên đang sử dụng hàng loạt sản phẩm của **Adobe** háo hức với một phiên bản đầy hứa hẹn hé lộ vào tháng 10, và cuối cùng cũng được ra mắt. Bộ **Creative Cloud 2019** đã xuất hiện vài ngày gần đây, gây xôn xao dư luận với hàng tỷ tính năng đáng ra phải có từ một tỷ năm trước bất ngờ xuất hiện, không ai là không rơi nước mắt khi cuối cùng **Adobe** cũng chịu cho người dùng **Photoshop** sử dụng `Ctrl + Z` **n** lần thay vì phải nhấn tổ hợp phím kỳ cục `Ctrl + Shift + Z`.

Nói lan man thế đủ rồi, giờ tớ sẽ đi vào nội dung chính, bài viết này phân tích về development security hệ thống activation bản quyền mới của Adobe. Bài viết sẽ được dig vào kỹ thuật phá khoá, cái này là vi phạm bản quyền nên mình không khuyến khích các bạn đi phá làng phá xóm. Bài viết này đơn giản là để học hỏi về bảo mật.

<div class="center" markdown="1">
![](/assets/images/posts/privacy-of-adobe-cc-2019/01.jpg)
</div>

## Trước Creative Cloud 2019, Adobe bảo mật như thế nào?

Hẳn ai sử dụng các phiên bản **Creative Cloud 2018** trở về trước đều biết trong folder của sản phẩm như *Photoshop, Illustrator, Premiere,After Effect,...* có chứa một cái file hệ thống nho nhỏ mang tên `amtlib.dll`, cái file mà hầu hết các bản crack đều sử dụng patch ghi đè lên cái file này. Vậy `amtlib.dll` chính là cơ chế activation product của *Adobe*.

Hồi trước đi dạo chơi các cộng đồng lớn nhỏ, thấy ở trên **Quora** có post hỏi về việc *reset trial* của *Illustrator*, thì giải pháp là sử tên file `opm.db` thành `opm.db.old`, như vậy bạn có thể sử dụng 1 phiên bản dùng thử với đầy đủ tính năng không khác gì bản dùng thật vô thời hạn. Thời đó còn nhớ bản dùng thử đến tận **30** ngày, sau bản fix thì chỉ còn 7 ngày :cry:

`amtlib.dll` là một phần của **AMTLib**, là một cái thứ quần què gì đó chứa thông tin bản quyền của *Adobe Product*. Không khó để các hackers có thể truy cập và thay đổi thông tin của *ATMLib* trong vài nốt nhạc.

Một vài phần mềm patcher khá nổi tiếng dùng để patch file `amtlib.dll` là *AMTEmu* và *Universal Adobe Patcher* (Cả 2 phần mềm đều do một người có nickname *PainteR* viết). Mình sẽ không đi sâu vào phân tích 2 phần mềm này nữa, mà chuyển qua nói về phiên bản *Adobe* mới và tính khả thi của privacy luôn nhé.

<div class="center caption-image" markdown="1">
![Universal Adobe Patcher (bên trái) và AMTEmu (Bên phải)](/assets/images/posts/privacy-of-adobe-cc-2019/02.jpg)
</div>

## Creative Cloud 2019 - Cách mạng AI

Ở tại sự kiện **Adobe MAX 2018** diễn ra gần đây, *Adobe* đã show 1 nùi sản phẩm mới cùng hàng loạt những tính năng mới trên các sản phẩm cũ khiến người dùng phải choáng ngợp với sự bá chiếm thị trường của *Adobe*. Các sản phẩm *Artificial Intelligent (trí tuệ nhân tạo)*, *Machine Learning (máy học)* đang giúp người dùng của *Adobe* tiết kiệm rất nhiều thời gian và công sức trong quá trình sáng tạo. Cũng như sự cải tiến của các sản phẩm cũ cũng thu hút rất nhiều sự chú ý của người trong giới.

<div class="center caption-image" markdown="1">
![Màn trình diễn của Fontphoria không có gì quá ghê gớm, nhưng đủ để cả cộng đồng thốt lên: "Ồ, cái này sẽ giúp tôi nhiều đây"](/assets/images/posts/privacy-of-adobe-cc-2019/03.jpg)
</div>

Đồng thời, phương pháp bảo mật cũng đã được thay đổi, sau khi mình update **Creative Cloud** thì nhận ra một chút thay đổi về thư mục của các Product (có icon), tò mò nên mình vào trong xem còn gì mới lạ không, thì hầu như vẫn như cũ, trừ thư mục Plug-in cũng có icon :pepe_surrender: Nhưng một hồi thì mình cảm giác có gì thiếu thiếu. Không còn sự tồn tại của file `amtlib.dll` nữa.

Ai đã sử dụng qua AMTEmu đủ nhiều thì hẳn cũng biết trick khi có bản update mới của product mà phần mềm patch chưa update thì chỉ cần sửa **LEID** và **Version** là lại patch crack xài như thường, nhưng giờ thì lại khác. Sau khi update xong, toàn bộ activation key bằng crack sẽ bị revoke và phải re-active lại (nếu sử dụng bản quyền thì sẽ không gặp tình trạng này)

<div class="center caption-image" markdown="1">
![Key cũ đã bị revoke](/assets/images/posts/privacy-of-adobe-cc-2019/04.jpg)
</div>

Sau một hồi liên tọi tìm kiếm các file system và kiểm tra bằng đủ thứ trình độ chuyên môn, cuối cùng mình cũng tìm ra một vài thứ thú vị như sau:
1. Sản phẩm của *Adobe* bây giờ sẽ không sử dụng file để lưu trữ activation key nữa, mà thay vào đó sẽ yêu cầu người dùng sử dụng mạng internet để request activation lên server của *Adobe*.
2. Nếu disabled không cho *Adobe product* kết nối với internet, thì vô phương sở hữu.

<div class="hero-image caption-image" markdown="1">
![Không internet = Không Adobe product](/assets/images/posts/privacy-of-adobe-cc-2019/05.jpg)
</div>

Tức là nếu muốn sử dụng **Photoshop**, thì bạn phải có internet. Vậy liên quan gì đến internet? Hay là Adobe đang cố làm người dùng chỉ sử dụng sản phẩm khi kết nối đến server của họ? Khoan, vậy work offline thì sao? Có nghĩa là khâu activation product chắc chắn phải sử dụng internet, là phải có thông tin từ server gửi về, chắc chắn người dùng đã mua bản quyền sản phẩm thì mới chính thức activation product cho người dùng, còn không thì vẫn phải sử dụng internet để trial.

Tạm thời bỏ qua phương pháp mua bản quyền để kích hoạt, vì nó chẳng chuyên sâu về Privacy tý nào cả, hãy sử dụng phương pháp Piracy một tý (Hy vọng mình sẽ không bị bắt bỏ tù vì chuyện này :cry:)

Bằng một vài phương pháp đơn giản, rất nhanh để mình nhận ra điều đó, vậy nên mình sẽ kiểm tra toàn bộ request của sản phẩm, mình nhận ra hầu hết các sản phẩm đều có khoảng 5-6 cái request lên một server: `ims-prod06.adobelogin.com`

<div class="center" markdown="1">
![](/assets/images/posts/privacy-of-adobe-cc-2019/06.jpg)
</div>

Và có một thứ làm mình khá tò mò với tất cả các sản phẩm, đó là một request như thế này:

```text
Method: POST
Protocol: HTTPS
Status: 200
Host: lcs-cops.adobe.io
Request to: /asnp/nud/v4
```

Thấy chữ `lcs` không? Cái này là viết tắt của từ **License** nếu mình đoán không nhầm. Nếu bạn nhìn vào response trả về, bạn sẽ thấy vài đoạn base64 khá dễ dàng:

<div class="right-image w-1/2" markdown="1">
![](/assets/images/posts/privacy-of-adobe-cc-2019/07.jpg)
</div>

Thấy `payload=eyJ...` chứ? Decode nó ra, chúng ta sẽ thấy khá rõ nó chứa thông tin về việc cấp phép sản phẩm.

Truy theo đó, sẽ tim được `legacyProfile` và `cerrtificateDetails`. Có vẻ như chúng ta đã tìm ra gì đó. Chúng ta đang đi tìm nguồn gốc của việc kích hoạt sản phẩm, vì vậy đây là thứ chúng ta cần phải tập trung để phá giải.

Kiểm tra một vài thông số JSON cũng như response từ server gửi về, quá dễ để tìm ra phương pháp để giải quyết. Kiểm tra `ism/token/v1`, trong file json có một vài parameter như sau:

```json
"serviceCode": "creative_cloud",
"serviceStatus": "ACTIVE",
"serviceLevel": "CS_LVL_1",
"expires_in": 86399990,
"access_token": "..."
```

Vậy là tìm được hướng giải quyết rồi, lý thuyết tiếp theo cũng khá đơn giản: Sao chép, rồi debug trail trên local, response trả về là một con số khác, hoặc đơn giản là không bao giờ hết hạn :lookdown:

<div class="center caption-image" markdown="1">
![Set lại thời gian là không bao giờ hết hạn](/assets/images/posts/privacy-of-adobe-cc-2019/08.jpg)
</div>

Còn một phương pháp khác, các bạn sẽ debug trail change lincense type. Nhưng mà lười viết quá nên thôi bỏ qua nhé, nó cũng tương tự như trên thôi. `serviceLevel=CS_LVL_2` & `serviceLevel=PAID_LVL_2`

<div class="center" markdown="1">
![](/assets/images/posts/privacy-of-adobe-cc-2019/09.jpg)
</div>

## Kết luận

Phương pháp ngăn crack mới của *Adobe* có vẻ thú vị hơn, nhưng vẫn phải đổ nước mắt vì phương pháp này không thực sự hiệu quả. Bài này mình cũng chỉ ra một vài phương thức để activation product lậu, tuy nhiên các bạn không nên làm theo, mình cũng chỉ viết bài này để học thôi chứ không dùng để activation product trên máy mình.

Hãy mua license để ủng hộ nhà sản xuất :ok: