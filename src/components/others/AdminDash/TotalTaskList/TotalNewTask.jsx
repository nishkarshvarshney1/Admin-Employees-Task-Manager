import React from 'react'
import {CalendarRange} from 'lucide-react'

const TotalNewTask = () => {
  return (
    <div className='flex w-[24%] bg-blue-400 items-center justify-between py-3 px-5 rounded-lg border border-(--border-color)'>
        <CalendarRange size={30}/>
        <div>
            <h2 className='text-2xl'>24</h2>
            <h4 className='text-xs'>Total Task</h4>
        </div>
        <div className='text-xs'>
            +12%
        </div>
      </div>
  )
}

export default TotalNewTask
