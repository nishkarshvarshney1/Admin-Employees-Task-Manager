import { CalendarDays, Dot, X } from 'lucide-react';
import React, { use, useState } from 'react'

const FailedTask = ({data}) => {
  const [expand, setExpand] = useState(false)
  return (
    <div className='grid grid-cols-[1fr_1fr_1fr] gap-5 items-center backdrop-blur-lg cursor-pointer px-5 py-3 border border-(--light-border) rounded-lg'>
      <div>
        <h1 className='text-base'>{data.taskTitle}</h1>
        <p onClick={()=>{
          setExpand(!expand)
        }}
         className={`text-xs text-(--light-pink) ${expand ? '' : 'line-clamp-1'}`}>{data.taskDescription}</p>
      </div>
      <div className='flex gap-5 justify-self-center'>
        <span className='text-yellow-400 bg-(--yellow) px-3 py-1.5 text-xs rounded-lg border border-yellow-600/50'>{data.taskData.priority}</span>
        <div className='text-red-400 bg-(--red) px-3 py-1.5 text-xs rounded-lg border border-red-600/50 flex items-center gap-2'><Dot size={12} strokeWidth={15}/> Rejected</div>
        <span className='text-xs flex gap-2 items-center'><CalendarDays size={12}/>{data.taskData.dueDate}</span>
      </div>
        <button className='bg-[#3C3172] justify-self-end px-5 py-2.5 border border-(--border-color) rounded-lg text-xs flex gap-2 items-center cursor-pointer text-[#8578BA]'><X size={20} strokeWidth={3}/> Rejected</button>
    </div>
  )
}

export default FailedTask
