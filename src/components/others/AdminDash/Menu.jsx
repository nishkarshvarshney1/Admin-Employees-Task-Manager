import React from 'react'
import {CalendarRange, ChartNoAxesColumn, House, Settings, Users} from 'lucide-react'

const Menu = () => {
  return (
    <div className='flex flex-col py-3 px-4 gap-2'>
        <div className='p-3 bg-(--purple) rounded-xl flex gap-3 text-sm items-center cursor-pointer'>
          <House size={20}/>
          <span>Dashboard</span>
        </div>
        <div className='p-3 rounded-xl flex gap-3 text-sm items-center cursor-pointer hover:bg-(--purple)/20'>
          <CalendarRange size={20}/>
          <span>All Tasks</span>
        </div>
        <div className='p-3 rounded-xl flex gap-3 text-sm items-center cursor-pointer hover:bg-(--purple)/20'>
          <Users size={20}/>
          <span>Employees</span>
        </div>
        <div className='p-3 rounded-xl flex gap-3 text-sm items-center cursor-pointer hover:bg-(--purple)/20'>
          <ChartNoAxesColumn size={20}/>
          <span>Analytics</span>
        </div>
        <div className='p-3 rounded-xl flex gap-3 text-sm items-center cursor-pointer hover:bg-(--purple)/20'>
          <Settings size={20}/>
          <span>Settings</span>
        </div>
      </div>
  )
}

export default Menu
