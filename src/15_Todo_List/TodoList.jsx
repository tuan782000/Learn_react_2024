import { useState } from "react"
import './style.css'

const TodoList = () => {
  // Lấy field useSate từ trong thư viện React gán cho const []. Bằng cú pháp destructuring, Thay vì react.useState, thì viết như sau {useState}
  const [tasks, setTask] = useState(["Eat breakfast", "Take a shower", "Do Exercise"]);
  const [newTask, setNewTask] = useState("")

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  }

  const addTask = () => {
    // câu điều kiện này giúp loại bỏ các trường hợp gửi lên chuỗi rỗng
    if(newTask.trim() !== "") {
        setTask(t => [...t, newTask])
        setNewTask("");
    }
  } 

  const deleteTask = (index) => {
    // lọc ra những thằng i nào không trùng với index truyền vào hành deleteTask
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTask(updatedTasks) 
    // cập nhật lại những cái danh sách.
  }

  const moveTaskUp = (index) => {
    if(index > 0) {
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
        setTask(updatedTasks)
    }
  }

  const moveTaskDown = (index) => {
    if(index < tasks.length - 1) {
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
        setTask(updatedTasks)
    }
  }

  return (
    <div className="to-do-list">
        <h1>To-Do-List</h1>

        <div>
            <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange} />
            <button className="add-button" onClick={addTask}>Add</button>
        </div>

        <ol>
            {tasks.map((task, index) => (
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button" 
                        // nó là 1 callbacks
                        // Phải truyền thêm đối số nếu muốn nó xử lý xóa
                        onClick={() => deleteTask(index)}
                    >
                        Delete
                    </button>
                    <button
                        className="move-button"
                        // callbacks
                        onClick={() => moveTaskUp(index)}>
                        ☝
                    </button>
                    <button
                        className="move-button"
                        // callbacks
                        onClick={() => moveTaskDown(index)}>
                        👇
                    </button>
                </li>
            ))}
        </ol>
    </div>
  )
}

export default TodoList