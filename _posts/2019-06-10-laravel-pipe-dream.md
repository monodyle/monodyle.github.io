---
title: 'Laravel Pipe Dream - Khởi tạo project chưa bao giờ nhanh đến thế'
layout: post
date: '2019-06-10 12:45:00 +0700'
categories: dev
tags: laravel composer package pipe-dream
---

[**Laravel Pipe Dream**](https://github.com/pipe-dream/laravel) là một dev package được viết bởi [**Anders Jürisoo**](https://github.com/ajthinking), mục đích dùng để khởi tạo các Schema trong Laravel cực kỳ nhanh chóng.

> Create new web projects really fast. By giving Pipe Dream a minimum of input in form of a sketch/entity list it will predict your application schema and feed it into a set of pipes. These pipes will generate all the files needed to get started really quick.


# Cài đặt

Vào folder root của project rồi chạy câu lệnh sau:

    ~ composer require --dev pipe-dream/laravel

Xong rồi đó, giờ thì mở browser ra, truy cập vào địa chỉ của project, thêm path `/pipe-dream` vào sau rồi bắt đầu thiết kế project của bạn đi nào.


# Sử dụng

![](https://github.com/pipe-dream/laravel/raw/master/src/public/img/screenshots/design.png)

Hãy xem video sau để xem sơ lược về cách thiết kế của Laravel Pipe Dream: https://youtu.be/doUlmZdvP1o

Ở đây, các bạn sẽ thấy có 2 bảng chính đập ngay vào mắt: **sketch** và **schema**

**Sketch** là bảng mà bạn sẽ design cơ bản dựa trên các Model và database bạn mong muốn. Mỗi khi bạn write-down, bảng **Schema** sẽ được cập nhật real-time theo những gì bạn viết.

**Schema** là bảng mà bạn có thể sửa lại những gì bạn mong muốn, ví dụ cast của field `settings` là `array`, hay `nullable` của field `summary` là `true`

Cách thiết kế sketch:
 * Hãy sử dụng **PascalCase** cho tên model
 * Mỗi model sẽ được cách nhau 1 dòng trống (Tách chúng thành từng khối)
 * Foreign key sẽ tự động detect bằng `<tên_model_viết_thường>_id` (Vd: `user_id`, `movie_id`,...)
 * Sử dụng **snake_case** (model1_model2) để setup Many-To-Many relationship
 * Sử dụng **snake_case** và các dòng tiếp theo để tạo bảng

```
// sử dụng PascalCase cho models
Garage
location
capacity

// Tách entities thành từng khối
Car
color
user_id // foreign key

// sử dụng snake_case model1_model2 để xây setup ManyToMany relationship
car_garage 

// Dùng `+ user system` để thêm Schema user mặc định của hệ thống
User 
name
email
email_verified_at
password
remember_token

// sử dụng snake_case để tạo bảng
password_resets
email
token
```

## Review danh sách những file sẽ được khởi tạo

![](https://github.com/pipe-dream/laravel/raw/master/src/public/img/screenshots/review.png)

Ở tab **Review**, bạn sẽ thấy những file sẽ được khởi tạo nếu chạy **Build**, nếu bạn không muốn chức năng nào có thể bỏ tick hoặc quay lại tab **Design**, chọn sub-tab **settings** và tùy chỉnh lại phù hợp với project của mình.

## Commit files vào folder root

![](https://github.com/pipe-dream/laravel/raw/master/src/public/img/screenshots/build.png)

Sau khi đã hoàn thành bước design, review ưng ý, bạn sẽ tiến hành đến công việc lưu những thứ bạn vừa thiết kế vào thư mục root. Đó là bước cuối cùng: **Build**

Tới tab build, nhấn vào nút **Build!** để tiến hành commit lên thư mục root

![](https://i.imgur.com/AaOZWmR.png)

Quá trình sẽ tốn một chút thời gian, hãy kiên nhẫn ngồi đợi.

Xong rồi, hãy check lại root để xem sự thay đổi nhé.

Hy vọng xem xong bài này các bạn sẽ có những khởi đầu mới cho dự án nhanh chóng hơn :D