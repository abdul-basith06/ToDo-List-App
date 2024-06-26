import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
          e.preventDefault();
          if (value) {
            addTodo(value);
            setValue('');
          }
        };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input value={value} type="text" onChange={(e)=> setValue(e.target.value)}  className="todo-input" placeholder='Lets get this party started..?' />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  )
}

export default TodoForm