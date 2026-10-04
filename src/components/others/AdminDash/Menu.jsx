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
          <button onClick={()=>{
            setPageOpened('employees')
          }}
           className={`p-3 rounded-full flex gap-3 text-sm items-center cursor-pointer transition
           ${pageOpened === 'employees' 
            ? 'bg-(--purple)'
            : 'hover:bg-(--purple)/20'
           }
           `}>
            <Users size={20} />
            <span>Employees</span>
          </button>
          <button onClick={()=>{
            setPageOpened('analytics')
          }}
           className={`p-3 rounded-full flex gap-3 text-sm items-center cursor-pointer transition
           ${pageOpened === 'analytics' 
            ? 'bg-(--purple)'
            : 'hover:bg-(--purple)/20'
           }
           `}>
            <ChartNoAxesColumn size={20} />
            <span>Analytics</span>
          </button>
          <button onClick={()=>{
            setPageOpened('settings')
          }}
          className={`p-3 rounded-full flex gap-3 text-sm items-center cursor-pointer transition
           ${pageOpened === 'settings' 
            ? 'bg-(--purple)'
            : 'hover:bg-(--purple)/20'
           }
           `}>
            <Settings size={20} />
            <span>Settings</span>
          </button>
        </>
      ) : user === 'employees' ? (
        <>
          <div className='p-3 bg-(--purple) rounded-full flex gap-3 text-sm items-center cursor-pointer'>transition
            <House size={20} />
            <span>Dashboard</span>
          </div>
          <div className='p-3 rounded-full flex gap-3 text-sm items-center cursor-pointer hover:bg-(--purple)/20'>transition
            <Logs size={20} />
            <span>My Tasks</span>
          </div>
          <div className='p-3 rounded-full flex gap-3 text-sm items-center cursor-pointer hover:bg-(--purple)/20'>transition
            <Calendar size={20} />
            <span>Calendar</span>
          </div>
          <div className='p-3 rounded-full flex gap-3 text-sm items-center cursor-pointer hover:bg-(--purple)/20'>transition
            <Folder size={20} />
            <span>Files</span>
          </div>
          <div className='p-3 rounded-full flex gap-3 text-sm items-center cursor-pointer hover:bg-(--purple)/20'>transition
            <Settings size={20} />
            <span>Settings</span>
          </div>
        </>
      ) : null}
    </div>
  )
}

export default Menu
