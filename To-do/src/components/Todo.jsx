import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons' 
import { faChevronDown } from '@fortawesome/free-solid-svg-icons' 
const Todo = ({task, deleteTodo, toggleComplete, editTodo, moveTaskUp, moveTaskDown}) => {
  return (
    <div className="Todo">
        <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div>
        <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} style={{ marginRight: "10px" }}/>
        <FontAwesomeIcon className="move-up-icon" icon={faChevronUp} onClick={() => moveTaskUp(task.id)} style={{ marginRight: "10px" }}/>
        <FontAwesomeIcon className="move-down-icon" icon={faChevronDown} onClick={() => moveTaskDown(task.id)} />
        </div>
    </div>
  )
}

export default Todo