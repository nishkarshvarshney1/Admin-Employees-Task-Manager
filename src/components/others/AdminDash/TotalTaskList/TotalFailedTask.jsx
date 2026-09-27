import React from 'react'
import {ArrowDown, CalendarRange, X} from 'lucide-react'

const TotalFailedTask = () => {
  return (
    <div className='flex w-[24%] backdrop-blur-xs items-center bg-linear-to-r from-(--red)/50 to-(--dark-purple) justify-between py-3.5 px-5 rounded-lg border border-(--border-red)'>
        <div className='p-1 bg-red-400 rounded-sm'>
            <X size={20} strokeWidth={3}/>
        </div>
        <div>
            <h2 className='text-xl'>3</h2>
            <h4 className='text-[0.65rem]'>Failed</h4>
        </div>
        <div className='text-[0.65rem] text-red-400 flex items-center '>
            -5%
            <ArrowDown size={12}/>
        </div>
      </div>
  )
}

export default TotalFailedTask
