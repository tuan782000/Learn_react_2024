// Bài 1
// import Food from "./01_React_tutorial_beginer/Food"
// import Footer from "./01_React_tutorial_beginer/Footer"
// import Header from "./01_React_tutorial_beginer/Header"





// Bài 2
// import Card from "./02_React_card_components/Card"

// Bài 3
// import Button from "./03_React_styles/Button"

// Bài 4: Props
// import Student from "./04_React_props/Student"

// Bài 5: 
// import UserGreeting from "./05_React_conditional_Render/UserGreeting.jsx"

// Bài 6: List
// import List from "./06_React_render_list/List"
// import ResusableList from "./06_React_render_list/ResusableList"


// Bài 7
// import Button from "./07_React_event/Button";
// import ProfilePicture from "./07_React_event/ProfilePicture";

// Bài 8
// import MyComponent from './08_React_hook/MyComponent'
// import Counter from './08_React_hook/Counter'

// Bài 9
// import MyComponent from "./09_React_onchange_handler/MyComponent"

// Bài 10:
// import ColorPicker from "./10_generator_color/ColorPicker"

// Bài 11:
// import MyComponent from "./11_update_func/MyComponent"

// Bài 12
// import MyComponent from "./12_update_objects/MyComponent"

// Bài 13
// import MyComponents from "./13_update_arrays/MyComponents"

// Bài 14
// import MyComponents from "./14_update_array_in_object/MyComponents"

// Bài 15
// import TodoList from "./15_Todo_List/TodoList"

// Bài 16
// import MyComponent from "./16_useEffect/MyComponent"

// Bài 16.1
// import Example from "./16_useEffect/Example"

// Bài 17
// import DigitalClock from "./17_Digital_Clock/DigitalClock"

// Bài 18
// import MyComponentA from "./18_useContext/MyComponentA"

// Bài 19
// import MyComponen from "./19_useRef/MyComponen"

// Lesson 20
import Stopwatch from "./20_stopWatch/Stopwatch"


function App() {

  // Bài 6:
  //   const fruits = [
  //     { id: 1, name: "apple", calories: 95 },
  //     { id: 2, name: "banana", calories: 105 },
  //     { id: 3, name: "orange", calories: 45 },
  //     { id: 4, name: "coconut", calories: 159 },
  //     { id: 5, name: "pineapple", calories: 35 },
  //   ];

  //   const vegetables = [
  //     { id: 6, name: "potatoes", calories: 110 },
  //     { id: 7, name: "celery", calories: 20 },
  //     { id: 8, name: "carrots", calories: 63 },
  //     { id: 9, name: "corn", calories: 50 },
  //     { id: 10, name: "broccoli", calories: 35 },
  // ];
  return (
    <>
      {/* Bài 1: Giới thiệu */}
      {/* <Header/>
      <Food />
      <Food />
      <Food />
      <Footer/> */}

      {/* Bài 2: Card */}
      {/* <Card />
      <Card />
      <Card /> */}

      {/* Bài 3: Style in React */}
      {/* <Button /> */}

      {/* Bài 4: tìm hiểu props */}
      {/* Component cha gửi cho con cặp key="value", con muốn nhận thì dùng props truyền vào làm đối số. sau đó props.key để sử dụng value đó */}
      {/* <Student name="Tuan" age={23} isStudent={true}/>
      <Student name="Nguyen" age={12} isStudent={true}/>
      <Student name="An" age={31} isStudent={false}/>
      <Student name="Tuan" age={19} isStudent={true}/>
      <Student /> */}

      {/* Bài 5: UserGreeting */}
      {/* <UserGreeting isLoggedIn={true} username="Tuan"/> */}

      {/* Bài 6: List */}
      {/* <List /> */}

      {/* <ResusableList items={fruits} category="Fruits" />
      <ResusableList items={vegetables} category="Vegetables" /> */}

      {/* Trường hợp dữ liệu không có thì ẩn đi ta có 2 cách làm */}

      {/* Cách 1 */}
      {/* Kẹp thêm điều kiện */}
      {/* {fruits.length > 0 ? <ResusableList items={fruits} category="Fruits" /> : null }
      {vegetables.length > 0 ? <ResusableList items={vegetables} category="Vegetables" /> : null } */}

      {/* Cách 2 */}
      {/* Chúng ta cũng có thể dùng toán tử - and - && */}
      {/* {fruits.length > 0 && <ResusableList items={fruits} category="Fruits" /> }
      {vegetables.length > 0 && <ResusableList items={vegetables} category="Vegetables" />  } */}


      {/* Bài 07: */}
      {/* <Button />
      <ProfilePicture /> */}

      {/* Bài 8 */}
      {/* <MyComponent /> */}
      {/* <Counter /> */}

      {/* Bài 9 */}
      {/* <MyComponent /> */}

      {/* Bài 10 */}
      {/* <ColorPicker /> */}

      {/* Bài 11 */}
      {/* <MyComponent /> */}

      {/* Bài 12 */}
      {/* <MyComponent /> */}

      {/* Bài 13 */}
      {/* <MyComponents /> */}

      {/* Bài 14 */}
      {/* <MyComponents /> */}

      {/* Bài 15 */}
      {/* <TodoList /> */}

      {/* Bài 16 */}
      {/* <MyComponent /> */}

      {/* <Example /> */}

      {/* Bài 17 */}
      {/* <DigitalClock /> */}

      {/* Bài 18 */}
      {/* <MyComponentA /> */}

      {/* <MyComponen /> */}

      {/* Lesson 20 */}
      <Stopwatch />
    </>
  )
}

export default App
