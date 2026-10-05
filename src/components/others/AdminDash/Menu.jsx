import React from 'react'
import { Calendar, CalendarRange, ChartNoAxesColumn, Folder, House, Logs, Settings, Users } from 'lucide-react'

const Menu = ({ setPageOpened, pageOpened }) => {
  const storage = localStorage.getItem('loggedInUser') ? localStorage : sessionStorage
  const user = JSON.parse(storage.getItem('loggedInUser')).role
  return (
    <div className='flex flex-col py-3 px-4 gap-2 relative z-11'>
      {user === 'admin' ? (
        <>
          <button onClick={() => {
            setPageOpened('dashboard')
          }}
            className={`p-3 rounded-full flex gap-3 text-sm items-center cursor-pointer transition 
           ${pageOpened === 'dashboard' 
            ? 'bg-(--purple)'
            : 'hover:bg-(--purple)/20'
           }
           `}>
            <House size={20} />
            <span>Dashboard</span>
          </button>
          <button onClick={() => {
            setPageOpened('allTask')
          }}
            className={`p-3 rounded-full flex gap-3 text-sm items-center cursor-pointer transition
           ${pageOpened === 'allTask' 
            ? 'bg-(--purple)'
            : 'hover:bg-(--purple)/20'
           }
           `}>
            <CalendarRange size={20} />
            <span>All Tasks</span>
          </button>
        </>
      ) : user === 'employees' ? (
        <>
          <div className='p-3 bg-(--purple) rounded-full flex gap-3 text-sm items-center cursor-pointer'>
            <House size={20} />
            <span>Dashboard</span>
          </div>
          <div className='p-3 rounded-full flex gap-3 text-sm items-center cursor-pointer hover:bg-(--purple)/20'>
            <Logs size={20} />
            <span>My Tasks</span>
          </div>
          <div className='p-3 rounded-full flex gap-3 text-sm items-center cursor-pointer hover:bg-(--purple)/20'>
            <Calendar size={20} />
            <span>Calendar</span>
          </div>
          <div className='p-3 rounded-full flex gap-3 text-sm items-center cursor-pointer hover:bg-(--purple)/20'>
            <Folder size={20} />
            <span>Files</span>
          </div>
          <div className='p-3 rounded-full flex gap-3 text-sm items-center cursor-pointer hover:bg-(--purple)/20'>
            <Settings size={20} />
            <span>Settings</span>
          </div>
        </>
      ) : null}
    </div>
  )
}

export default Menu
