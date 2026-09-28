import React from 'react'
import LogOut from 'lucide-react'
import Menu from '../LeftContent/Menu'

const LeftContent = () => {
  return (
    <div className='h-full w-[15%] bg-transparent z-11 backdrop-blur-sm border-r border-(--border-color) flex flex-col gap-2 relative'>
      <div className='flex items-center py-7 px-3 border-b border-(--border-color) relative z-11'>
        <img src={Mountain} alt="" className='h-12' />
        <h1 className='text-lg'>Task Manager</h1>
      </div>
      <Menu />
      <button onClick={handleLogout}
        className='absolute z-11 bottom-10 left-10 flex gap-3 text-sm items-center hover:bg-(--purple)/20 cursor-pointer py-3 px-4 rounded-lg'>
        <LogOut />
        <span>Log Out</span>
      </button>
    </div>
  )
}

export default LeftContent
