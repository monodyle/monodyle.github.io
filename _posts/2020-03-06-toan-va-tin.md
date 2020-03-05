---
layout: post
title: Toán và Tin - Học toán để làm gì?
date: 2020-03-06 00:00
previewImage: /assets/images/posts/toan-va-tin/featured.jpg
description: Học toán để làm gì? Câu hỏi khó phết đấy, đố bạn biết học toán dể làm gì, và nó ứng dụng thế nào trong tin học?
tags: [dev, math, algorithm]
math: true
---

## Toán học & Học toán

Xin chào, mấy hôm nay dịch quá, mình rảnh rỗi ngoài việc làm hồ sơ chuẩn bị đi làm thì cũng chẳng biết làm gì, thế là ngồi luyện algorithms và học thêm vài thứ linh tinh. Nhưng trong lúc *Youtube* kiếm nhạc relax, vô tình lỡ nhấn vào *Facebook*, mình mất mẹ nó 1 ngày cho cái trò infinity scroll.

Vô tình trong lúc lướt face, mình thấy 1  cái meme sau:

<div class="caption-image" markdown="1">
![Học toán để làm gì?](/assets/images/posts/toan-va-tin/01.jpg)
</div>

Dựa lưng vào ghế, mình nghiệm lại từ những ngày lọt lòng mẹ, mình được làm quen với những con số vào mẫu giáo, Cấp 1 vật vã với *bảng cửu chương*, *bài toán chia đều*, tới giờ vẫn không rõ là mình có thuộc bảng 7 và 8 hay không :sad: Cấp 2 còn nhiều thứ đau não hơn, đó là những bài *tìm x*, *biểu thức đột biến*, *đa thức*,... :surrender: Và tới cấp 3, cũng chẳng rõ là học cái gì, *tích phân vi phân*, *hình không gian*, *lượng giác*,...

Lên đại học, tưởng chừng thoát được toán, nhưng đời lại vả vào mồm mình bằng những thứ bá đạo hơn trong cái tên bá đạo hơn: Toán cao cấp. Là những bài *Tích phân*, *vi phân* nhưng độ khó hiểu cao hơn, vẫn là *Xác xuất thống kê* nhưng có chuồng bồ câu :confused: *Ma trận* và những người bạn.

Chưa kể bộ môn *Toán và người bạn thân của Toán*: **Vật Lý**

Mình bắt đầu suy nghĩ xem việc học toán có giúp ích gì ngoài việc tính lại hoá đơn ở quán nhậu và đứng lên đấm vào mồm thằng chủ quán nhậu nếu bạn phát hiện nó không biết cộng trừ nhân chia.



## Học toán có ích gì?

Không phải chỉ riêng ngành công nghệ, rất nhiều ngành nghề đều cần sử dụng toán, nhưng vẫn dừng lại ở mức độ cơ bản: *Cộng trừ nhân chia* hoặc *cấp số cộng, cấp số nhân*. Vậy cụ thể, học nhiều như thế để làm gì?

Nói về mấy năm đi code, hồi trước nhiều khi có mấy anh chị nói suốt: *"Học toán đi, không học toán thì làm sao học được IT?"*. Nghe xong cảm giác con đường mình đi có vẻ gian truân hơn nhiều, đam mê như thế... chẳng lẽ bỏ ngang?

Thế mà đi học, toán một kiểu, tin học một kiểu, tìm mãi vẫn chẳng thấy liên quan chỗ nào. Cấp 3 học **Pascal**, cuối cùng liên quan ở chỗ... Viết phần mềm nhập vào các số `a`, `b`, `c` của đẳng thức $ax^2 + bx + c = 0$ rồi tìm `x` :surrender:

Thế là chẳng còn bận tâm gì nữa, đi học IT thôi, có liên quan mẹ gì tới toán đâu?

![Say no with Math](/assets/images/posts/toan-va-tin/02.jpg)

Sau đó mình đi làm, nghiệm ra điều đó càng được khẳng định hơn khi những project đó chỉ xoay quanh **CRUD**[^1] :lookdown: Cảm giác thoát khỏi toán thật tuyệt. Nghe bảo làm game cũng cần toán, thử dùng **Unity** mà xem, engine nó hỗ trợ hết rồi.

[^1]: Create (tạo), Read (đọc), Update (cập nhật) và Delete (xóa) dữ liệu phần mềm thông qua truy vấn

**Kết luận: Toán cũng không quan trọng lắm**



## Toán ứng dụng

Câu chuyện bên trên để các bạn cũng hiểu một phần là tác giả bài viết không ưa gì Toán, và viết từ góc nhìn cá nhân nên chắc cũng sẽ gây ra tranh cãi. Tuy nhiên nói đi cũng phải nói lại, nếu bạn đi theo hướng nghiên cứu hoặc muốn học sâu vào việc implement một vấn đề, bạn không thể không học Toán, vì Toán học là bản chất của gần như mọi vấn đề.

Gần đây mình có gặp một vấn đề về algorithm trong *canvas* cần phải implement: Làm sao để detect 2 object chạm vào nhau, sau đó áp dụng *chuyển động đàn hồi* (*elastic collision*) để di chuyển 2 object đó sau va chạm. Thế là vò đầu bứt tai đi đọc đủ thứ tài liệu.

![Đặt vấn đề](/assets/images/posts/toan-va-tin/03.jpg)

### Vấn đề 1: Collision detection - Phát hiện va chạm

Nếu 2 object là hình vuông, thông thường chúng ta chỉ cần kiểm tra xem 1 trong 4 cạnh của object A có nằm trong object B hay không

![](/assets/images/posts/toan-va-tin/04.jpg)

Dễ dàng chúng ta sẽ có:

```js
let a = { x: 5, y: 5, width: 50, height: 50 }
let b = { x: 20, y: 10, width: 10, height: 10 }

if (
  a.x < b.x + b.width &&
  a.x + a.width > b.x &&
  a.y < b.y + b.height &&
  a.y + a.height > b.y
) {
  alert('Collision detected!')
}
```

Nếu 2 object là hình tròn, thì khá đơn giản hơn, vì chỉ cần kiểm tra khoảng cách giữa 2 tâm hình tròn có nhỏ hơn tổng bán kính 2 hình tròn hay không là được:

![](/assets/images/posts/toan-va-tin/05.jpg)

Từ công thức: $f(a, b) = \sqrt{(a_x - b_x)^2 + (a_y - b_y)^2} <= a_{radius} + b_{radius}$

```js
let a = { x: 5, y: 5, radius: 20 }
let b = { x: 12, y: 10, radius: 12 }

var dx = a.x - b.x
var dy = a.y - b.y
var distance = Math.sqrt(dx ** 2 + dy ** 2)

if (distance < a.radius + b.radius) {
  alert('Collision detected!')
}
```

Cơ bản là như thế, cũng khá dễ phải không?



### Vấn đề 2: Elastic collision - Va chạm đàn hồi

> <a name="dinh-nghia"></a> *Va chạm đàn hồi*, tức là va chạm giữa hai vật thể, trong đó ***tổng động năng* của hai vật thể không thay đổi**

<div class="center" markdown="1">
![](/assets/images/posts/toan-va-tin/translational_motion.gif)
</div>

Để mà nói thì vấn đề này khá phức tạp vì nó đụng vào Toán học và Vật lý rất nhiều, sau đó từ vấn đề Toán Lý, chúng ta phải chuyển nó về Tin học, vậy nên phần này khá nặng lý thuyết, mình cũng sẽ cố diễn giải theo cách dễ hiểu nhất.

<div class="center" markdown="1">
<iframe width="560" height="315" src="https://www.youtube.com/embed/ogiY6xt_TRM" frameborder="0" allowfullscreen></iframe>
*Giáo sư Walter Lewin giải thích về va chạm đàn hồi một chiều*
</div>

Trước hết, chúng ta cần phải hiểu *va chạm đàn hồi* hoạt động như thế nào: Xét các vật 1 và 2 có khối lượng $m_1$ và $m_2$ và vận tốc $u_1$ và $u_2$ trước khi va chạm, và $v_1$ và $v_2$ sau khi va chạm. Như đã nói ở [định nghĩa](#dinh-nghia), *tổng động năng* sẽ **không thay đổi** sau khi va chạm, nên động năng được __bảo toàn__.

Việc bảo toàn động lượng toàn phần trước và sau va chạm được thể hiện bằng công thức: $m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2$

Tương tự vậy, việc bảo toàn động năng sẽ được biểu thị bằng:

<div class="center" markdown="1">
$\frac{1}{2}m_1u_1^2 + \frac{1}{2}m_2u_2^2 = \frac{1}{2}m_1v_1^2 + \frac{1}{2}m_2v_2^2$
</div>

Chúng ta có thể tìm $v_1, v_2$ khi biết $u_1, u_2$ bằng cách:

<div class="center" markdown="1">
$v_1=\frac{m_1-m_2}{m_1+m_2}u_1 + \frac{2m_2}{m_1+m_2}u_2$

$v_2=\frac{2m_1}{m_1+m_2}u_1 + \frac{m_2-m_1}{m_1+m_2}u_2$
</div>

Nếu khối lượng hai vật bằng nhau, chúng ta dễ dàng triệt tiêu và rút gọn công thức chỉ còn lại:

<div class="center" markdown="1">
$v_1=u_2$

$v_2=u_1$
</div>

Giờ thì dễ hiểu hơn rồi, đơn giản là tương ứng với các vật thể có khối lượng bằng nhau, thì chúng trao đổi vận tốc ban đầu với nhau.

**Ví dụ**

 * Quả bóng A có khối lượng *3 kg*, vận tốc là *4 m/s*
 * Quả bóng B có khối lượng *5 kg*, vận tốc là *-6 m/s*

Sau khi va chạm:

 * Quả bóng A sẽ có vận tốc là *-8.5 m/s*
 * Quả bóng B sẽ có vận tốc là *1.5 m/s*

<div class="caption-image" markdown="1">
![Va chạm đàn hồi giữa 2 vật thể không cùng khối lượng](/assets/images/posts/toan-va-tin/06.jpg)
</div>

<div class="hero-image caption-image" markdown="1">
![Va chạm đàn hồi giữa 2 vật thể có cùng khối lượng](/assets/images/posts/toan-va-tin/07.jpg)
</div>

Như vậy, chúng ta có thể tạm thời phân tích xong cách để xử lý va chạm đàn hồi, giờ thì từ toán sang tin nàoooo


### Vấn đề 3: Từ Toán Lý đến Tin học

Đầu tiên, khởi tạo một hàm giải quyết việc va chạm:

```js
/**
 * Hoán đổi vận tốc x và y của hai vật thể sau khi va chạm
 *
 * @param  Object | particle
 * @param  Object | otherParticle
 * @return null
 */
const resolveCollision = (particle, otherParticle) => {
  // Độ chênh lệch của vận tốc
  const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
  const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

  // Độ chênh lệch về khoảng cách
  const xDist = otherParticle.x - particle.x;
  const yDist = otherParticle.y - particle.y;

  // Lưu lại khối lượng trong biến để dễ đọc hơn
  const m1 = particle.mass;
  const m2 = otherParticle.mass;

  ...
```

Chúng ta phải xác định rằng các vật thể không bị chồng chéo lên nhau, vì như thế không thể xử lý được thuật toán:

```js
  ...

  if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
    // handle goes here
  }
```

Góc của 2 vật thể va chạm bằng **atan2**[^2]

[^2]: *atan2* là góc **tan** *lượng giác ngược*, trả về giá trị radian từ $-\pi$ tới $\pi$ giữa *trục toạ độ x* và *tia* từ gốc toạ độ $(0, 0)$ tới điểm $(x, y)$, ví dụ $atan( \pm0, -0 ) = \pm\pi$

```js
  const angle = -Math.atan2(
    otherParticle.y - particle.y,
    otherParticle.x - particle.x
  )
```

Viết hàm tính vận tốc trước va chạm, bằng cách xoay lại hệ toạ độ để tìm ra vận tốc của vật

```js
/**
 * Xoay lại hệ toạ độ để tính vận tốc
 *
 * Lấy vận tốc sau đó thay đổi theo hệ toạ độ mới được xoay
 *
 * @param  Object | velocity | Vận tốc của một vật riêng lẻ
 * @param  Float  | angle    | Góc va chạm giữa 2 vật tính theo radian
 * @return Object | Trả về vận tốc x và y bị thay đổi sau khi xoay hệ toạ độ
 */

const rotate = (velocity, angle) => {
  x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
  y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
}
```

Vận tốc của các vật thể trước phương trình:

```js
  const u1 = rotate(particle.velocity, angle);
  const u2 = rotate(otherParticle.velocity, angle);
```

Vận tốc của các vật thể sau khi va chạm 1 chiều:

```js
  const v1 = {
    x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2),
    y: u1.y
  }

  const v2 = {
    x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2),
    y: u2.y
  }
```

Vận tốc chính xác của vật thể sau khi quay hệ toạ độ trở lại như ban đầu:

```js
  const vf1 = rotate(v1, -angle);
  const vf2 = rotate(v2, -angle);
```

Hoán đổi lại vận tốc thực cho các vật thể:

```js
  particle.velocity.x = vf1.x;
  particle.velocity.y = vf1.y;

  otherParticle.velocity.x = vf2.x;
  otherParticle.velocity.y = vf2.y;
```

Hoàn thành!

<div class="center" markdown="1">
![Kết quả](/assets/images/posts/toan-va-tin/result.gif)

*Kết quả*
</div>


**Tại sao phải xoay lại hệ toạ độ?**

Gọi $a$ là góc va chạm giữa 2 vật thể, chúng ta có thể hình dung va chạm như sau:

![Hệ toạ độ ban đầu](/assets/images/posts/toan-va-tin/08.jpg)

Chúng ta có thể thấy, vận tốc vật A không thể tính như một vector thông thường vì tâm của 2 vật thể hình tròn không cùng nằm trên 1 đường thẳng theo *trục toạ độ x*. Và như đã nói, *góc lượng giác ngược* $a$ trả về giá trị radian từ $-\pi$ tới $\pi$ giữa *trục toạ độ x* và tia từ gốc toạ độ $(0, 0)$ tới điểm $(x, y)$, thế nên ta cần phải xoay cả hệ toạ độ lại sao cho đƯờng thẳng nối tâm của 2 vật thể hình tròn nằm song song cùng trục toạ độ x.

Vì vậy khi xoay hệ toạ độ lại theo góc $a$, chúng ta có thể tính được vận tốc vật trước va chạm

![Hệ toạ độ sau khi xoau](/assets/images/posts/toan-va-tin/09.jpg)

Lúc này ta có thể dễ dàng tính được vận tốc của 2 vật thể trước va chạm, sau đó tính được các bước tiếp theo theo công thức đã phân tích, như vậy mới có thể giải quyết được bài toán. Cuối cùng, chúng ta xoay đúng hệ toạ độ về góc ban đầu để chuyển động không trở nên "dị dạng" bởi góc lệch.

## Kết bài

Bài toán đã được giải quyết, không quá khó, cũng không phải đơn giản nhỉ. Nó khó khi chúng ta không thể phân tích được bài toán, và nó trở nên dễ dàng hơn khi chúng ta đã hiểu về việc phải làm gì để thực hiện nó.

Ngoài vấn đề này ra, chúng ta còn rất nhiều vấn đề của Tin học sẽ đụng tới Toán, ví dụ như bạn lập trình một con AI đơn giản cho game Tic-Tac-Toe, bạn cũng cần sử dụng tới toán học để [kiểm tra tính thắng thua](https://math.stackexchange.com/questions/467757/determine-the-winner-of-a-tic-tac-toe-board-with-a-single-matrix-expression) trong trò chơi này.

Bạn không nhất thiết phải giỏi toán để trở thành một lập trình viên giỏi, đó là điều hiển nhiên. Nhưng ai cũng giỏi, vậy thì ai là người vượt trội hơn sẽ là người có lợi thế, bởi thời đại 4.0, chẳng có giới hạn nào trong cái ngành công nghệ này cả. Để cạnh tranh với những lập trình viên khác, bạn bắt buộc phải vượt trội.

> Giá trị của bạn nằm ở việc bạn có những gì.

Good luck! :argggg:

---

**Tham khảo:**
 1. Elastic Collisions Using Vectors instead of Trigonometry - [http://www.vobarian.com/collisions/](http://www.vobarian.com/collisions/)
 2. ElasticCollisions - [http://www.themcclungs.net/physics/download/H/Momentum/ElasticCollisions.pdf](http://www.themcclungs.net/physics/download/H/Momentum/ElasticCollisions.pdf)
 3. What are elastic and inelastic collisions? - [https://www.khanacademy.org/science/physics/linear-momentum/elastic-and-inelastic-collisions/a/what-are-elastic-and-inelastic-collisions](https://www.khanacademy.org/science/physics/linear-momentum/elastic-and-inelastic-collisions/a/what-are-elastic-and-inelastic-collisions)
 4. Elastic Collisions In One Dimension Physics Problems - Conservation of Momentum & Kinetic Energy - [https://youtu.be/CFbo_nBdBco](https://youtu.be/CFbo_nBdBco)
 5. Elastic collision formula derivation if one of balls velocity is 0 - [http://www.batesville.k12.in.us/physics/apphynet/Dynamics/Collisions/elastic_deriv.htm](http://www.batesville.k12.in.us/physics/apphynet/Dynamics/Collisions/elastic_deriv.htm)
 6. Lec 16: Elastic and Inelastic Collisions - 8.01 Classical Mechanics, Fall 1999 (Walter Lewin) - [https://youtu.be/ogiY6xt_TRM](https://youtu.be/ogiY6xt_TRM)

**Một số bài viết / sách hay:**
 1. How to think like a programmer — lessons in problem solving - [https://www.freecodecamp.org/news/how-to-think-like-a-programmer-lessons-in-problem-solving-d1d8bf1de7d2/](https://www.freecodecamp.org/news/how-to-think-like-a-programmer-lessons-in-problem-solving-d1d8bf1de7d2/)
 2. Introduction to Mathematical Statistics - [https://www.onlinemathlearning.com/statistics.html](https://www.onlinemathlearning.com/statistics.html)
 3. Problem Solving with Algorithms and Data Structures - [https://runestone.academy/runestone/books/published/pythonds/index.html](https://runestone.academy/runestone/books/published/pythonds/index.html)
 4. Programming and Mathematical Thinking - [http://webpages.math.luc.edu/~lauve/courses/215-fa2016/Stavely_python_ebook.pdf](http://webpages.math.luc.edu/~lauve/courses/215-fa2016/Stavely_python_ebook.pdf)
 4. Mathematics by MIT Open Course ware - [https://ocw.mit.edu/courses/audio-video-courses/#mathematics](https://ocw.mit.edu/courses/audio-video-courses/#mathematics)