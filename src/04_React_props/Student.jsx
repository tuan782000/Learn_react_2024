/* eslint-disable react/prop-types */
// import React from 'react'

// props =  read-only properties that are shared between components.
//                A parent component can send data to a child component.
//                key=value

// propTypes = a mechanism that ensures that the passed value
//                        is of the correct datatype.
//                       age: PropTypes.number

// defaultProps = default values for props in case they are not
//                            passed from the parent component
//                            name: "Guest"

/*
    props = Thuộc tính chỉ đọc được chia sẻ giữa các thành phần. Thành phần cha có thể gửi dữ liệu đến thành phần con bằng key = value

    propTypes = một cơ chế đảm bảo rằng giá trị được truyền là đúng kiểu dữ liệu. age: PropTypes.number

    defaultProps = giá trị mặc định cho props trong trường hợp chúng không được truyền từ thành phần cha
*/

// Ta truyền props vào làm tham số

import PropTypes from 'prop-types';

const styleStudent = {
  margin: "10px",
  fontSize: "2em",
  padding: "10px",
  border: "1px solid hsla(0,0%,50%,0.8)"
}

const Student = (props) => {
  return (
    <div className="student" style={styleStudent}>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes I'm Student" : "I'm not student"}</p>
    </div>
  )
}

/*
propTypes là một cách để kiểm tra và định nghĩa loại (type) của các prop mà một component nhận. PropTypes giúp bạn kiểm soát dữ liệu đầu vào cho một component, làm cho mã nguồn dễ đọc hơn và giúp người phát triển (developer) phát hiện lỗi nhanh chóng.
*/

Student.PropTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool
}

// Đây là đang thực hiện kiểm tra và định nghĩa loại (type) của các prop mà một component nhận
// Nếu như truyền sai kiểu dữ liệu định nghĩa thì nó sẽ fail

Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false
}

// Này xảy ra khi Student không có prop nào để truyền, nó sẽ lấy defaultProps này. hoặc nó thiếu bất kỳ props nào nó sẽ lấy tự động giá trị mặc định bù vào

export default Student