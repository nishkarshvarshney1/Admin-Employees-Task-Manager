import React from 'react'
import {ArrowUp, CalendarRange, Play} from 'lucide-react'

const TotalActiveTask = () => {
  return (
    <div className='flex w-[24%] backdrop-blur-xs bg-linear-to-r from-(--yellow)/50 to-(--dark-purple) items-center justify-between  py-3.5 px-5 rounded-lg border border-(--border-yellow)'>
        <div className='p-2 text-(--dark-purple) bg-yellow-400 rounded-full'>
            <Play size={15} strokeWidth={3}/>
        </div>
        <div>
            <h2 className='text-xl'>14</h2>
            <h4 className='text-[0.65rem]'>Active</h4>
        </div>
        <div className='text-[0.65rem] text-yellow-400 flex items-center'>
            +8%
            <ArrowUp size={12}/>
        </div>
      </div>
  )
}

export default TotalActiveTask
