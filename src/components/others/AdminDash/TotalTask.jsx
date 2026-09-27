import React from 'react'
import TotalActiveTask from './TotalTaskList/TotalActiveTask';
import TotalCompletedTask from './TotalTaskList/TotalCompletedTask';
import TotalFailedTask from './TotalTaskList/TotalFailedTask';
import TotalTasks from './TotalTaskList/TotalTasks';

const TotalTask = () => {
  return (
    <div className='relative z-2 flex items-center justify-between'>
      <TotalTasks />
      <TotalActiveTask />
      <TotalCompletedTask />
      <TotalFailedTask />
    </div>
  )
}

export default TotalTask
