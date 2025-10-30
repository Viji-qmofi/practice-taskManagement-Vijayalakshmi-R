import { BrowserRouter as Router, Routes, Route } from 'react-router'
import './App.css'
import TaskList from './components/TaskList'
import TaskDetail from './components/TaskDetail'

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<TaskList /> }/>
        <Route path="/task/:id" element={<TaskDetail />} />
        <Route path="*" element={<p>404 Page not eixst</p>} />
      </Routes>
    </div>
  )
}

export default App
