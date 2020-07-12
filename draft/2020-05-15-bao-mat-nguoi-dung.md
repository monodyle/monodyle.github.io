---
layout: post
title: Học cách bảo mật
date: 2020-05-15 00:00
previewImage: /assets/images/posts/bao-mat-nguoi-dung/featured.jpg
description: Hôm nay online Slack, anh huytd có đăng một cái blog của excalidraw nói về End-to-End, xong anh em bàn về cái encryption scheme của nó... tự dưng lòi một đống vấn đề
tags: [security]
---

Hôm nay online Slack, anh [huytd](https://github.com/huytd) có gửi bài blog [End-to-End Encryption in the Browser](https://blog.excalidraw.com/end-to-end-encryption/), và hỏi mọi người nghĩ sao về cái **encryption scheme** đó.

**TL;DR:** *Christopher Chedeau* nói rằng [**Excalidraw**](https://excalidraw.com/) *encrypt data* bằng **AES key generated** trên browser, server chỉ nhận được dữ liệu sau encrypt, còn **encryption key** thì được *decode* thành **base64 string** để expose ra cho user. Chỉ user nào sở hữu key (nằm trên URL) thì mới access được dữ liệu encrypted đó.

Được phen bàn luận sôi nổi, mình cũng rảnh rảnh ngồi viết cái blog về vấn đề bảo mật người dùng, và giải thích sơ sơ cơ chế mã hoá dữ liệu trong quá trình trao đổi thông tin của người dùng.

## Nhập môn bảo mật dữ liệu

### Thế cụ thể **End-to-End Encryption (E2EE)** là cái gì?

Hiểu một cách đơn giản, **End-to-End Encryption (E2EE)** là một phương thức bảo mật thông tin mà chỉ những người giao tiếp với nhau mới có thể hiểu được thông điệp (dữ liệu) do họ trao đổi. Đồng nghĩa với việc kể cả owner của kênh truyền tải dữ liệu hay bên cung cấp dịch vụ lưu trữ, thậm chí là hacker cũng không biết được người dùng đang trao đổi thông tin gì.

### Hành trình đến với E2EE

Chắc đọc sơ sơ khái niện các bạn cũng có hiểu một cách đơn giản, cách nó hoạt động như sau:

Người dùng A gửi một tin nhắn, tin nhắn đó sẽ được mã hoá và gửi cho B, sau đó B giải mã bằng một cách nào đó, thế là đọc được tin nhắn.

![](/assets/images/posts/bao-mat-nguoi-dung/01.jpg)

Đúng, không sai, nhưng chưa hoàn toàn chính xác. Việc mã hoá như thế này được gọi là **symmetric encryption** (mã hoá đối xứng).

Ở kiến trúc truyền thống (Traditional Architecture), khi sử dụng giao thức **HTTPS**, dữ liệu từ phía người dùng (client) trên đường truyền sẽ tự được mã hoá, nhưng khi dữ liệu tới nơi (server) thì nó trở về dữ liệu bình thường, vậy nên bất cứ ai nắm quyền dữ liệu trên server cũng có thể đọc được tin nhắn của bạn. Vì vậy để bảo vệ người dùng, người ta phải tìm cách để mã hoá những tin nhắn đó.

**Symmetric Encryption** là một giải pháp. Server sẽ đưa cho tất cả người dùng trong cuộc giao tiếp một **key** mã hoá dữ liệu, sau đó mã hoá dữ liệu thành **cypher text** trước khi nó được lưu vào cơ sở dữ liệu của server. Sau đó người nhận tin sẽ sử dụng cùng một **key** để giải mã dữ liệu. Như vậy dữ liệu đã được bảo vệ.

### E2EE - Câu chuyện về 2 chiếc chìa khoá

Nhưng xem xét kỹ hơn, thực tế đã nảy sinh một vấn đề: Làm thế nào để người gửi có thể gửi key mã hoá cho người nhận mà không bị theo dõi? Cụ thể thì tất cả mọi người sở hữu cùng một key đều đọc được tin nhắn đó, nghiêm trọng hơn là nó được gửi từ phía server, hoặc có thể là từ người gửi nhưng vẫn phải gửi thông qua một (vài) nơi nào đó trước khi cái key đó được tới một user khác. Như vậy khi có người cố ý muốn đọc tin nhắn của các bạn, họ vẫn có thể giải mã dữ liệu.

![](/assets/images/posts/bao-mat-nguoi-dung/02.png)

**Symmetric encryption** là một dạng mã hoá đối xứng, tức là encrypt bằng key nào thì có thể decrypt bằng key đó, và **Asymmetric encryption** (mã hoá bất đối xứng) được sinh ra.

Architecture của asymmetric encryption thì phức tạp, nhưng hiểu cơ bản thì không khó.

![](/assets/images/posts/bao-mat-nguoi-dung/03.jpg)

Người dùng A và B mỗi người đều sẽ sở hữu **2 keys không giống nhau** được gọi là **public key** và **secret key**. 2 keys này có liên hệ với nhau, rất dài và có tính chất toán học nhất định, và đó cũng là lý do tại sao chúng ta cần [toán học trong tin](/toan-va-tin) :lookdown:

Việc 2 keys có liên quan tới nhau đồng nghĩa với việc mã hoá và giải mã cũng sẽ dựa trên 2 keys này.

Hành trình mã hoá được xử lý bằng cách khi người dùng A gửi tin nhắn dưới dạng plain text, server sẽ nhận public key của B, sau đó mã hoá tin nhắn của A thành **cypher text** và lưu vào dữ liệu của server, server sau đó trả cypher text về cho người dùng B, client sẽ sử dụng private key của B để giải mã tin nhắn thành plain text ban đầu.

Trong suốt quá trình, chỉ có public key được trao đổi, còn private key không có cách nào server có thể truy cập. Do đó toàn bộ quá trình là an toàn, và đó chính là E2EE.

Tóm tắt một chút thì:
 * Public key cho phép ai đó gửi public key của họ trong một kênh chat mở và không có tính an toàn.
 * Khi bạn có một public key của người khác, bạn có thể mã hoá tin nhắn tới cho họ.
 * Private key của bạn sẽ giải mã những tin nhắn dành riêng cho bạn.
 * Các dịch vụ trung gian (bên thứ 3) chỉ có thể biết bạn đang gửi cho ai, khi nào, chứ không hề biết bạn gửi cái gì.

## Tại sao nên bảo mật thông tin?

Ừ thì như đã nói đó, việc bạn trao đổi trên mạng xã hội lắm lúc cũng sẽ dẫn tới một vài thông tin nhạy cảm, ví dụ như việc bạn gửi thông tin credit card cho một người bạn, hoặc đơn giản bạn muốn send nudes cho người mình thương. Thế mà có một thằng nào đó có được những thông tin đó, tiền thì mất, còn bị công khai ảnh loã thể lên mạng, nghĩ thôi đã mệt mỏi rồi. :cry:

Do đó, không ai được phép đọc tin nhắn của người dùng, kể cả những người quản trị của hệ thống đó. Kiểu như bị xâm phạm quyền riêng tư ấy. Do đó thông tin người dùng phải được bảo vệ.

![](/assets/images/posts/bao-mat-nguoi-dung/04.jpg)

Hiện nay trên mạng xã hội có rất nhiều ứng dụng chat trực tuyến, nhưng hãy cân nhắc về việc sử dụng chúng để trao đổi thông tin. Những ứng dụng lớn như [WhatsApp](https://www.whatsapp.com/) hay [Telegram](https://telegram.org/) đều là những ứng dụng được quảng cáo rằng áp dụng kỹ thuật E2EE.  Cũng rất tin tưởng để sử dụng, vì từ xưa tới giờ mình sử dụng chưa gặp vấn đề gì, và cũng chưa có phốt gì từ những ứng dụng đó.

Còn **Facebook** thì không chắc :gun: **Messenger** bình thường chắc chắn sẽ đọc tin nhắn, vì vậy nên mới có quảng cáo, nhưng nếu các bạn không biết thì Messenger còn có một phần là Secret Mess, mình có sử dụng qua và cảm thấy nó khá tín nhiệm, nhưng vì quá nhiều phốt bị lộ thông tin người dùng nên mình cũng không sử dụng nó quá nhiều. Dẫu sao cũng không tin một thằng dịch vụ lấy user làm sản phẩm và bán quảng cáo được :popcorn:

Còn nếu bạn tìm một dịch vụ không mã hoá tin nhắn người dùng theo phương pháp E2EE thì Zalo là một ví dụ điển hình :smug:

Dẫu sao thì việc bảo mật thông tin cũng rất quan trọng, do đó các bạn nên học cách bảo vệ người dùng. Mình cùng một số các anh em trong ngành lâu lâu cũng bàn về vấn đề bảo mật, cảm giác chung là đại đa số người dùng còn quá mơ hồ về việc bảo mật thông tin cá nhân và chưa ý thức được việc thông tin cá nhân bị lộ nguy hiểm như thế nào.

Do đó đừng có cái gì cũng lôi lên mạng xã hội :go: Chúc các bạn một ngày tốt lành.
