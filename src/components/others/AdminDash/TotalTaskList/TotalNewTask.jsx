import React from 'react'
import {CalendarRange} from 'lucide-react'

const TotalNewTask = () => {
  return (
    <div className='flex w-[24%] bg-(--purple) items-center justify-between py-3.5 px-5 rounded-lg border border-(--border-color)'>
        <CalendarRange size={25}/>
        <div>
            <h2 className='text-xl'>24</h2>
            <h4 className='text-[0.65rem]'>Total Task</h4>
        </div>
        <div className='text-[0.65rem]'>
            +12%
        </div>
      </div>
  )
}

export default TotalNewTask
