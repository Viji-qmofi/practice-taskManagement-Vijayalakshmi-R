import React from 'react'
import {Link} from 'react-router'
import {tasks} from './tasks'

const TaskList = () => {
  return (
    <div>
      <h2>TaskList</h2>
      <ul style={{
            background: "white",
            listStyle:"none",
            margin: "8px auto",
            padding: "12px",
            width: "300px",
            borderRadius: "8px",
            boxShadow:" 0px 2px 5px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            transition:" all 0.3s ease"}}>

            {tasks.map((task => (
                  <li key={task.id}>
                        <Link to={`/task/${task.id}`}>
                        {task.title}
                        </Link>
                  </li>
            )))}
      </ul>
      </div>
  )
}

export default TaskList