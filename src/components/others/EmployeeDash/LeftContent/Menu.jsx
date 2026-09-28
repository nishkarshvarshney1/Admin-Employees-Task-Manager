import { Calendar, Folder, House, Logs, Settings } from 'lucide-react';
import React from 'react'

const Menu = () => {
  return (
    <div className='flex flex-col py-3 px-4 gap-2 relative z-11'>
        <div className='p-3 bg-(--purple) rounded-xl flex gap-3 text-sm items-center cursor-pointer'>
          <House size={20}/>
          <span>Dashboard</span>
        </div>
        <div className='p-3 rounded-xl flex gap-3 text-sm items-center cursor-pointer hover:bg-(--purple)/20'>
          <Logs size={20}/>
          <span>My Tasks</span>
        </div>
        <div className='p-3 rounded-xl flex gap-3 text-sm items-center cursor-pointer hover:bg-(--purple)/20'>
          <Calendar size={20}/>
          <span>Calendar</span>
        </div>
        <div className='p-3 rounded-xl flex gap-3 text-sm items-center cursor-pointer hover:bg-(--purple)/20'>
          <Folder size={20}/>
          <span>Files</span>
        </div>
        <div className='p-3 rounded-xl flex gap-3 text-sm items-center cursor-pointer hover:bg-(--purple)/20'>
          <Settings size={20}/>
          <span>Settings</span>
        </div>
      </div>
  )
}

export default Menu
