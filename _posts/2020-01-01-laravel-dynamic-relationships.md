---
title: 'Laravel Dynamic Relationship - Thao tác với truy vấn con như thế nào?'
layout: post
date: '2020-01-01 18:00:00 +0700'
categories: dev
tags: laravel relationship orm
feature_image: https://i.ibb.co/19jx0xK/laravel-2.jpg
description: Vì trằn trọc bao đêm bao ngày giải quyết hai câu hỏi optimize web như thế nào, mà nhiều kẻ phải hao tâm tổn sức, tu luyện các document tới tẩu hoả nhập ma... Ấy thế mà không hiểu sao nhiều kẻ kiêu ngạo chưa xử lý được vấn đề cốt lõi mà đã tự nhận mình là engineering... Thật là làm người ta tức chết mà.
---

## Thiên hạ Đại loạn

Có hai câu chuyện muôn thuở của dân optimize web sử dụng Database là:

1. Làm sao để hạn chế số query xuống thấp nhất?
2. Làm sao để sử dụng ít bộ nhớ nhất?

Vì trằn trọc bao đêm bao ngày giải quyết hai câu hỏi trên, mà nhiều kẻ phải hao tâm tổn sức, tu luyện các document tới tẩu hoả nhập ma... Ấy thế mà không hiểu sao nhiều kẻ kiêu ngạo chưa xử lý được vấn đề cốt lõi mà đã tự nhận mình là engineering... Thật là làm người ta tức chết mà.

Mình đã tiếp cận với một số bạn và bắt đầu cuộc thảo luận nho nhỏ về vấn đề trên, có vẻ như rất nhiều bạn nhận thức được vấn đề số lượng query sẽ gây ảnh hưởng tới tốc độ của website, các bạn thường sử dụng **eager-loading** để giảm lượng query lên database xuống. Nhưng với vấn đề thứ 2, hình như không phải ai cũng nhận thức được, mà trên thực tế, nhiều khi các bạn giảm lượng query xuống lại vô tình... tăng bộ nhớ sử dụng lên 🤣

Giờ thì hãy đi vào giải thích *"tại sao?"* nó lại xảy ra và *phải làm gì?* để đạt được bí kíp cảnh giới hư ảo bất phân biệt nhé.



## Khiêu chiến thiên đạo - The Challenge

Giả dụ, tại một **đại thiên thế giới** nọ, **thiên đạo** cho bạn một danh sách cường giả trong thế giới, thể hiện thông tin **tu chân giả** (user) bao gồm ngày **tu luyện** (login) cuối cùng của hắn. Nghe đơn giản nhỉ, trông nó như sau:

| Tên          | Gia tộc | Lần cuối tu luyện                         |
|--------------|---------|-------------------------------------------|
| Lý Phong Thu | Lý Gia  | Ngày 12 Tháng 12 Năm 2019 vào lúc 12:01PM |
| Mạc Đại Phu  | Mạc Phủ | Ngày 31 Tháng 12 Năm 2019 vào lúc 05:30AM |
| Cành Cà Ru   | Úc      | Không bao giờ                             |

Việc tu luyện của tu chân giả sẽ được theo dõi và lưu vào **tu luyện chi bia** (database)

```php
Schema::create('users', function (Blueprint $table) {
    $table->increments('id');
    $table->string('name');
    $table->string('family');
    $table->timestamps();
});
```

```php
Schema::create('logins', function (Blueprint $table) {
    $table->increments('id');
    $table->integer('user_id');
    $table->string('ip_address');
    $table->timestamp('created_at');
});
```

Đây là Model tương ứng và Relationship:

```php
class User extends Model
{
    public function logins()
    {
        return $this->hasMany(Login::class);
    }
}
```

```php
class Login extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
```

Vậy bình thường các huynh đệ làm thế nào để hiển thị được danh sách như trên? Hay cụ thể là làm thế nào để lấy được **mộc bài** (record) của lần tu luyện cuối cùng của tu chân giả? Thông thường, cách đơn giản nhất sẽ là:

```php
$users = User::all();

@foreach ($users as $user)
  <tr>
    <td>{{ $user->name }}</td>
    <td>{{ $user->family }}</td>
    <td>
      @if ($lastLogin = $user->logins()->latest()->first())
        {{ $lastLogin->created_at->format('\N\g\à\y j \T\h\á\n\g m \N\ă\m Y \v\à\o \l\ú\c g:i a') }}
      @else
        Không bao giờ
      @endif
    </td>
  </tr>
@endforeach
```

Xời, viết tới đây hẳn nhiều huynh đệ sẽ đắc ý, tưởng gì chứ sao làm khó được anh em coder?

Ấy khoan, vị huynh đài ngồi xuống, chúng ta vừa tạo ra `N + 1` issue đấy. Với mỗi tu chân giả, chúng ta lại có một truy vấn bổ sung để lấy thông tin lần cuối hắn tu luyện. Nếu chúng ta có khoảng 50 tu chân giả trong đại thiên thế giới, thì chúng ta phải tốn tới 51 truy vấn 😪

```sql
select * from "users";
select * from "logins" where "logins"."user_id" = 1 and "logins"."user_id" is not null order by "created_at" desc limit 1;
select * from "logins" where "logins"."user_id" = 2 and "logins"."user_id" is not null order by "created_at" desc limit 1;
...
select * from "logins" where "logins"."user_id" = 49 and "logins"."user_id" is not null order by "created_at" desc limit 1;
select * from "logins" where "logins"."user_id" = 50 and "logins"."user_id" is not null order by "created_at" desc limit 1;
```

Khả năng của server cũng như tu chân khí vậy, vận nội công **quá mức** cũng phải bị tiêu hao tới cạn kiệt, thế nên đi ngược lại vấn đề để tối ưu hoá nào. Lần này thử edger-load all `Login` records vào:

```php
$users = User::with('logins')->get();

@foreach ($users as $user)
  <tr>
    <td>{{ $user->name }}</td>
    <td>{{ $user->family }}</td>
    <td>
      @if ($user->logins->isNotEmpty())
        {{ $user->logins->sortByDesc('created_at')->first()->created_at->format('\N\g\à\y j \T\h\á\n\g m \N\ă\m Y \v\à\o \l\ú\c g:i a') }}
      @else
        Không bao giờ
      @endif
    </td>
  </tr>
@endforeach
```

Kinh khủng chưa 😎 Giải pháp này tốn 2 câu query. Một cho danh sách tu chân giả và cái còn lại cho số lần tu luyện tương ứng. Coi như thành công mĩ mãn.

🙄🙄 Nói thế mà tưởng thật á? Đời làm gì có cái gì đơn giản vậy, rảnh đâu tui đi viết blog chi?

Thế là Thiên đạo tức giận đùng đùng, bảo **tu luyện chi bia** làm sao có thể chứa được hết thông tin như vậy? Chúng ta tránh được vấn đề `N + 1` queries, nhưng lại tạo ra một vấn đề lớn hơn là **memories** quá lớn:

```
Số tu chân giản trên đại lục: 50 tu chân giả (users)
Số lần tu luyện trung bình của mỗi cường giả: 250 lần (logins)
*Tổng số dữ liệu tu luyện được tải: 12,500 mộc bài (records)
```

Load ra 12,500 mộc bài chỉ để lấy **`1`** cái **mộc bài** của lần **tu luyện cuối cùng** của **mỗi cường giả**. Thật không thể chấp nhận được, đề nghị thiên đạo giáng thiên kiếp cho thằng coder này 1 phát!

Khi lượng record quá lớn, không chỉ có bộ nhớ tiêu hao mà còn tốn thời gian tính toán, vì mỗi record đều được convert thành eloquent model. Thế mới bảo... Đôi khi các bạn giảm lượng truy vấn xuống lại vô tình tăng bộ nhớ sử dụng lên 🤣



## Đánh trả thiên đạo

### Caching

Với lối tư duy thông thường: "Khó cái đéo gì? Lưu lần tu luyện cuối cùng lại thôi"

```php
Schema::create('users', function (Blueprint $table) {
   $table->integer('last_login_id');
});
```

Khi tu chân giả tu luyện, chúng ta sẽ tạo mới một bản ghi `Login` và update khoá ngoại `last_login_id` trên bảng `users`. Và tạo ra một relationship gọi là `lastLogin` rồi edge-load nó:

```php
$users = User::with('lastLogin')->get();
```

Ừ thì đúng... nhưng mà thực tế caching không đơn giản như thế này 😥 Thôi tìm cách khác

### Subqueries

Có một cách giải quyết khác đó là sử dụng subquery - thứ cho phép chúng ta `select` thêm `extra columns (attributes)` ngay trên câu query chính. Laravel có hỗ trợ subquery qua method `selectSub` đó huynh đệ.

```php
$lastLogin = Login::select('created_at')
    ->whereColumn('user_id', 'users.id')
    ->latest()
    ->limit(1)
    ->getQuery();

$users = User::select('users.*')
    ->selectSub($lastLogin, 'last_login_at')
    ->get();

@foreach ($users as $user)
    <tr>
        <td>{{ $user->name }}</td>
        <td>{{ $user->family }}</td>
        <td>
            @if ($user->last_login_at)
                {{ $user->last_login_at->format('\N\g\à\y j \T\h\á\n\g m \N\ă\m Y \v\à\o \l\ú\c g:i a') }}
            @else
                Never
            @endif
        </td>
    </tr>
@endforeach
```

Ví dụ này, trên thực tế chúng ta chưa sử dụng tới relationship. Ở đây mới sử dụng subquery để lấy mộc bài tu luyện cuối cùng của mỗi tu chân giả như một thuộc tính của tu chân giả.

Câu lệnh SQL thực tế được chạy:

```sql
select
    "users".*,
    (
        select "created_at" from "logins"
        where "user_id" = "users"."id"
        order by "created_at" desc
        limit 1
    ) as "last_login_at"
from "users"
```

Sử dụng subquery kiểu này cho chúng ta tất cả thông tin cần thiết trong một lần truy vấn duy nhất. Kỹ thuật này cung cấp hiệu suất lớn hơn, vì vừa kiểm soát được cả lượng truy vấn dữ liệu, vừa giữ mức bộ nhớ sử dụng ở mức tối thiểu, thêm nữa là chúng ta đã tránh được việc sử dụng bộ nhớ đệm (cache). Caching không phải lúc nào cũng tốt.



## Múa may kỹ năng

Phần này đọc thêm cho vui

### Macro

Trước khi tiến xa hơn, để mình nói cho bạn nghe một macro mình hay sử dụng để khi sử dụng subquery thì thao tác ngắn hơn. Macro được khai báo trong `AppServiceProvider@boot`:

```php
use Illuminate\Database\Query\Builder;

Builder::macro('addSubSelect', function ($column, $query) {
  if (is_null($this->columns)) {
    $this->select($this->from.'.*');
  }

  return $this->selectSub($query->limit(1), $column);
});
```

Nhìn cũng đủ hiểu phải không? Không cần quá quan tâm về việc cái Macro này làm gì đâu, nhưng mà nếu tò mò thì:
* Nó thêm `select('table.*')` để lất tất cả cột của bảng cơ sở trong một truy vấn con mới. Cái này bắt buộc vì Laravel sẽ không include `select *` nếu bạn không có bất kỳ tuỳ chỉnh chọn (custom select) nào.
* Thêm giới hạn là 1, vì các truy vấn chỉ nên trả về 1 hàng duy nhất.
* Nó gọi dùm bạn method `selectSub`

Để sử dụng macro thì làm như sau:

```php
$users = User::addSubSelect('last_login_at', Login::select('created_at')
    ->whereColumn('user_id', 'users.id')
    ->latest()
)->get();
```

### Scopes

Scope là đóng gói một method vào trong model để đơn giản hoá controller và có thể tái sử dụng. Làm thế này:

```php
class User extends Model
{
    public function scopeWithLastLoginDate($query)
    {
        $query->addSubSelect('last_login_at', Login::select('created_at')
            ->whereColumn('user_id', 'users.id')
            ->latest()
        );
    }
}

$users = User::withLastLoginDate()->get();
```

## Dynamic Relationship thông qua SubQuery

Giờ thì đến phần chúng ta xây dựng. Sử dụng subquery để lấy lần **tu luyện cuối cùng** của tu chân giả thì khá ô kê rồi, nhưng nếu chúng ta muốn thêm vài thông tin khác nữa thì sao? Ví dụ như tiện thể lấy luôn **địa điểm tu luyện *(ip_address)*** chẳng hạn.

Ờ thì thêm một scope nữa vậy?
```php
$users = User::withLastLoginDate()->withLastLoginIpAddress()->get();

{{ $user->last_login_at->format('\N\g\à\y j \T\h\á\n\g m \N\ă\m Y \v\à\o \l\ú\c g:i a') }} ({{ $user->last_login_ip_address }})
```

Dĩ nhiên là dùng được rồi 😂 Tuy nhiên sẽ tốt hơn nếu có cách nào lấy trực tiếp từ model `Login`, đặc biệt là khi model có sử dụng accessors hay relationship

```php
$users = User::withLastLogin()->get();

{{ $user->lastLogin->created_at->format('\N\g\à\y j \T\h\á\n\g m \N\ă\m Y \v\à\o \l\ú\c g:i a') }} ({{ $user->lastLogin->ip_address }})
```

Chúng ta sẽ bắt đầu định nghĩa một relationship mới `lastLogin` **belongs to**. Thông thường để khai báo relationship, table cần có 1 khoá ngoại, ví dụ ở đây là `last_login_id` như trong solution sử dụng **cache** ở trên. Nhưng ở đây chúng ta không sử dụng cache, mà đó là subquery:

```php
class User extends Model
{
  public function lastLogin()
  {
    return $this->belongsTo(Login::class);
  }

  public function scopeWithLastLogin($query)
  {
    $query->addSubSelect('last_login_id', Login::select('id')
      ->whereColumn('user_id', 'users.id')
      ->latest()
    )->with('lastLogin');
  }
}
```

```php
$users = User::withLastLogin()->get();

@foreach ($users as $user)
  <tr>
    <td>{{ $user->name }}</td>
    <td>{{ $user->family }}</td>
    <td>
      @if ($user->lastLogin)
        {{ $user->lastLogin->created_at->format('\N\g\à\y j \T\h\á\n\g m \N\ă\m Y \v\à\o \l\ú\c g:i a') }}
      @else
        Không bao giờ
      @endif
    </td>
  </tr>
@endforeach
```

Kết quả là có 2 truy vấn được thực thi:

```sql
select
    "users".*,
    (
        select "id" from "logins"
        where "user_id" = "users"."id"
        order by "created_at" desc
        limit 1
    ) as "last_login_id"
from "users"
```

Về cơ bản nó khá giống với subquery last login date, chỉ thay date bằng id. Từ đó chúng ta có cột `last_login_id` mà không cần dùng cache.

Và query thứ 2 sẽ tự độc thực thi khi eager-load `with('lastLogin')`:

```sql
select * from "logins" where "logins"."id" in (1, 3, 5, 13, 20 ... 676, 686)
```

SubQuery này cho phép lấy duy nhất 1 bảng ghi lần tu luyện cuối cùng của tu chân giả và sử dụng như model `Login` 👌



## Liệu has-one có khả thi?

Đặt vấn đề ngược lại với bài toán, sẽ có bạn hỏi vào thời điểm này rằng: Tại sao không giải quyết bằng cách sử dụng mối quan hệ `một - một`? Câu trả lời ngắn gọn là **không thể**. Tại sao không thể?

Đầu tiên, bạn có thể suy nghĩ cách làm như thế này:

```php
public function lastLogin()
{
  return $this->hasOne(Login::class)->latest();
}
```

Có thể ban nó thực sự xuất hiện và cung cấp kết quả giống như mong muốn của bạn. Tuy nhiên nếu chúng ta xem xét tới query được khởi tạo, chúng ta sẽ thấy một vấn đề:

```sql
select * from "logins" where "logins"."user_id" in (1, 2, 3...99, 100) order by "created_at" desc
```

Đó là thông tin eager-loading của tu luyện theo user_id, nhưng không có giới hạn hoặc filter (bộ lọc) nào. Có nghĩa là: câu truy vấn trên sẽ không chỉ tải lần tu luyện cuối cùng, nó sẽ tải mọi mộc bản tu luyện của người dùng đó. Thế là chúng ta lại quay trở về vấn đề 12,500 mộc bản tu luyện trước đó.

Nhưng với một ý chí cao độ, một quyết tâm bảo thủ, mọi người không chịu bỏ cuộc và thêm `limit`:

```php
public function lastLogin()
{
  return $this->hasOne(Login::class)->latest()->limit(1);
}
```

Có vẻ trông *tốt hơn* rồi đó, hãy xem truy vấn được tạo ra nhé:

```sql
select * from "logins" where "logins"."user_id" in (1, 2, 3...99, 100) order by "created_at" desc limit 1
```

Yé, lại eager-loads hết relationship từ database, nhưng `limit 1`. Tức là chỉ có duy nhất 1 bản ghi cho tất cả tu chân giả 🤣 Tạm gọi nó là "Mộc bài tu luyện cuối cùng của kẻ tu luyện cuối cùng"



## Kết luận

Hy vọng sau bài viết này, các bạn sẽ có một cái nhìn tổng quan hơn về cách sử dụng truy vấn con và các mối quan hệ động (dynamic relationship) trong Laravel. Đây là một kỹ thuật không khó, mà cũng không dễ, nhưng đảm bảo **Duy Mạnh** cho phép bạn optimize web tốt hơn.

Ngôn ngữ trong bài viết _sẽ_ có thể gây khó hiểu, mong thí chủ thông cảm.
