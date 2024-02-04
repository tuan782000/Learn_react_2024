/* eslint-disable react/prop-types */
/*
useContext() = React Hook that allows you to share values between multiple levels of components without passing props through each level.

useContext() = React Hook cho phép bạn chia sẻ giá trị giữa nhiều cấp độ thành phần mà không cần chuyển đạo cụ qua từng cấp độ.

*/
import { useContext } from 'react'
import { UserContext } from './MyComponentA'
import MyComponentD from './MyComponentD'
const MyComponentC = () => {
  const user = useContext(UserContext)
  return (
    <div className='box'>
      <h1>Component C</h1>
      <h2>{`Hello again ${user}`}</h2>
      <MyComponentD />
    </div>
  )
}

export default MyComponentC