import React from 'react'
import TotalActiveTask from './TotalTaskList/TotalActiveTask';
import TotalCompletedTask from './TotalTaskList/TotalCompletedTask';
import TotalFailedTask from './TotalTaskList/TotalFailedTask';
import TotalNewTask from './TotalTaskList/TotalNewTask';

const TotalTask = (props) => {
  return (
    <div className='relative z-2 flex items-center justify-between'>
      <TotalNewTask newTask={props.totals.newTask}/>
      <TotalActiveTask active={props.totals.active}/>
      <TotalCompletedTask completed={props.totals.completed}/>
      <TotalFailedTask failed={props.totals.failed}/>
    </div>
  )
}

export default TotalTask
