---
title: 'Laravel From Scratch: Từ đầu tới đít'
layout: post
categories: dev
tags: laravel tutorial
feature_image: https://i.imgur.com/SYVY6DM.jpg
description: Kể từ khi Laravel phát hành vào năm 2011, nó tăng trưởng theo cấp số nhân. Năm 2015, Laravel đã trở thành PHP Framework được đánh giá cao nhất trên Github và trở thành framework quốc dân. Sau khi bản 6.0 ra đời, Laravel thực sự trở thành một hệ sinh thái khổng lồ dành cho dân code web. Thế nên học đê...
date: '2019-10-20 17:00:00 +0700'
---

<div class="center">
    <h2>Cảnh báo: Wall of Text</h2>
    Vì một tương lai tươi sáng, hãy khắc phục chứng sợ chữ...
</div>



## Laravel là cái gì?

**Laravel** là một PHP Framework mã nguồn mở và miễn phí, sinh ra nhằm mục tiêu hỗ trợ phát triển các ứng dụng web theo mô hình MVC.

Kể từ khi **Laravel** phát hành vào năm **2011**, nó tăng trưởng theo *cấp số nhân*. Năm 2015, Laravel đã trở thành PHP Framework được đánh giá cao nhất trên Github và trở thành framework quốc dân. Sau khi bản 6.0 ra đời, Laravel thực sự trở thành một hệ sinh thái khổng lồ dành cho dân code web.

![](https://i.imgur.com/SYVY6DM.jpg)

Bài viết này mình tham khảo từ các tutorial của nước ngoài, dịch và chỉnh sửa lại đôi chỗ cho phù hợp với bản mới nhất, hy vọng giúp các bạn đi từ bước ý tưởng đến bước build thành công một sản phẩm đầu tay của mình 😁. Tuy nhiên sẽ không được toàn diện hay chi tiết vì nó chỉ là hướng dẫn tân thủ cơ bản, nên nếu thực sự muốn học chuyên sâu hơn nữa thì các bạn nên đọc cuốn sách [*Laravel: Up and Running*](https://amzn.to/2MXh0aB) hoặc tự mò tới chết và làm tới chết thì sẽ giúp bạn trở thành một senior đấy. 🤣

Yêu cầu cơ bản:
 * Một bộ não.
 * Có căn bản về PHP.
 * Một chút xíu xìu xiu kiến thức về HTML, CSS.
 * Một chút tẹo tèo teo về MVC.
 * Tư duy lập trình căn bản.

Yêu cầu về mặt công nghệ:
 * Môi trường PHP trên máy của bạn (Valet, Homestead, Vagrant, MAMP, LAMP,...).
 * Có một cơ sở dữ liệu (ở đây mình sẽ dùng MySQL làm gốc).
 * PHPUnit, Composer và Node phải được cài đặt sẵn.

Đáp ứng yêu cầu thì đi vào bước đầu thôi nào

## #01: Planning - Xây dựng kế hoạch

Mọi dự án đi lên từ ý tưởng, mọi công việc đều có mục đích. Thế nên mình không quan trọng các bạn có được công việc hay ý tưởng bằng cách nào, nhưng mà mọi công việc hay ý tưởng đều cần có kế hoạch thì mới có thể đi từ đầu tới đít được, thế nên cứ phải có kế hoạch đi đã.

Nhiều người chọn cách viết kế hoạch vào một cái notepad, hoặc word, hoặc vẽ một chiếc sơ đồ tư duy, hoặc một cái gì đó khác. Mình thì thích viết trên giấy hơn. Cách nào không quan trọng, miễn sao bạn chịu lập ra được kế hoạch cho dự án là được.

Giả sử ở bài viết này, mình sẽ cố gắng xây dựng một web app cho một cộng đồng cùng lưu trữ liên kết (Links Bookmark), thì mình sẽ đề ra những mục tiêu như thế này:

1. Hiển thị được danh sách liên kết
2. Tạo một cái form để mọi người cùng chia sẻ liên kết mới
3. Đã có form thì phải có xác thực (validate)
4. Lưu dữ liệu được gửi vào cơ sở dữ liệu (database)

![Xây dựng kế hoạch](https://i.imgur.com/qXdrYWJ.jpg)

Có kế hoạch rồi nè, triển chiêu thôi nào!

## #02: Initialization - Khởi tạo

Trước tiên, bạn cần phải cài đặt Laravel trên máy đã, có 2 cách để cài đặt

#### Cách 1: Cài đặt thông qua Laravel Installer

Đối với cách này, các bạn phải tải bộ **Laravel Installer** xuống bằng **Composer**:

    composer global require laravel/installer

**Lưu ý:** Hãy đảm bảo thư mục bin của vendor phải nằm đúng `$PATH` của toàn bộ hệ thống. Tùy theo mỗi hệ điều hành mà địa chỉ của chúng nó sẽ khác nhau. Dù sao thì một số vị trí phổ biến:
 * Trên macOS và các GNU / Linux Distribution: `HOME/.config/composer/vendor/bin`
 * Trên Windows: `%USERPROFILE%\AppData\Roaming\Composer\vendor\bin`

Một khi đã cài đặt xong, lệnh `larravel new` sẽ khởi tạo một dự án Laravel hoàn toàn mới ở chỉ mục bạn đang ở, do đó nhớ vào thư mục parent mà bạn muốn khởi tạo dự án rồi thực thi lệnh cài đặt:

```
$ cd root_folder
$ laravel new links
$ cd links
```

#### Cách 2: Cài đặt bằng Composer Create-Project

Với cách này thì tương đối đơn giản hơn vì không cần phải cài đặt bộ *Laravel Installer*, tuy nhiên bạn phải nhớ câu lệnh kha khá dài dòng của nó để lần tới cài đặt bạn sẽ phải gõ lại mớ câu lệnh đó:

    $ composer create-project --prefer-dist laravel/laravel links
    $ cd links

Vậy là khởi tạo dự án xong rồi đó. Trong đó: `links` là tên dự án. Bây giờ mình sẽ cấp một tên miền giả để dễ dàng trong việc debug và phát triển sau này, việc này mình sẽ hướng dẫn các bạn vào một bài viết nào đó *(hứa hẹn thế thôi)*. Và tên miền của dự án bây giờ là: **`links.test`**

Các bạn có thể chạy demo dự án mà không cần tên miền giả bằng cách sử dụng lệnh:

    $ php artisan serve

Lệnh này thực thi nhờ việc bộ *PHP's built-in development* trên local của bạn, khởi chạy một **máy chủ phát triển (development server)** có địa chỉ là `http://localhost:8000` hoặc `http://127.0.0.1:8000`

![Giao diện ban đầu sau khi cài đặt](https://i.imgur.com/pg4rQyM.png)

Rồi, bây giờ thì chúng ta cần tạo ra một hệ thống quản lý thành viên trên website. Đọc đến đây chắc nhiều bạn sẽ hỏi tại sao ban nãy mình không liệt kê công việc này vào kế hoạch? Lý do đơn giản là vì Laravel đã hỗ trợ việc này rồi. Nếu ai có làm Laravel trước đó sẽ biết chỉ cần 1 câu lệnh là giải quyết được vấn đề này:

    $ php artisan make:auth

Tuy  nhiên từ **Laravel 6**, lệnh `make:auth` không còn hoạt động nữa, thay vào đó Laravel xây dựng hệ thống `laravel/ui` mới, thế nên từ bây giờ các bạn phải cài đặt thêm package `laravel/ui`:
    
    $ composer require laravel/ui
    $ php artisan ui --help

Tuy nhiên nếu bạn định sử dụng Vue, React hoặc Bootstrap, package ui cung cấp các provides sau:

    $ php artisan ui vue
    $ php artisan ui react

Thêm optional `--auth` để khởi tạo xác thực người dùng cùng lúc. Còn khi bạn chỉ cần giao diện của auth mà không định dùng những thứ bên trên, thì lệnh như sau:

    $ php artisan ui:auth

Đó là cái lợi hại của framework, thay vì nếu viết bằng PHP chay, các bạn sẽ phải tạo ra các form, validate dữ liệu, hash password, check cookies, user token validation,... vân vân mây mây các công việc mà chỉ về quản lý thôi, cũng phải mất cả mấy ngày trời để hoàn thành.

#### Configure Framework Environment

Việc configure environment đối với các framework là công việc các bạn setting các thông số của web app, thông tin các kết nối database, boardcast server, cache type, session, redis, mail server,... Thay vì phải configure ở từng khu vực riêng, gom hết lại 1 chỗ giúp config dễ dàng hơn. Tuy nhiên các bạn nên lưu ý file `.env` là 1 file tối quan trọng nên các bạn không nên push lên git hoặc share đi bất kỳ nơi nào để đảm bảo cho việc bảo mật thông tin server. 😉

Tại thư mục `links`, các bạn tìm tới file `.env`. Tìm tới dòng thứ 9 sẽ thấy:

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```

Các bạn configure lại theo database các bạn khởi tạo, ví dụ config của mình là:

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=links_example
DB_USERNAME=links_admin
DB_PASSWORD=dmEd6vZU14HWziAA
```

*Lưu ý* sẽ có 1 file tương tự mang tên `.env.example`, tuyệt đối **ĐỪNG xóa** hay chỉnh sửa file này.

Thiết lập đến đây coi như đã hoàn thành sơ sơ rồi đó, giờ là lúc các bạn bắt đầu code nè.

## #03: Building - Xây dựng

Tiếp tục nào, nếu khi bắt đầu một dự án, bạn lại nghĩ về toàn bộ scale của dự án thì bạn rất dễ **bị choáng** bởi khối lượng công việc bạn sẽ làm. 😯 Nhất là ở bước ban đầu, việc thiết kế cơ sở dữ liệu trở nên *phức tạp kinh khủng*, nhiều dự án số lượng bảng trong một CSDL có thể lên đến hàng chục bảng, hoặc việc phân tán CSDL ra để giảm áp lực lên CSDL lớn.

Thế nên cách tốt nhất để chống lại việc đó là chia nhỏ công việc ra, vì vậy đối với các dự án nhỏ, chúng ta có thể thiết kế CSDL theo từng chức năng thay thì phải thiết kế toàn bộ CSDL.

Bây giờ là lúc các bạn làm quen với khái niệm **`migration`**. **Migration** hay **Data Migration** *(Chuyển đổi dữ liệu)* là một tính năng *active record* cho phép bạn thay đổi cấu trúc và data trong database mà không cần tương tác trực tiếp với database, thay vào đó framework sẽ cung cấp các **schema** để khởi tạo và thay đổi các table (bảng). Tức là bạn không cần phải viết các câu lệnh SQL bằng một DBMS (Database Management System) nào đó phải cài đặt thêm... Ban đầu các schema sẽ rỗng, và mỗi lần migrate thì sẽ modify để add hoặc remove table, columns (cột) hoặc rows (dòng)...

Lý thuyết cơ bản thôi, giờ thì đây là cách để tạo một **migration** trong Laravel bằng lệnh **artisan**:

    $ php artisan make:migration [migration_name]

Sau đó các bạn sẽ thấy một file mới có định dạng `[datetime]_[migration_name].php` được lưu trữ tại mục `database/migrations`.

Mặc định sau khi khởi tạo authorization, sẽ có một file `2014_10_12_000000_create_users_table.php` có sẵn tại mục trên, mình sẽ tùy chỉnh file này lại một chút cho đúng ý mình nhé:

```php
...
    Schema::create('users', function (Blueprint $table) {
        $table->increments('id');
        $table->string('username')->unique();
        $table->string('display_name');
        $table->string('email')->unique();
...
```

Sau đó mình khởi tạo một migration cho việc lưu trữ liên kết bằng một bảng tên **`links`**:

    $ php artisan make:migration create_links_table

Sau đó chỉnh sửa lại Schema của bảng **`links`** theo đúng yêu cầu dự án:

```php
...
    Schema::create('links', function (Blueprint $table) {
        $table->increments('id');
        $table->string('title');
        $table->string('url')->unique();
        $table->text('description');
        $table->integer('user_id');
        $table->timestamps();
    });
...
```

Nhớ lưu file lại, sau đó chạy **`migrate`**

    $ php artisan migrate

Tuy nhiên khi bạn đang làm việc bằng data giả, bạn có thể chạy lệnh sau để reset toàn bộ schema:

    $ php artisan migrate:fresh

Tiếp nào, giờ chúng ta sẽ cần dữ liệu và **Model** để làm việc với CSDL. Laravel cung cấp 2 feature để hỗ trợ cho việc này: ***database seeder & model factory***. Chúng cho phép chúng ta tạo ra dữ liệu giả cho model và sử dụng vào việc kiểm tra và thử nghiệm (test). Hãy tạo cả factory và model cùng một lúc cho đỡ vất vả nhé:

    $ php artisan make:model --factory Link

Lệnh artisan bên trên sẽ được giải thích như sau: `make:model` để khởi tạo một model mới có tên là **Link**, kkefm theo đó flag `--factory` cũng sẽ tạo ra một factory file được lưu tại mục `database/factories`. Mặc định việc quản lý người dùng cũng đã có một Model và một Factory nên chúng ta không cần phải khởi tạo nhé. Giờ thì chỉnh sửa lại **UserFactory** và **LinkFactory** nhé.

**UserFactory.php**
```php
<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(App\User::class, function (Faker $faker) {
    return [
        'username' => $faker->unique()->word,
        'display_name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'password' => bcrypt('password'),
        'remember_token' => Str::random(10),
    ];
});
```

**LinkFactory.php**
```php
<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use Faker\Generator as Faker;

$factory->define(App\Link::class, function (Faker $faker) {
    return [
        'title' => substr($faker->sentence(2), 0, -1),
        'url' => $faker->url,
        'description' => $faker->paragraph,
        'user_id' => 1,
    ];
});
```

Mặc định cho `user_id` là 1 để tránh bug thôi 😪. Tiếp theo chúng ta sẽ cần đến **seeder**, việc tạo ra seeder là để chạy factory đơn giản hơn đó.

    $ php artisan make:seeder LinksTableSeeder

Lệnh `make:seeder` sẽ tạo ra một database seeder để seed một bảng đã chỉ định (ở đây là bảng `links`). Mở file `database/seeds/LinksTableSeeder.php` ra và thêm như sau:

```php
public function run()
{
    factory(App\Link::class, 5)->create();
}
```

Để *"kích hoạt"* seeder tables, chúng ta cần gọi nó ra từ `run` method của `database/seeds/DatabaseSeeder.php`:

```
public function run()
{
    $this->call(LinksTableSeeder::class);
    $this->call(UsersTableSeeder::class);
}
```

Giờ thì chúng ta có thể chạy seeder sau mỗi lần sử dụng lệnh `migrate:fresh` thêm optional `--seed` vào phía sau. Hoặc có thể dùng lệnh `db:seed` để chạy *DatabaseSeeder*. Trong trường hợp bạn chỉ muốn chạy một file seeder riêng, không nhất thiết phải vào file **DatabaseSeeder.php** để chỉnh sửa mà có thể dùng optional `--class=LinksTableSeeder` cho lệnh `db:seed`. Câu lệnh hoàn chỉnh sẽ như thế này:

    $ php artisan migrate:fresh --seed
    $ # hoặc
    $ php artisan db:seed [--class=LinksTableSeeder]

Giờ chúng ta có thể kiểm tra CSDL bằng một phần mềm DBMS nào đó hoặc có thể sử dụng `tinker shell` để kiểm tra trực tiếp cũng được:

```
$ php artisan tinker
$ >>> App\Link::all()
$ => Illuminate\Database\Eloquent\Collection {#3023
    all: [
        App\Link {#3024
            id: 1,
            title: "Voluptate provident maxime",
            url: "http://upton.com/repudiandae-esse-et-et-rem-sapiente",
            description: "Ipsam natus est non amet. Sit sed voluptatibus voluptas nostrum blanditiis consequuntur. Non tempora sapiente impedit distinctio aut dolor totam.",
            user_id: 1,
            created_at: "2019-10-20 17:30:27",
            updated_at: "2019-10-20 17:30:27",
        },
        App\Link {#3025
            id: 2,
            title: "Minima rem non",
            url: "http://hills.com/blanditiis-quia-omnis-et.html",
            description: "Molestias porro molestiae facilis laborum qui modi unde. Iure repudiandae sed omnis explicabo numquam. Repudiandae in non repellat est est repudiandae quas. Enim maxime eveniet molestiae nostrum possimus amet.",
            user_id: 1,
            created_at: "2019-10-20 17:30:27",
            updated_at: "2019-10-20 17:30:27",
        },
        App\Link {#3026
            id: 3,
            title: "Consequatur aut eveniet",
            url: "http://osinski.info/sed-debitis-excepturi-neque-beatae-esse-debitis",
            description: "Voluptas ipsum id ipsa quis rerum. Omnis facilis vel animi nesciunt. Delectus non porro ex dolorem. Ipsa laborum dicta blanditiis delectus voluptatum. Ipsum nisi sit autem est hic ut.",        
            user_id: 1,
            created_at: "2019-10-20 17:30:27",
            updated_at: "2019-10-20 17:30:27",
        },
        App\Link {#3027
            id: 4,
            title: "Consectetur accusantium",
            url: "https://abernathy.com/qui-vel-delectus-quis-omnis.html",
            description: "Dolorum ab quis minus fugit unde quo. Voluptatum consequatur quisquam distinctio eos 
        corrupti amet placeat neque. Dignissimos molestiae ipsa repellat ut enim impedit voluptates. Rerum atque repudiandae eveniet earum.",
            user_id: 1,
            created_at: "2019-10-20 17:30:27",
            updated_at: "2019-10-20 17:30:27",
        },
        App\Link {#3028
            id: 5,
            title: "Accusamus debitis sapiente",
            url: "https://www.bailey.info/quis-voluptatem-quia-ea-voluptate-voluptatem-officiis",
            description: "Voluptatum et vel deserunt illum fuga quisquam. Et neque nemo quisquam velit facilis 
        id sint aliquid. Aliquid quis nobis consequuntur delectus assumenda aut optio. Perferendis nisi amet omnis velit voluptatibus veniam earum.",
            user_id: 1,
            created_at: "2019-10-20 17:30:27",
            updated_at: "2019-10-20 17:30:27",
        },
    ],
  }
```

Giờ thì ta có vị trí dât và model để tương tác với CSDL. Sẵn sàng để bắt đầu xây dựng interface rồi nhỉ?

### Routing & Views

Để xây dựng view hiển thị danh sách liên kết, chúng ta cần cập nhật lại **route** của project. Làm việc này bằng cách truy cập vào file `routes/web.php`. Ở đó, chúng ta sẽ thấy một dòng mặc định như sau:

```php
Route::get('/', function () {
    return view('welcome');
});
```

Việc handle (xử lý) một route mới chúng ta có thể sử dụng **route closure** hoặc một **controller class** chuyên dụng. Mình sẽ hướng dẫn việc sử dụng closures ở tutorial này cho nó căn bản, vì mình sẽ nói sâu về MVC ở một bài viết khác. Hãy update lại home bằng việc parse dữ liệu ra view nhé, bỏ cái view `welcome` đi vì giờ không cần nữa rồi, thay vào đó mình sẽ tạo ra một view `index` và cấu hình lại route đồng thời pass luôn dữ liệu từ model vào view:

```php
Route::get('/', function () {
    $links = \App\Link::all();

    return view('index', ['links' => $links]);
});
```

Sau đó chúng ta sẽ cập nhật view **index** đã khởi tạo trước đó tại `resource/views/index.blade.php`:

```html
@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    <ul>
                    @foreach ($links as $link)
                        <li><a href="{{ $link->url }}">{{ $link->title }}</a></li>
                    @endforeach
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
```

Không hiểu gì phải không? Tới giờ giáo sư rồi này 🤣

Khi `Route` bắt được phương thức `get` đến địa chỉ `/` thì sẽ có một *closure* trả một *callback* là một view blade tên là `index` đặt tại `resource/views` với *data* được truyền tới là `links` vào trong một biến tên là `links`. Biến này sẽ được sử dụng trong `index.blade.php` như một biến php thông thường mà không cần phải khai báo.

Việc truyền dữ liệu bằng cách thêm đối số thứ 2 vào hàm view có lẽ sẽ làm nhiều bạn thấy khó khăn, nên cũng có cách khác là sử dụng fluent API để define biến nếu bạn thích:

```php
// sử dụng hàm with()
return view('index')->with('links', $links);
// hoặc
// sử dụng dynamic method
return view('index')->withLinks($links);
```

Còn ở file `index.blade.php`, chúng ta có một vòng lặp đơn giản `foreach` tương tự như trong PHP nên mình sẽ không giải thích nhiều, template blade của Laravel khá dễ học nên mình cũng không giải thích thêm nhiều, sẽ có một bài phân tích sâu hơn về blade và các template hay ho nếu các bạn thích.

```php
@foreach ($links as $link)
    <a href="{{ $link->url }}">{{ $link->title }}</a>
@endforeach
```

Giờ thì refresh lại browser để xem kết quả nhé. 😗

![Kết quả đạt được](https://i.imgur.com/MFnYx8N.png)

Ô de, vậy là chúng ta đã hoàn thành được mục tiêu đầu tiên rồi đó! Nghỉ giải lao bằng cách nghe một bài nhạc thư giãn nào, nhưng đừng có nghỉ nhiều quá đó 😗 Hãy sớm bắt đầu bước tiếp theo ngay nhé~

<iframe width="560" height="315" src="https://www.youtube.com/embed/oR4jpgldJzI" frameborder="0" allowfullscreen></iframe>

### Submission Form

Hoàn thành được mục tiêu thứ nhất, vậy hãy bắt đầu với mục tiêu thứ 2: **Tạo một form cho phép chia sẻ liên kết**. Nếu các bạn có để ý, trên bản kế hoạch giấy của mình sẽ có 1 cái form nhìn khá trực quan được mình vẽ sẵn từ lúc lên ý tưởng, nên mình sẽ bám theo đó làm giao diện cho form luôn. Vì chúng ta đã tạo ra toàn bộ những *core structure* (cấu trúc cốt lõi) như model, factory, migration,... nên ở bước này sẽ khá nhẹ nhàng vì chúng ta sẽ sử dụng lại những giá trị có sẵn đó.

Đầu tiên, hãy cùng tạo ra một cái route mới. Mình sẽ đặt tên route là `submit` với phương thức `get` và trả về *view* `submit`:

```php
Route::get('/submit', function () {
    if (Auth::check()) return redirect()->route('login'); // make sure that only logged-in user can access this route

    return view('submit');
});
```

Tiếp theo thì phải tạo ra một cái template cho `submit.blade.php` và luôn nhớ toàn bộ views sẽ được lưu trữ trong `resources/views`.

```html
@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Submit a Link</div>

                <div class="card-body">
                    <form action="/submit" method="post">
                        @csrf

                        @if ($errors->any())
                            <div class="alert alert-danger" role="alert">
                                Please fix the following errors
                            </div>
                        @endif

                        <div class="form-group row{{ $errors->has('title') ? ' has-error' : '' }}">
                            <label for="title" class="col-sm-2 col-form-label">Title</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="title" name="title" placeholder="Title" value="{{ old('title') }}">
                                @if($errors->has('title'))
                                    <span class="help-block">{{ $errors->first('title') }}</span>
                                @endif
                            </div>
                        </div>
                        <div class="form-group row{{ $errors->has('url') ? ' has-error' : '' }}">
                            <label for="url" class="col-sm-2 col-form-label">Url</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="url" name="url" placeholder="URL" value="{{ old('url') }}">
                                @if($errors->has('url'))
                                    <span class="help-block">{{ $errors->first('url') }}</span>
                                @endif
                            </div>
                        </div>
                        <div class="form-group{{ $errors->has('description') ? ' has-error' : '' }}">
                            <label for="description">Description</label>
                            <textarea class="form-control" id="description" name="description" placeholder="description">{{ old('description') }}</textarea>
                            @if($errors->has('description'))
                                <span class="help-block">{{ $errors->first('description') }}</span>
                            @endif
                        </div>
                        <input type="hidden" name="user_id" value="{{ Auth::user()->id }}">
                        <button type="submit" class="btn btn-primary float-right">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
```

Hơi nhiều thứ ở đây các bạn phải tiếp thu nhở, nên mình sẽ lướt qua sơ sơ những điểm quan trọng có thể gây nhầm lẫn cho những bạn chưa quen với Laravel.

Ở đầu của form, hãy bỏ qua cái `@csrf` vì nó khá lằng nhằng và phức tạp, mình sẽ phải nói về nó trong 1 bài viết khác, nhưng các bạn cứ hiểu sơ sơ là có nó thì form mới thực thi. Tiếp đó chúng ta có một blade điều khiện kiểm tra có bất kỳ lỗi validation nào với form hay không. Khi có lỗi sẽ có một thông báo hiển thị nhắc nhở người dùng rằng form không hợp lệ để gửi.

```html
@if ($errors->any())
    <div class="alert alert-danger" role="alert">
        Please fix the following errors
    </div>
@endif
```

Mỗi field (trường) của form kiểm tra lỗi validation riêng và xuất ra lỗi và thêm một class cảnh báo lỗi vào cho thẻ để tùy biến giao diện:

```html
<div class="form-group row{{ $errors->has('title') ? ' has-error' : '' }}">
    <label for="title" class="col-sm-2 col-form-label">Title</label>
    <div class="col-sm-10">
        <input type="text" class="form-control" id="title" name="title" placeholder="Title" value="{{ old('title') }}">
        @if($errors->has('title'))
            <span class="help-block">{{ $errors->first('title') }}</span>
        @endif
    </div>
</div>
```

Nếu trong trường hợp người dùng gửi form không hợp lệ, route sẽ lưu trữ validation trong session (phiên) cũ và redirect (chuyển hướng) người dùng về trở lại form. Hàm `{{ old('title) }}` bên trong `value` *attribute* sẽ điền lại dữ liệu được gửi trước đó.

Nếu field có lỗi xảy ra, method `first()` sẽ trả về lỗi đầu tiên của field đó:

```html
{{ $errors->first('title') }}
```

### Submitting the Form

Với form đã có, chúng ta sẵn sàng cho việc handle POST và validate dữ liệu. Trở lại file `routes/web.php`, tạo một route mới với method `post` dành cho POST request, route này chỉ catch các request có method là POST:

```php
use Illuminate\Http\Request;

Route::post('/submit', function (Request $request) {
    $data = $request->validate([
        'title' => 'required|max:255',
        'url' => 'required|unique:links|url|max:255',
        'description' => 'required|max:255',
    ]);

    $link = App\Link::create($data);

    return redirect('/');
});
```

Bắt đầu hơi rối phải không? Sở dĩ route này phức tạp hơn các route khác là bởi vì khối lượng công việc nó cần handle nhiều hơn. Hãy phân tích từ từ nhé.

Đầu tiên chúng ta injecting (không biết dùng từ gì trong tiếng Việt cho đúng nghĩa 😖) một object `Illuminate\Http\Request` để hold (giữ lại) các dữ liệu từ method POST request truyền tới.

Tiếp đó là `validate()` method của request dùng để xác thực dữ liệu được gửi từ form. Như chúng ta có 3 field cần phải validate, đều yêu cầu required (bắt buộc phải điền), tối đa 255 ký tự và ở field `url` bắt buộc phải truyền vào dữ liệu là một địa chỉ, đồng thời **là duy nhất** trong bảng **links**. Nếu việc xác thực dữ liệu có lỗi, một exception sẽ được trả lại và route sẽ trả người dùng về nguyên y những input data trước đó cùng với một (mớ) những chiếc lỗi.

Tiếp tục là tạo mới dữ liệu cho model **Link** với hàm `create()`. Rồi trả về route `/`. Ngoài ra các bạn có thể sử dụng cách tạo ra một object mới rồi lưu nó lại:

```php
tap(new App\Link($data))->save();
// hoặc
$link = new \App\Link($data);
$link->save();
```

Về cơ bản là xong rồi đó, tuy nhiên khi chúng ta muốn đưa dữ liệu vào một model, chúng ta phải cho phép các field **"fillable"** (được phép điền vào) thông qua việc assignment (gán). Thuộc tính fillable được thiết kế để tránh việc các field ngoài ý muốn cũng được thêm vào dữ liệu (để tăng tính bảo mật đó mà). Để cho phép model nhận giá trị của dữ liệu từ các field, mở file `app\Link.php` rồi làm dư lày:

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Link extends Model
{
    protected $fillable = [
        'title',
        'url',
        'description',
        'user_id',
    ];
}
```

Ngoài ra các bạn có thể ngăn việc gán dữ liệu hàng hoạt, chúng ta có thể thay đổi cách nhận dữ liệu của model như thế này:

```php
$link = new \App\Link();
$link->title = $data['title'];
$link->url = $data['url'];
$link->description = $data['description'];
$link->user_id = Auth::user()->id;

$link->save()

// hoặc

\App\Link::create([
    'title' => $data['title'],
    'url' => $data['url'],
    'description' => $data['description'],
    'user_id' => Auth::user()->id,
]);
```

Thế là xong chức năng thứ 2 rồi nè.

### Testing the Form Submission

***Lưu ý*: Phần này khá nặng lý thuyết nên các bạn có thể bỏ qua nếu lười đọc**

Laravel cho chúng ta sử dụng kiểm tra HTTP dễ dàng hơn để kiểm tra tính tích hợp đối với các routes và middleware. Vì vậy hãy viết một vài feature tests để kiểm tra code của chúng ta hoạt động đúng như mong đợi.

Trước khi bắt đầu viết test, mình cần phải chỉnh lại một số thứ trong file `phpunit.xml` để có thể sử dụng SQLite trong bộ nhớ. Bạn cần phải đảm bảo rằng bạn đã cài đặt đầy đủ các module phù hợp của PHP. Sử dụng environment variables (biến môi trường), chúng ta có thể thay đổi kết nối cơ sở dư liệu bằng cách thêm vài biến mới vào config:

```xml
<php>
    <!-- ... -->
    <env name="DB_CONNECTION" value="sqlite"/>
    <env name="DB_DATABASE" value=":memory:"/>
    <!-- ... -->
</php>
```

Tiếp theo xóa cái test có sẵn của Laravel ở `tests/Feature/ExampleTest.php` đi vì mình không cần đến nó.

    $ rm tests/Feature/ExampleTest.php

Giờ thì đã sẵn sàng để bắt đầu test route `/submit` form thông qua các HTTP request để cahcws chắn rằng việc validation, lưu và redirect hoạt động đúng như mong đợi ban đầu. Tạo ra một cái feature test mới nào:

    $ php artisan make:test SubmitLinksTest

Lệnh trên khởi tạo một file mới với các phụ thuộc phù hợp, bao gồm cả RefeshDatabase trait mà chúng ta sẽ sử dụng để verify (xác minh) rằng các liên kết của chúng ta đã được lưu vào CSDL khi việc xác thực hợp lệ. Mở file `tests/Feature/SubmitLinksTest.php` mới tạo ra và define một khung xương cho việc test cái xác mà chúng ta đang muốn kiểm tra:

```php
/** @test */
function guest_can_submit_a_new_link() {}

/** @test */
function link_is_not_created_if_validation_fails() {}

/** @test */
function link_is_not_created_with_an_invalid_url() {}

/** @test */
function max_length_fails_when_too_long() {}

/** @test */
function max_length_succeeds_when_under_max() {}
```

Bài test này sẽ cung cấp cho bạn tổng quan nhất về những gì chúng ta cần test:
 1. Chắc chắn rằng liên kết hợp lệ được lưu vào CSDL.
 2. Khi việc xác thực thất bại, liên kết sẽ không được lưu vào CSDL.
 3. Những liên kết không hợp lệ không được phép
 4. Xác thực sẽ thất bại khi các field vượt quá 255 ký tự.
 5. Xác thực sẽ thành công khi các field dài không quá 255 ký tự.

Chúng ta có thể sẽ quên một vài thứ gì đó, nhưng kệ mịa đi, dù sao cũng là sản phẩm đầu tiên nên việc test không quan trọng lắm đâu (nói thế thôi chứ đừng giữ tư duy như thế về sau nhé).

**Saving a valid link**

Bài test đầu tiên chúng ta sẽ kiểm tra việc chắc chắn rằng liên kết hợp lệ được lưu vào CSDL:

```php
<?php

namespace Tests\Feature;

use Illuminate\Validation\ValidationException;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class SubmitLinksTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    function guest_can_submit_a_new_link()
    {
        $response = $this->post('/submit', [
            'title' => 'Example Title',
            'url' => 'http://example.com',
            'description' => 'Example description.',
        ]);

        $this->assertDatabaseHas('links', [
            'title' => 'Example Title'
        ]);

        $response
            ->assertStatus(302)
            ->assertHeader('Location', url('/'));

        $this
            ->get('/')
            ->assertSee('Example Title');
    }

```

Hãy để ý một chúc đến RefreshDatabase trait để đảm bảo rằng mỗi test có một CSDL mới, cung cấp cho mỗi lần thử nghiệm một môi trường CSDL nguyên sơ trên tất cả các lần migration.

Test đầu tiên của chúng ta gửi dữ liệu hợp lệ, trả về một object mà chúng ta có thể dùng để xác nhận rằng route đã phản hồi đúng như mong đợi. Và verify rằng CSDL chúa một record với tiêu đề như vừa tạo. Sau đó, chúng ta verify rằng phản hồi lại là status `302` với Location header trỏ tới trang chủ. Cuối cùng là yêu cầu trang chủ và thấy tiêu đè đó dang hiển thị trên trang chủ.

**Testing Failed Validation**

Khi người dùng gửi dữ liệu xấu (bad data), chúng ta sẽ hy vọng cho việc validation sẽ kích hoạt một exception và chúng ta sử dụng nó để đảm bảo lớp validation đang hoạt động bình thường:

```php
/** @test */
function link_is_not_created_if_validation_fails()
{
    $response = $this->post('/submit');

    $response->assertSessionHasErrors(['title', 'url', 'description']);
}
```

Chúng ta sử dụng hàm **assetSessionHasErrors()** của Laravel để chắc chắn rằng session có lỗi validation cho từng field bắt buộc. Vì chúng ta gửi dữ liệu trống (empty data) tới route, chúng ta sẽ hy vọng rule sẽ kích hoạt cho từng field một.

Giờ thì chạy thử để xác nhận những gì mình làm từ nãy tới giờ không vô nghĩa:

```
$ vendor/bin/phpunit
PHPUnit 8.4.1 by Sebastian Bergmann and contributors.

..                                                                  2 / 2 (100%)

Time: 791 ms, Memory: 22.00 MB

OK (2 tests, 6 assertions)
```

**Testing URL Validation**

Giờ thì chúng ta cần kỳ vọng chỉ những url nào hợp lý mới có thể pass được validation để website không hiển thị những data lỗi

```php
/** @test */
function link_is_not_created_with_an_invalid_url()
{
    $this->withoutExceptionHandling();

    $cases = ['//invalid-url.com', '/invalid-url', 'foo.com'];

    foreach ($cases as $case) {
        try {
            $response = $this->post('/submit', [
                'title' => 'Example Title',
                'url' => $case,
                'description' => 'Example description',
            ]);
        } catch (ValidationException $e) {
            $this->assertEquals(
                'The url format is invalid.',
                $e->validator->errors()->first('url')
            );
            continue;
        }

        $this->fail("The URL $case passed validation when it should have failed.");
    }
}
```

Từ phiên bản Laravel 5.5 đã cho chúng ta một phương thức `withoutExceptionHandling()` dùng cho việc vô hiệu hóa những route xử lý ngoại lệ, sử dụng để tạo ra một HTTP response sau một exception. Rồi kiến thức về ValidationException, try/catch đồ,... tự dưng tới đây lười viết tiếp quá bay... nên thôi mình sẽ đi tàu siêu tốc cho qua luốn nha 😂

**Testing Max Length Validation**

Test xem quá 255 ký tự.

```php
/** @test */
function max_length_fails_when_too_long()
{
    $this->withoutExceptionHandling();

    $title = str_repeat('a', 256);
    $description = str_repeat('a', 256);
    $url = 'http://';
    $url .= str_repeat('a', 256 - strlen($url));

    try {
        $this->post('/submit', compact('title', 'url', 'description'));
    } catch(ValidationException $e) {
        $this->assertEquals(
            'The title may not be greater than 255 characters.',
            $e->validator->errors()->first('title')
        );

        $this->assertEquals(
            'The url may not be greater than 255 characters.',
            $e->validator->errors()->first('url')
        );

        $this->assertEquals(
            'The description may not be greater than 255 characters.',
            $e->validator->errors()->first('description')
        );

        return;
    }

    $this->fail('Max length should trigger a ValidationException');
}
```

Ừ thì chúng ta vô hiệu hóa các xử lý exception và tạo ra dữ liệu quá lên 1 ký tự để vượt qua validation. Làm thế với từng field để đảm bảo tất cả chúng nó đều có thông báo lỗi validation độ dài tối đa.

Rồi lại kiểm tra kịch bản "under the max" nè:

```php
/** @test */
function max_length_succeeds_when_under_max()
{
    $url = 'http://';
    $url .= str_repeat('a', 255 - strlen($url));

    $data = [
        'title' => str_repeat('a', 255),
        'url' => $url,
        'description' => str_repeat('a', 255),
    ];

    $this->post('/submit', $data);

    $this->assertDatabaseHas('links', $data);
}
```

Được không bạn? Được luôn chứ còn gì nữa

```
$ vendor/bin/phpunit
PHPUnit 6.4.3 by Sebastian Bergmann and contributors.

......                                                              6 / 6 (100%)

Time: 197 ms, Memory: 22.00MB

OK (6 tests, 17 assertions)
```

### Bài học xương máu

**Yeee!** Vậy là bạn vừa đọc qua một bài viết siêu dài, có thể là dài nhất trong tất cả các tutorial mình viết từ xưa tới giờ đó. Hy vọng qua tutorial này sẽ giúp phần nào nâng cao kỹ năng của các bạn và giúp các bạn beginner nắm rõ hơn về Laravel. Mình biết vài viêt sẽ còn nhiều thiếu sót và nhiều sạn nhưng hy vọng các bạn sẽ đóng góp và phản hồi lại cho mình 🤗 Sẽ còn nhiều chỗ các bạn nhìn vào khá mông lung, nhưng bài viết này cũng có kha khá các kỹ thuật nâng cao mà nhiều người cũng không biết đó.

Dù sao thì cảm ơn vì đã đọc đến đây, thấy hay thì hãy để lại cho mình một like, hữu ích thì hãy share cho mọi người nha 🥰 Mình sẽ cố gắng viết thêm các bài hướng dẫn khác để các bạn beginner học Laravel tốt hơn, vì dù sao bài này cũng chỉ là introducing Laravel thôi 😆