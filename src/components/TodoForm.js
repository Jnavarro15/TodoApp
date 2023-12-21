import React, {useState} from 'react'

const TodoForm = () => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        console.log(value);
    }
  return (
    <div>
      <form action="" className="TodoForm" onSubmit={handleSubmit}>
        <input 
        type="text"
        className="todo-input"
        onChange={(e) => 
            setValue(e.target.value)
        } />

        <button type="submit" className="todo-btn">
            Add Task
        </button>
      </form>
    </div>
  )
}

export default TodoForm
