import React, { useState } from 'react'
import {CalendarDays, Check, Dot } from 'lucide-react'

const AcceptTask = ({data}) => {
  const [expand, setExpand] = useState(false)
  return (
       <div className='grid grid-cols-[1fr_1fr_1fr] gap-5 items-center  backdrop-blur-lg px-5 py-3 border border-(--light-border) rounded-lg'>
      <div>
        <h1 className='text-base'>{data.taskTitle}</h1>
        <p onClick={()=>{
          setExpand(!expand)
        }}
         className={`text-xs text-(--light-pink) cursor-pointer ${expand ? '' : 'line-clamp-1'}`}>{data.taskDescription}</p>
      </div>
      <div className='flex gap-5 justify-self-center'>
        <span className='text-yellow-400 bg-(--yellow) px-3 py-1.5 text-xs rounded-lg border border-yellow-600/50'>{data.taskData.priority}</span>
        <div className='text-yellow-400 bg-(--yellow) px-3 py-1.5 text-xs rounded-lg border border-yellow-600/50 flex items-center gap-2'><Dot size={12} strokeWidth={15}/> Active</div>
        <span className='text-xs flex gap-2 items-center'><CalendarDays size={12}/>{data.taskData.dueDate}</span>
      </div>
        <button className='bg-(--purple) px-5 py-2.5 rounded-lg text-xs flex gap-2 items-center cursor-pointer justify-self-end'><Check className='text-violet-300' size={20} strokeWidth={3}/> Mark as Completed</button>
    </div>
  )
}

export default AcceptTask
