/* eslint-disable react/prop-types */
/*
useContext() = React Hook that allows you to share values between multiple levels of components without passing props through each level.

useContext() = React Hook cho phép bạn chia sẻ giá trị giữa nhiều cấp độ thành phần mà không cần chuyển đạo cụ qua từng cấp độ.

*/

import MyComponentC from './MyComponentC'

const MyComponentB = () => {
  return (
    <div className='box'>
      <h1>Component B</h1>
      <MyComponentC />
    </div>
  )
}

export default MyComponentB