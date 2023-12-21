import React, {useState} from 'react'

const TodoForm = () => {
    const {value, setValue} = useState("");
  return (
    <div>
      <form action="" className="TodoForm">
        <input 
        type="text"
        className="todo-input"
        onChange={(e) => {
            console.log(e.target.value)}
            } />

        <button type="submit" className="todo-btn">
            Add Task
        </button>
      </form>
    </div>
  )
}

export default TodoForm
