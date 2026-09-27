import React from 'react'
import {ChartNoAxesColumn, Plus, Settings, Users} from 'lucide-react'

const QuickActions = () => {
  return (
    <div className='flex flex-col gap-2 p-5 rounded-lg border border-(--border-color) mb-5 bg-(--dark-purple)'>
      <h1 className='text-base'>Quick Actions</h1>
      <div className='grid grid-cols-2 gap-2'>
        <div className='bg-linear-to-br from-(--purple)/80 to-(--dark-purple)/10 p-3 rounded-lg flex flex-col gap-px border border-(--border-color)'>
           <div className='w-5 h-5 rounded-full bg-(--light-pink) flex items-center justify-center mb-1'><Plus size={16} strokeWidth={3} stroke="var(--dark-purple)"/></div>
          <h3 className='text-[0.65rem]'>Create Task</h3>
          <h4 className='text-[0.55rem] text-gray-400'>Assign a new task</h4>
        </div>
        <div className='bg-linear-to-br from-(--blue) to-(--dark-purple) p-3 rounded-lg flex flex-col gap-px border border-blue-900/50'>
           <div className='w-5 h-5 rounded-full bg-[#B6D0FA] flex items-center justify-center mb-1'><Users size={12} strokeWidth={3} stroke="var(--blue)"/></div>
          <h3 className='text-[0.65rem]'>Manage Employees</h3>
          <h4 className='text-[0.55rem] text-gray-400'>View and edit team</h4>
        </div>
        <div className='bg-linear-to-br from-(--green) to-(--dark-purple) p-3 rounded-lg flex flex-col gap-px border border-(--border-green)'>
           <div className='w-5 h-5 rounded-full bg-green-400 flex items-center justify-center mb-1'><ChartNoAxesColumn size={12} strokeWidth={3} stroke="var(--green)"/></div>
          <h3 className='text-[0.65rem]'>View Analytics</h3>
          <h4 className='text-[0.55rem] text-gray-400'>Track Progress</h4>
        </div>
        <div className='bg-linear-to-br from-slate-700 to-(--dark-purple) p-3 rounded-lg flex flex-col gap-px border border-(--border-color)'>
           <div className='w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center mb-1 text-slate-300'><Settings size={12} strokeWidth={3}/></div>
          <h3 className='text-[0.65rem]'>Settings</h3>
          <h4 className='text-[0.55rem] text-gray-400'>App preferences</h4>
        </div>
      </div>
    </div>
  )
}

export default QuickActions
