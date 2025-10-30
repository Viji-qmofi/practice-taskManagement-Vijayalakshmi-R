import React from 'react'
import { useParams, Link } from 'react-router'
import {tasks} from './tasks'

const TaskDetail = () => {
      const {id} = useParams(); 

      const task = tasks.find((task) => task.id === Number(id));
  return (
    <div>
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