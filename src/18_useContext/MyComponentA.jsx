/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/*
Cái kỹ thuật truyền từ cha sang con được gọi prop drilling.
Đi từ bên ngoài khoan sau vào lõi.

Nó sẽ phức tạp khi có rất nhiều component cha con trong dự án.

Giải pháp cho vấn đề này mình sẽ dùng useContext để hạn chế phải truyền qua nhiều cấp.


useContext() = React Hook that allows you to share values between multiple levels of components without passing props through each level.

useContext() = React Hook cho phép bạn chia sẻ giá trị giữa nhiều cấp độ thành phần mà không cần chuyển đạo cụ qua từng cấp độ.

// Provider Component

1. import {createConext} from 'react;
2. export const myContext = createConext();
3. <MyContext.provider value={value}>
      <Child />
    </MyContext.provider>


// CONSUMER COMPONENTS
1. import {useContext} from 'react
   import {MyContext} from './ComponentA'
2. const value = useContext(MyContext)
*/
import { createContext, useState } from 'react'
import MyComponentB from './MyComponentB'
import './index.css'

export const UserContext = createContext();

const MyComponentA = () => {
  const [user, setUser] = useState("Tuan")
  return (
    <div className='box'>
      <h1>ComponentA</h1>
      <h2>{`Hello ${user}`}</h2>
      <UserContext.Provider value={user}>
        <MyComponentB user={user} />
      </UserContext.Provider>
    </div>
  )
}

export default MyComponentA