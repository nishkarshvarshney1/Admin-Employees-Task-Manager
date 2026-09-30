import React from 'react'
import TaskStatus from '../RightMainContent/TaskStatus';
import RecentActivity from '../RightMainContent/RecentActivity';
import QuickActions from '../RightMainContent/QuickActions';

const RightMainContent = ({setIsModalOpened}) => {
  return (
    <div className='no-scrollbar w-[25%] flex flex-col gap-5 overflow-y-auto'>
        <TaskStatus />
        <RecentActivity />
        <QuickActions setIsModalOpened={setIsModalOpened}/>
    </div>  
  )
}

export default RightMainContent
