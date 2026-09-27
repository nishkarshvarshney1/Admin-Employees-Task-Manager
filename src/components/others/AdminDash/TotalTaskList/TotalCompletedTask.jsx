import React from 'react'
import {ArrowUp, Check} from 'lucide-react'

const TotalCompletedTask = () => {
  return (
    <div className='flex w-[24%] backdrop-blur-xs border border-(--border-green) items-center justify-between bg-linear-to-r from-(--green)/50 to-(--dark-purple) py-3.5 px-5 rounded-lg '>
        <div className='p-1 bg-green-400 rounded-full text-(--dark-purple)'>
            <Check size={20} strokeWidth={3}/>
        </div>
        <div>
            <h2 className='text-xl'>7</h2>
            <h4 className='text-[0.65rem]'>Completed</h4>
        </div>
        <div className='text-[0.65rem] text-green-400 flex items-center'>
            +20%
            <ArrowUp size={12}/>
        </div>
      </div>
  )
}

export default TotalCompletedTask
