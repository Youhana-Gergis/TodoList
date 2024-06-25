import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
  return (
    <div className="flex justify-between items-center bg-[#00806b] text-white mb-4 rounded px-4 py-3">
        <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div>
        <FontAwesomeIcon className="cursor-pointer hover:text-[#9c9292]" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon className="cursor-pointer hover:text-[#f00]" icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div>
    </div>
  )
}
