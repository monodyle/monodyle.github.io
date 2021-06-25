---
date: Mar 15, 2020
image: /assets/blog/sql-database-hacking/featured.jpg
title: Mấy cái trò Database Hacking
excerpt: Hôm nọ mình vừa đọc được một bài write-up của một bạn White-hat sau khi báo cáo lại lỗ hổng trên trang web của Đại học Harvard, tự dưng thấy kỹ năng về bảo mật của mình bao lâu nay... kém ghê
tags: [web, database, hacking, security]
---

Hôm nọ mình vừa đọc được một bài write-up của một bạn white-hat sau khi báo cáo lại lỗ hổng SQL Injection trên trang web của Đại học Harvard, tự dưng thấy kỹ năng về bảo mật của mình bao lâu nay... kém ghê.

Bản thân là sinh viên chuyên ngành **Hệ Thống Thông Tin**, tức là chuyên ngồi đấu vật với mấy cái cơ sở dữ liệu mà lại rất hay quên đi những cái quan trọng như thế này... Cảm thấy xấu hổ, thế là mình phải mò lại những gì mình đã học, nhưng không dùng tới lại quên mất, rồi viết thành một blog để coi như vừa học lại, vừa chia sẻ kiến thức cho mọi người :smug: ~~Mình thật tuyệt~~

## Thằng chó, mày hack web bố mày...

Hè vừa rồi mình có trò chuyện với một ông anh trong nghề, ổng tâm sự về chuyện bị thằng nào thả bot nó clean mẹ cái database, để lại đúng một dòng duy nhất:

> Gửi bố mày vài Bitcoin đê, bố mày trả lại dữ liệu cho... :lookdown:

Và kèm theo đó là địa chỉ ví bitcoin của hắn :surrender: Tính ông anh mình được cái thật thà, nhà cũng không có gì ngoài điều kiện, thế là gửi cho nó vài bitcoin coi như tiền ăn sáng, hôm sau thấy nó restore lại dữ liệu thật :mokas:

Nhưng mà tức quá, ai đời làm lập trình có sản phẩm đang chạy phà phà lại có thằng choá nào hack, nghĩ có cay không cơ chứ? :yikes:

Mình không rõ là cái database đó bị hack như thế nào, nhưng khá chắc chắn phần lớn là bởi vì code chưa đủ bảo mật và có nhiều lỗ hổng. Các hacker sẽ viết một con bot chuyên đi dạo trên mạng để attack vào những case bảo mật thường dễ bị hack nhất.

Vì vậy bài viết này mình sẽ giới thiệu cho các bạn một loại lỗ hổng **cơ bản** nhưng cực kỳ nguy hiểm, giải thích cơ chế và hướng dẫn cách phòng chống. Và xin giới thiệu cái trò gọi là **SQL Injection**.

<div className="note" emoji="1">

**Lưu ý:**

Bài viết này nhằm mục đích giao lưu kỹ năng bảo mật lập trình, không cổ suý các bạn đi phá làng phá xóm. Hãy tỉnh táo :smug:
</div>

## Nhập môn hack Cơ sở dữ liệu SQL

Trong nhiều loại tấn công lỗ hổng nhằm vào website, tấn công **SQL Injection** là một trong những loại nguy hiểm và phổ biến nhất. Nó đã từng gây ra nhiều thiệt hại đáng kể cho nhiều doanh nghiệp và tổ chức trong rất nhiều năm, và đương nhiên sẽ còn tiếp diễn trong tương lai.

<img
  title="SQL Injection là gì??"
  alt="SQL Injection là gì??"
  src="/assets/blog/sql-database-hacking/draw-01.jpg"
/>

Theo [Wikipedia](https://vi.wikipedia.org/wiki/SQL_injection) :popcorn::

> **SQL injection** là một kỹ thuật cho phép những kẻ tấn công lợi dụng lỗ hổng của việc kiểm tra dữ liệu đầu vào trong các ứng dụng web và các thông báo lỗi của hệ quản trị cơ sở dữ liệu trả về để _inject_ (_tiêm vào_) và thi hành các câu lệnh SQL <u>bất hợp pháp</u>.

Ờ thì khái niệm như vậy đấy, hiểu một cách đơn giản tức là loại tấn công này nhằm vào các **input** có **tương tác trực tiếp** với **database** ở **back-end** (ví dụ như các input email, password ở form login). Thông thường, attacker sẽ tấn công để ăn cắp dữ liệu, loại này về cơ bản là hiền nhất, sau đó tới xáo trộn dữ liệu để cản trở sự hoạt động của website, và trường hợp xấu nhất, là quyền truy cập quản trị vào máy chủ database bị chiếm. :moka:

Trong lịch sử, đã có rất nhiều đợt tấn công SQL Injection nhằm mục đích:

- Trích xuất thông tin nhạy cảm, ví dụ như về an sinh xã hội, hay thông tin thẻ tín dụng
- Trích xuất thông tin người dùng đã được đăng ký trên các website, ở Việt Nam cũng không ít trường hợp
- Xoá luôn cái database, có rất nhiều trang web không sử dụng backup dữ liệu, và khi bị xoá thì coi như cả hệ thống tê liệt, ví dụ của ông anh bên trên là ví dụ gần gũi nhất
- Tiêm mã độc thực thi vào trang web khi người dùng truy cập

**Nhắc lại một lần nữa:** Tấn công về SQL Injection cực kỳ phổ biến. Các công ty lớn như **Yahoo** hay **Sony** đã từng là nhạn nhân của trò chơi này. Các nhóm hacker còn viết hẳn các script bot để tự đi tấn công dạo trên internet, vì vậy hãy luôn cẩn thận với sản phẩm của bạn.

### Cơ chế khai thác và tấn công

SQL Injection tấn công bằng cách gửi một mã lệnh SQL độc đến back-end của máy chủ cơ sở đữ liệu, thông qua các request của người dùng mà website cho phép. Bất kỳ input nào cũng có thể được sử dụng để gửi mã độc, tức là bao gồm cả: các thẻ `<input>` nhập liệu, query strings, cookies và file upload.

Mình sẽ có một ví dụ như sau: Giả sử đây là trang đăng nhập vào ngân hàng **PankHub**, với form đăng nhập gồm 2 fields là `email` và `password`:

<img src="/assets/blog/sql-database-hacking/02.jpg" />

Bây giờ mình sẽ thử đăng nhập tài khoản của người dùng tên là **Phát** (jk, don't panic) với _email_ là: `phat.nhagiau@pankhub.com` và _password_ là `password`

<img src="/assets/blog/sql-database-hacking/03.jpg" />

Ừ thì đương nhiên là không đăng nhập được rồi :okay: Đây là trường hợp giả sử mình là một attacker, và mình tình cờ địa được email của người dùng này sau khi đi ngang qua lúc nó đang đăng nhập vào ngân hàng ở tiệm net :smug: Victim của mình là một thằng đại gia nhà giàu, tiền không những được quy ra bằng vàng để trong két mà còn có cả một đống trong nhà băng. Xác định được mục tiêu thì trích xuất thông tin mục tiêu là điều cần thiết. Vì vậy mình chỉ thử đăng nhập cho vui thôi, đương nhiên làm gì có thằng ~~ngu~~ nào đặt mật khẩu là `password` cơ chứ (jk)

Bây giờ hãy nhìn vấn đề từ phía server log nhé, chúng ta sẽ có 1 cái logging như sau:

```
Rendering login page.
Checking supplied authentication details for phat.nhagiau@pankhub.com.
Finding user in database.
No such user, report this to the user (invalid credentials?).
Rendering login page.
```

Sau đó, mình tiếp tục truy thử login vào tài khoản của victim, nhưng lần này password mình sẽ thêm một _dấu nháy đơn_ `'`, kết quả có được là:

<img src="/assets/blog/sql-database-hacking/04.jpg" />

Thấy sự khác biệt rồi phải không? Thông thường, với những trường hợp sai thông tin đăng nhập sẽ luôn cho ra một message lỗi (trang nào nó random message thì bó tay), vì vậy có gì đó không đúng xảy ra rồi, có thể nguyên do là bởi dấu nháy đơn chăng?

Server log:

```
...

Rendering login page.
Checking supplied authentication details for phat.nhagiau@pankhub.com.
Finding user in database.
An error occurred: PG::SyntaxError: ERROR: unterminated quoted string at or near "'password'' limit 1" LINE 1: ...ers where email = 'phat.nhagiau@pankhub.com' and password = 'password'... ^ : select * from users where email = 'phat.nhagiau@pankhub.com' and password = 'password'' limit 1.
Unable to login this user due to unexpected error.
Rendering login page.
```

Nhìn thấy ở log hiển thị SQL syntax error chứ? Điều này chứng tỏ dấu nháy đơn chính là nguyên nhân gây ra lỗi. Thử ghép vào câu lệnh SQL được chạy trên server thì nó sẽ trông như thế này:

```sql
SELECT *
  FROM users
 WHERE email = 'phat.nhagiau@pankhub.com'
   AND pass  = 'password'' LIMIT 1
```

Dư 1 dấu nháy đơn, câu lệnh này chạy trong SQL chắc chắn sẽ lỗi. Và đây chính là thứ gọi là **SQL Injection**.

Sau khi xác định được lỗ hổng, mình sẽ thử đăng nhập lại với password là **`' OR 1=1--`**. Câu lệnh SQL lúc này được thực thi trên server sẽ là:

```sql
SELECT *
  FROM users
 WHERE email = 'phat.nhagiau@pankhub.com'
   AND pass  = '' OR 1=1 --' LIMIT 1
```

Server log:

```
Rendering login page.
Checking supplied authentication details for phat.nhagiau@pankhub.com.
Finding user in database.
Authentication details confirmed, establishing session for this user.
```

<img src="/assets/blog/sql-database-hacking/05.jpg" />

Xong, tài khoản của bạn nằm trong tay tôi :ok:

Cơ chế hoạt động đơn giản nhất của **SQL Injection** là như vậy đọ. Thực thi nó không hề khó, nhưng để nhận ra được trang nào có lỗ hổng thì lại khá khó, vì không phải lúc nào khai thác lỗ hổng SQL Injection nó cũng y chang như vậy.

### Nhưng tại sao có lỗ hổng này?

Lý do lớn nhất là các bạn chưa thể tiếp cận toàn bộ các case trong quá trình code. Bạn không bao giờ lường trước được người dùng sẽ làm cái ~~đéo~~ gì trên sản phẩm của mình. :sad: Chính vì vậy thường các case không bao giờ được nghĩ tới này lại vô tình tạo ra lỗ hổng cho attacker khai thác.

Khi viết các câu lệnh SQL trong source (ở đây mình sẽ lấy **PHP** làm ví dụ), đa số các bạn thường viết kiểu:

```php
$query = "SELECT * FROM USERS
  WHERE email = '" . $_POST['email'] . "'
  AND password = '" . $_POST['password'] . "'
  LIMIT 1;"
$result = $connection->query($sql);
```

Khi người dùng gửi request đăng nhập có thông tin, thì câu query trên sẽ tương đương với:

```sql
SELECT *
  FROM USERS
 WHERE email = 'phat.nhagiau@pankhub.com'
   AND password = 'password' LIMIT 1
```

Tức là cái gì gửi lên, thì param tương đương sẽ được thay thế bằng cái đó. Điều này vô tình tạo ra một lỗ hổng cực kỳ nguy hiểm. Nếu bạn từng học các môn liên quan tới database hoặc làm việc với database nhiều, các bạn có thể hiểu rằng chỉ với những câu lệnh SQL thôi cũng đủ để chúng làm bất cứ thứ gì liên quan tới dữ liệu.

Không những thế, SQL Injection còn có thể thực thi được mã HTML hoặc PHP trong nhiều trường hợp. Đó là lý do tại sao lỗ hổng này nghiêm trọng như vậy.

### Chống injection như thế nào?

#### Truy vấn tham số (Parameterized Statements)

Đa số các ngôn ngữ lập trình hỗ trợ truy vấn SQL đều sẽ hỗ trợ chạy các câu lệnh SQL bằng cách tạo truy vấn để trích xuất các tham số khi cần thiết. Các câu lệnh nên được _tham số hoá_ để đảm bảo rằng các _tham số_ (tức là _dữ liệu đầu vào_) đưa vào câu lệnh SQL được xử lý một cách an toàn nhất.

Với ví dụ ở [phần trên](#nh%c6%b0ng-t%e1%ba%a1i-sao-c%c3%b3-l%e1%bb%97-h%e1%bb%95ng-n%c3%a0y), chúng ta sẽ thử đưa nó về dạng truy vấn tham số:

```php
// Câu lệnh SQL chờ tham số
$sql = "SELECT * FROM USERS
  WHERE email = ?
  AND password = ?
  LIMIT 1";

// Chuẩn bị và ràng buộc
$stmt = $connection->prepare($sql);
$stmt->bind_param("ss", $email, $password);

// Truyền tham số và thực thi
$email = $_POST['email'];
$password = $_POST['password'];
$stmt->execute();

// Đừng quên close connection mỗi lần thực thi xong
$stmt->close();
$conn->close();
```

Dạng **bind** param này chắc có lẽ sẽ khó để truyền tham số khi số lượng column cần dùng trong query trở nên nhiều hơn, vậy nên còn có cách như sau:

```php
// Câu lệnh SQL chờ tham số
$sql = "SELECT * FROM USERS
  WHERE email = :email
  AND password = :password
  LIMIT 1";

// Chuẩn bị và ràng buộc
$stmt = $connection->prepare($sql);
$stmt->bindParam(":email", $email);
$stmt->bindParam(":password", $password);

// Truyền tham số và thực thi
$email = $_POST['email'];
$password = $_POST['password'];
$stmt->execute();
```

Ví dụ trong một số ngôn ngữ khác:

**C#**

```csharp
// Create the SQL command.
SqlCommand command = new SqlCommand("select * from users where email = @email", conn);

// Add the parameter values in separately.
command.Parameters.Add(new SqlParameter("email", email);

using (SqlDataReader reader = command.ExecuteReader())
{
  while (reader.Read())
  {
    // Do something with the retrieved data.
  }
}
```

**Django**

```python
# Good
Users.objects.filter(email=email)

# Good
Users.objects.raw("select * from users where email = %s", [email])

# Liable to got hacked
Users.objects.raw("select * from users where email = '%s'" % email)
```

**Node**

```js
// node-sql
var sql = require('sql');
var query = user.select(user.star()))
                .from(user)
                .where(user.email.equals(email)).toQuery();

// mysql
var mysql = require('mysql');
var connection = mysql.createConnection({ host: HOST, user: USERNAME, password: PASSWORD });
connection.connect();

connection.query(
  'select * from users where email = ?',
  [email],
  function(err, rows, fields) {
    // Do something with the retrieved data.
  });

connection.end();
```

#### Hãy validation từ Front-end cho tới Back-end

**Validation** dữ liệu chưa bao giờ là công việc thú vị :okay: tuy nhiên việc validation 2 bước giúp bảo mật tốt hơn, và đồng thời cũng tránh được các lỗi lặt vặt không cần thiết.

Ví dụ trên front-end các field nhập vào dữ liệu số, nên dùng input `number` thay vì input `text`. Các field bắt buộc thì nên `required`. Mặc dù trên front-end có thể verify dữ liệu đầu vào, nhưng attacker vẫn có thể ignore những rule này để trực tiếp gửi dữ liệu vào back-end, vậy nên trên back-end chúng ta nên verify lại dữ liệu, như kiểu `$age = (int)$_POST['age']`. Điều này sẽ tránh được các yếu tố gây ra lỗi không đáng có.

#### Phân quyền quản trị

Mình thấy rất nhiều bạn khi xây dựng project, thường sử dụng tài khoản **`root`** của DBMS để làm tất cả mọi thứ... Đó là một sai lầm cực kỳ lớn. Phần lớn các bạn đều chưa hiểu mức độ nghiêm trọng của vấn đề này, vấn đề này giải thích cũng khó hiểu, phải trong trường hợp thực tế các bạn học được thì dễ nhớ hơn.

Tuy nhiên mình vẫn sẽ đưa ra một ví dụ đơn giản như sau:

Khi bạn đăng nhập, việc cần làm của database chỉ là vào đọc dữ liệu (quyền **READ**) để verify thông tin. Trong khi các bạn lại cấp full quyền cho **user** của DBMS chỉ dùng để đọc... Giả sử form đăng nhập trên hệ thống có lỗ hổng SQL Injection, thì việc attack từ cái form login xoá toàn bộ dữ liệu của bạn là điều cực kỳ đơn giản, còn nếu user tương tác với database chỉ có quyền đọc, thì attacker cũng chỉ có thể truy cập tài khoản đó mà thôi.

Nghĩa là bạn chỉ gặp một nguy cơ nhỏ hơn so với cái nguy cơ cực kỳ khủng khiếp kia.

Đó, không phải tự dưng mà **Oracle** được cho là hệ quản trị database SQL bảo mật nhất, lý do là vì phân quyền của **Oracle** cực kỳ chặt chẽ. Do đó, tốt nhất nên phân quyền cho các user trong DBMS một cách chặt chẽ và hợp lý, để tránh hối hận về lâu về dài.

Vấn đề phân quyền không phải chỉ ở trong DBMS, mà còn ở trong cả hệ thống, và cấu hình **server**. Nhắc lại lần nữa: **Phân quyền cực kỳ quan trọng**

<img
  title="chmod 777 and you will see"
  alt="chmod 777 and you will see"
  src="/assets/blog/sql-database-hacking/06.jpg"
/>

## Kết luận

SQL Injection không phải một vấn đề mới mẻ, nó tồn tại cả một thập kỷ rồi nhưng nó vẫn đứng đầu bảng xếp hạng về các lỗ hổng nguy hiểm nhất trong nhiều năm liền. Chỉ với một vài bước dễ dàng, hệ thống của bạn có thể bị tê liệt hoàn toàn... Chống thì khó, mà phá thì dễ lắm.

Nên nhớ:

> Đạo cao một thước, ma cao một trượng.
