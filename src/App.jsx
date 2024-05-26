import React from 'react'
import TaskList from './components/TaskList'

export const URL = import.meta.env.VITE_SERVER_URL;

const App = () => {
  return (
    <>
      <TaskList />
    </>
  )
}

export default App