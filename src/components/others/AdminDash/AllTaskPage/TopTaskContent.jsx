import React from 'react'
import TotalNewTask from '../TotalTaskList/TotalNewTask';
import TotalActiveTask from '../TotalTaskList/TotalActiveTask';
import TotalCompletedTask from '../TotalTaskList/TotalCompletedTask';
import TotalFailedTask from '../TotalTaskList/TotalFailedTask';
import TotalTasks from '../TotalTaskList/TotalTasks';


const TopTaskContent = ({totals}) => {
    return (
        <div className='relative z-11 flex justify-between gap-3'>
            <TotalTasks totals={totals}/>
            <TotalNewTask newTask={totals.newTask} />
            <TotalActiveTask active={totals.active}/>
            <TotalCompletedTask completed={totals.completed} />
            <TotalFailedTask failed={totals.failed}/>
        </div>
    )
}

export default TopTaskContent
