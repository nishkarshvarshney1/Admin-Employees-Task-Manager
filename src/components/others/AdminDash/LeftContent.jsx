import React from 'react'
import Menu from './Menu';
import { LogOut } from 'lucide-react';
import Mountain from '../../../assets/purple and White Mountains.png'

const LeftContent = () => {
  return (
    <div className='h-full w-[15%] bg-transparent relative z-2 backdrop-blur-sm border-r border-(--border-color) flex flex-col gap-2'>
      <div className='flex items-center py-7 px-3 border-b border-(--border-color)'>
        <img src={Mountain} alt="" className='h-12' />
        <h1 className='text-lg'>Task Manager</h1>
      </div>
      <Menu />
      <button className='absolute bottom-10 left-10 flex gap-3 text-sm items-center hover:bg-(--purple)/20 cursor-pointer py-3 px-4 rounded-lg'> 
        <LogOut />
        <span>Log Out</span>
      </button>
    </div>
  )
}

export default LeftContent
