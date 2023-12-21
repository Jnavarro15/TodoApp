import React, {useState} from 'react'
import TodoForm from './TodoForm'

const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        

    }
  return (
    <div className='TodoWrapper'>
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default TodoWrapper
