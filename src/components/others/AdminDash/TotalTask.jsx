import React from 'react'
import TotalNewTask from './TotalTaskList/TotalNewTask';

const TotalTask = () => {
  return (
    <div className='relative z-2 flex items-center justify-between'>
      <TotalNewTask />
      <TotalNewTask />
      <TotalNewTask />
      <TotalNewTask />
    </div>
  )
}

export default TotalTask
