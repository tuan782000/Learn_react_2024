/* eslint-disable react/prop-types */

/*
Conditional rendering = allows you to control what gets rendered in your application based on certain conditions. (ex. show, hide, or change components)

Kết xuất có điều kiện = cho phép bạn kiểm soát những gì được hiển thị trong ứng dụng của mình dựa trên các điều kiện nhất định. (ví dụ: hiển thị, ẩn hoặc thay đổi thành phần)
*/

import PropTypes from 'prop-types';

const stylesMessageWelcome = {
    backgroundColor: "hsl(120, 100%, 42%)",
    color: "white",
}
const stylesMessageLogin = {
    backgroundColor: "hsl(0, 100%, 42%)",
    color: "white",
}

const UserGreeting = (props) => {
    // Cách viết thứ 1
    // if (props.isLoggedIn) {
    //     return <h2>Welcome {props.username}</h2>
    // } else {
    //     return <h2>Please login to continue</h2>
    // }

    // Cách viết thứ 2
    // if (props.isLoggedIn) {
    //     return <h2>Welcome {props.username}</h2>
    // } 
    // return <h2>Please login to continue</h2>

    // Cách viết thứ 3
    // return (
    //     props.isLoggedIn ? <h2 style={stylesMessageWelcome}>Welcome {props.username}</h2> : <h2 style={stylesMessageLogin}>Please login to continue</h2>
    // )

    // Cách viết thứ 4

    const messageWelcome = <h2 style={stylesMessageWelcome}>Welcome {props.username}</h2>
    const messageLogin = <h2 style={stylesMessageLogin}>Please login to continue</h2>

    return (
        props.isLoggedIn ? messageWelcome : messageLogin
    )
}

UserGreeting.prototypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: 'Guest',
}

export default UserGreeting