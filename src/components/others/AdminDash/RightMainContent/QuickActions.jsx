import React from 'react'
import {ChartNoAxesColumn, Plus, Settings, UserGroup} from 'lucide-react'

const QuickActions = () => {
  return (
    <div className='flex flex-col gap-2 p-5 rounded-lg border border-(--border-color) mb-5 bg-(--dark-purple)'>
      <h1 className='text-base'>Quick Actions</h1>
      <div className='grid grid-cols-2 gap-2'>
        <div className='bg-(--purple) p-3 rounded-lg flex flex-col gap-px'>
           <div className='w-5 h-5 rounded-full bg-(--light-pink) flex items-center justify-center'><Plus size={16} strokeWidth={3} stroke="var(--dark-purple)"/></div>
          <h3 className='text-[0.65rem]'>Create Task</h3>
          <h4 className='text-[0.55rem]'>Assign a new task</h4>
        </div>
        <div className='bg-(--purple) p-3 rounded-lg flex flex-col gap-px'>
           <div className='w-5 h-5 rounded-full bg-(--light-pink) flex items-center justify-center'><UserGroup size={12} strokeWidth={3} stroke="var(--dark-purple)"/></div>
          <h3 className='text-[0.65rem]'>View Analytics</h3>
          <h4 className='text-[0.55rem]'>Track progress</h4>
        </div>
        <div className='bg-(--purple) p-3 rounded-lg flex flex-col gap-px'>
           <div className='w-5 h-5 rounded-full bg-(--light-pink) flex items-center justify-center'><ChartNoAxesColumn size={12} strokeWidth={3} stroke="var(--dark-purple)"/></div>
          <h3 className='text-[0.65rem]'>Manage Employees</h3>
          <h4 className='text-[0.55rem]'>View and edit team</h4>
        </div>
        <div className='bg-(--purple) p-3 rounded-lg flex flex-col gap-px'>
           <div className='w-5 h-5 rounded-full bg-(--light-pink) flex items-center justify-center'><Settings size={12} strokeWidth={3} stroke="var(--dark-purple)"/></div>
          <h3 className='text-[0.65rem]'>Settings</h3>
          <h4 className='text-[0.55rem]'>App preferences</h4>
        </div>
      </div>
    </div>
  )
}

export default QuickActions
