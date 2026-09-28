import React from 'react'
import { Calendar, CalendarRange, ChartNoAxesColumn, Folder, House, Logs, Settings, Users } from 'lucide-react'

const Menu = () => {
  const user = JSON.parse(localStorage.getItem('loggedInUser')).role
  return (
    <div className='flex flex-col py-3 px-4 gap-2 relative z-11'>
      {user === 'admin' ? (
        <>
          <div className='p-3 bg-(--purple) rounded-xl flex gap-3 text-sm items-center cursor-pointer'>
            <House size={20} />
            <span>Dashboard</span>
          </div>
          <div className='p-3 rounded-xl flex gap-3 text-sm items-center cursor-pointer hover:bg-(--purple)/20'>
            <CalendarRange size={20} />
            <span>All Tasks</span>
          </div>
          <div className='p-3 rounded-xl flex gap-3 text-sm items-center cursor-pointer hover:bg-(--purple)/20'>
            <Users size={20} />
            <span>Employees</span>
          </div>
          <div className='p-3 rounded-xl flex gap-3 text-sm items-center cursor-pointer hover:bg-(--purple)/20'>
            <ChartNoAxesColumn size={20} />
            <span>Analytics</span>
          </div>
          <div className='p-3 rounded-xl flex gap-3 text-sm items-center cursor-pointer hover:bg-(--purple)/20'>
            <Settings size={20} />
            <span>Settings</span>
          </div>
        </>
      ) : user === 'employees' ? (
        <>
          <div className='p-3 bg-(--purple) rounded-xl flex gap-3 text-sm items-center cursor-pointer'>
            <House size={20} />
            <span>Dashboard</span>
          </div>
          <div className='p-3 rounded-xl flex gap-3 text-sm items-center cursor-pointer hover:bg-(--purple)/20'>
            <Logs size={20} />
            <span>My Tasks</span>
          </div>
          <div className='p-3 rounded-xl flex gap-3 text-sm items-center cursor-pointer hover:bg-(--purple)/20'>
            <Calendar size={20} />
            <span>Calendar</span>
          </div>
          <div className='p-3 rounded-xl flex gap-3 text-sm items-center cursor-pointer hover:bg-(--purple)/20'>
            <Folder size={20} />
            <span>Files</span>
          </div>
          <div className='p-3 rounded-xl flex gap-3 text-sm items-center cursor-pointer hover:bg-(--purple)/20'>
            <Settings size={20} />
            <span>Settings</span>
          </div>
        </>
      ) : null}
    </div>
  )
}

export default Menu
