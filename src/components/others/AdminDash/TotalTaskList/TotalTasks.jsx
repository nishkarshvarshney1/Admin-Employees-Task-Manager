import React from 'react'
import {ArrowUp, CalendarRange} from 'lucide-react'

const TotalTasks = () => {
  return (
    <div id='total-tasks' className='flex w-[24%] items-center justify-between py-3.5 px-5 rounded-lg border border-(--border-color) backdrop-blur-xs'>
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
  )
}

export default TotalTasks
