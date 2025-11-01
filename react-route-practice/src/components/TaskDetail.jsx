/* Retrieves the task ID from the URL and display the corresponding task details. */
import React from 'react'
import { useParams, Link } from 'react-router'
import {tasks} from './tasks'

const TaskDetail = () => {
      const {id} = useParams(); 

      const task = tasks.find((task) => task.id === Number(id));
  return (
    <div
    style={{
            background: "white",
            margin: "8px auto",
            padding: "12px",
            width: "300px",
            borderRadius: "8px",
            boxShadow:" 0px 2px 5px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            transition:" all 0.3s ease"}}
    >
      <h2>TaskDetail</h2>
      
      {task ? (
            <>
                  <h3>{task.title}</h3>
                  <p> {task.description}</p>
            </>) :
                  (<p>Task Does not exist</p>)
      }
      <Link to ={"/"}>Back to Main </Link>
      </div>
  )
}

export default TaskDetail