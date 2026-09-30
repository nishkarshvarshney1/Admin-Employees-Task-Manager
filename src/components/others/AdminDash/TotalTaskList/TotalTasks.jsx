import React from 'react'
import {ArrowUp, CalendarRange} from 'lucide-react'

const TotalTasks = () => {
  return (
    <div className='p-px rounded-2xl w-[24%] bg-linear-to-bl from-(--purple) via-(--border-color) to-(--border-color)'>
    <div id='total-tasks' className='flex  items-center justify-between py-3.5 px-5 rounded-2xl backdrop-blur-xs'>
        <div className='p-1.5 bg-(--purple) rounded-sm'>
            <CalendarRange size={20}/>
        </div>
        <div>
            <h2 className='text-xl'>24</h2>
            <h4 className='text-[0.65rem]'>Total Task</h4>
        </div>
        <div className='text-[0.65rem] text-(--purple) flex items-center'>
            +12%
            <ArrowUp size={12}/>
        </div>
      </div>
      </div>
  )
}

export default TotalTasks
