/*
    click event = An interaction when a user clicks on a specific element. We can respond to clicks by passing a callback to the onclick event hanlder.

    Sự kiện click = Một tương tác khi người dùng nhấp vào một yếu tố cụ thể. Chúng tôi có thể phản hồi các nhấp chuột bằng cách chuyển lệnh gọi lại đến trình xử lý sự kiện onclick
*/


const Button = () => {

    const handleClick = () => {
        console.log("OUCH!!!")
    }

    const handleClick2 = (name) => {
        console.log(`${name} stop clicking me`);
    }

    const handleEventClick = (e) => {
        // console.log(e);
        e.target.textContent = "OUCH!!!"
    }
    return (
        <div>
            {/* Ta gán onClick hàm lắng nghe sự kiện, handleClick là 1 hành, và hàm được làm đối số trong hàm là callbacks */}
            <button onClick={handleClick}>Click me 😀</button>
            <button onClick={handleClick2("Tuan")}>Click me 😀</button>

            <button onClick={(e) => handleEventClick(e)}>Click event</button>
        </div>
    )
}

export default Button

/*
1. Người dùng nhấn vào nút (button).
2. Thuộc tính onClick của nút đó lắng nghe sự kiện click.
3. Khi sự kiện click xảy ra, React tạo một đối tượng sự kiện và truyền nó vào hàm mũi tên (arrow function) được chỉ định trong onClick.
4. Hàm mũi tên nhận đối tượng sự kiện làm tham số (thông thường được viết là e hoặc event).
5. Hàm mũi tên gọi hàm handleEventClick và truyền đối tượng sự kiện vào nó.
6. Trong hàm handleEventClick, bạn có thể sử dụng đối tượng sự kiện để thực hiện các xử lý cụ thể liên quan đến sự kiện đã xảy ra. Trong trường hợp này, bạn đang in đối tượng sự kiện ra console bằng console.log(e).
*/ 