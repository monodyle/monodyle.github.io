---
title: Tránh mấy hàm vô dụng trong React bằng useReducer
excerpt: Dạo này thấy lương thấp quá nên phải ngồi vẽ ra nhiều thứ để được tăng lương...
date: Dec 05, 2022
image: /assets/blog/avoid-useless-func-with-reducer/featured.png
tags: [frontend, react]
---

Bài viết này mình viết trong series [Advent of Frontend] (AoF) do [WeBuild Community] tổ chức. Cho các bạn không biết, thì AoF là một event được tổ chức nối tiếp sau thành công của [30 days of sharing] năm ngoái (hoặc năm kia không nhớ rõ). Do thấy bài viết cũng chất lượng và có tính chuyên môn (chấp nhận đê) nên mình bếch về blog luôn cho đỡ bị đóng mạng nhện :nosebleed:

[Advent of Frontend]: https://github.com/webuild-community/advent-of-frontend/
[WeBuild Community]: https://www.webuild.community/
[30 days of sharing]: https://30daysofsharing.com/

## Bài toán

Giả sử mình cần làm một component là một cái input password, bên trong có icon con mắt ẩn hiện password theo thiết kế trong Design System nên không được sử dụng con mắt native mà browser đã làm sẵn. Mình tham khảo trên mạng đa số đều chỉ các bạn viết như thế này:

```js
const [passwordShown, setPasswordShown] = useState(false)

const togglePasswordShown = () => {
  setPasswordShown(!passwordShown)
}

return (
  <div>
    <input type={passwordShown ? "text" : "password"} />
    <button onClick={togglePasswordShown}>Show Password</button>
  </div>
)
```

_Nguồn: https://melvingeorge.me/blog/show-or-hide-password-ability-reactjs_

Yep, cách này không sai, nhưng mà mình thấy nó cũng khá dài dòng. Đôi khi còn phải wrap hàm `togglePasswordShown` vào một cái `useCallback` nữa. Nhưng bạn cũng có thể làm gọn nó lại bằng cách bỏ hàm `togglePasswordShown` và gọi luôn `setPasswordShown` ở trong button như thế này:

```js
const [passwordShown, setPasswordShown] = useState(false)

return (
  <div>
    <input type={passwordShown ? "text" : "password"} />
    <button onClick={() => setPasswordShown(!passwordShown)}>Show Password</button>
  </div>
)
```

## Thế vấn đề là gì?

Đây là ví dụ cơ bản mà mình muốn đưa ra, nhưng nếu requirement bắt đầu xuất hiện một vài thứ phức tạp hơn, ví dụ khi mình outfocus cái form thì lại phải ẩn cái password đi.

Đại ý muốn nói là có nhiều hơn một chỗ, ví dụ như trong `useEffect` nào đó hoặc một callback function nào đó khác để đáp ứng được nhu cầu của requirement thì sao nhỉ?

Thế là lại phải extract `setPasswordShown(!passwordShown)` thành một function `togglePasswordShown` như ví dụ ban đầu :smug:

## Cách giải quyết

Đôi khi chúng ta có thể đơn giản hóa nó lại nếu bạn biết dùng `useReducer`, dĩ nhiên không phải kiểu dispatch siêu phức tạp kiểu redux mà [document của react] hướng dẫn. :yikes:

[document của react]: https://beta.reactjs.org/apis/react/useReducer#usereducer

Thử xem qua cái type của `useReducer` nhé:

```ts
type ReducerWithoutAction<S> = (prevState: S) => S;

function useReducer<R extends ReducerWithoutAction<any>, I>(
  reducer: R,
  initializerArg: I,
  initializer: (arg: I) => ReducerStateWithoutAction<R>
): [ReducerStateWithoutAction<R>, DispatchWithoutAction];
```

Thông thường mọi người sẽ dùng `useReducer` như một phiên bản của redux, là sử dụng dispatch một event nào đó để update value của state. Nhưng bạn có thể quên đi cái dispatch event để đơn giản hoá reducer lại, trong trường hợp này là dùng reducer để viết một hàm toggle cái state boolean:

```js
const [passwordShown, togglePasswordShown] = useReducer(value => !value, false)

return (
  <div>
    <input type={passwordShown ? "text" : "password"} />
    <button onClick={togglePasswordShown}>Show Password</button>
  </div>
)
```

## Kết

Thế thôi, bài viết này khá ngắn gọn, mình nghĩ viết nhiều cũng không ai đọc hết. Nên từ giờ mình sẽ cố gắng rút gọn nội dung lại cho đỡ lan man :go:

À mà đôi khi mình còn sử dụng reducer để force một component rerender nữa (trong trường hợp nếu không sử dụng [react-query] hoặc [swr]):

```js
const [lastUpdate, refresh] = useReducer(() => Date.now(), Date.now())
```

[react-query]: https://tanstack.com/query/v4/
[swr]: https://swr.vercel.app/

Hết.
