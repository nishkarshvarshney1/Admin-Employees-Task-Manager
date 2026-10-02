import React from 'react'
import TotalNewTask from '../TotalTaskList/TotalNewTask';
import TotalActiveTask from '../TotalTaskList/TotalActiveTask';
import TotalCompletedTask from '../TotalTaskList/TotalCompletedTask';
import TotalFailedTask from '../TotalTaskList/TotalFailedTask';
import TotalTasks from '../TotalTaskList/TotalTasks';


const TopTaskContent = () => {
    return (
        <div className='relative z-11 flex justify-between gap-3'>
            <TotalTasks />
            <TotalNewTask />
            <TotalActiveTask />
            <TotalCompletedTask />
            <TotalFailedTask />
        </div>
    )
}

export default TopTaskContent
