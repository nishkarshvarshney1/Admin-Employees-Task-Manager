import { Dot, Ellipsis } from 'lucide-react';
import React from 'react'

const TaskDiv = ({data}) => {
  console.log(data)
  return (
    <div className='grid grid-cols-[2fr_1.3fr_1fr_1fr_1fr_0.7fr] items-center py-1.5 px-4'>
      <div>
        <h2>Design a landing page</h2>
        <p className='line-clamp-1 text-xs text-(--light-pink)/80'>Create a modern website using react and use bankai katenkyokotsu karmatsu shinjui</p>
      </div>
      <div className='flex items-center'>
        <div></div>
        <span>Amna sharama</span>
      </div>
      <span className='items-center flex'>Oct 5, 2026</span>
      <div className='gap-2 flex items-center'>
        <div className='rounded-full w-2.5 h-2.5 bg-white'></div>
        <span>Very High</span>
      </div>
      <div className='rounded-full self-center bg-linear-to-r from-(--blue) to-(--border-color) w-fit p-1 px-2 border border-(--blue) justify-center gap-2 flex items-center'>
        <div className='rounded-full w-2.5 h-2.5 bg-blue-400'></div>
        <span>New Task</span>
      </div>
      <button><Ellipsis /></button>
    </div>
  )
}

export default TaskDiv
