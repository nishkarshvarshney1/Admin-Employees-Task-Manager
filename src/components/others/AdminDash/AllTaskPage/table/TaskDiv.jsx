import { Dot, Ellipsis } from 'lucide-react';
import React from 'react'

const TaskDiv = () => {
  return (
    <div className='grid grid-cols-[2fr_1.3fr_1fr_1fr_1fr_0.7fr] items-center py-1.5'>
      <div>
        <h2>Design a landing page</h2>
        <p className='line-clamp-1'>Create a modern website using react and use bankai katenkyokotsu karmatsu shinjui</p>
      </div>
      <div className='flex items-center'>
        <div></div>
        <span>Amna sharama</span>
      </div>
      <span className='items-center flex'>Oct 5, 2026</span>
      <div className='gap-2 flex items-center'>
        <div className='rounded-full w-3 h-3 bg-white'></div>
        <span>Very High</span>
      </div>
      <div className='rounded-full self-center bg-linear-to-r from-(--blue) to-(--border-color) w-fit p-2 border border-(--blue) px-3 justify-center gap-2 flex items-center'>
        <div className='rounded-full w-3 h-3 bg-blue-400'></div>
        <span className=''>New Task</span>
      </div>
      <button><Ellipsis /></button>
    </div>
  )
}

export default TaskDiv
