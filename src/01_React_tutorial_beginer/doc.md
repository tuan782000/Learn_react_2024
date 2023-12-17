# React

```txt
React là 1 library not Frameworks, dùng để phát triển giao diện người dùng.

React tập trung xây dựng trang web bằng nhiều components

Mỗi components là 1 thành phần độc lập cấu thành nên giao diện.

Việc chia components giúp dễ dàng tái sử dụng nó ở nhiều nơi khác nhau.
```

```txt
Chúng ta cũng sẽ tìm hiểu về jsx. 

JSX = JAVASCRIPT XML

JSX nó cho phép viết trộn lẫn giữa code HTML và JAVASCRIPT
```

```txt
Cách thức hoạt động của React, sử dụng DOM ảo.

React creates a VIRTUAL DOM in memory. - React tạo một DOM VIRTUAL trong bộ nhớ.

Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.
Thay vì thao tác trực tiếp với DOM của trình duyệt, React tạo một DOM ảo trong bộ nhớ, nơi nó thực hiện tất cả các thao tác cần thiết trước khi thực hiện các thay đổi trong DOM của trình duyệt.

React only changes what needs to be changed!
React chỉ thay đổi những gì cần thay đổi!

React finds out what changes have been made, and changes only what needs to be changed.
React tìm ra những thay đổi đã được thực hiện và chỉ thay đổi những gì cần thay đổi.

```
```txt
Trước khi học React nắm vững:

arrays
classes
objects
arrow functions
HTML CSS
```

## Thực hành tạo components 
Header
```js
const Header = () => {
  return (
    <div>Header</div>
  )
}

export default Header
```
Food
```js
const Food = () => {
  return (
    <div>Food</div>
  )
}

export default Food
```
Footer
```js
const Footer = () => {
  return (
    <div>Footer</div>
  )
}

export default Footer
```



