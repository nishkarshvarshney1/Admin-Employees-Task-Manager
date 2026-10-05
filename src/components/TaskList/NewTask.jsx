import React, { useContext, useState } from 'react'
import {X, Check, CalendarDays, Dot} from 'lucide-react'
import { AuthContext } from '../../context/AuthProvider';

const NewTask = ({data}) => {
  const authData = useContext(AuthContext)
  const [expand, setExpand] = useState(false)
  console.log(data)
  return (
    <div className='grid grid-cols-[1fr_1fr_1fr] items-center px-5 py-3 rounded-lg'>
      <div>
        <h1 className='text-base'>{data.taskTitle}</h1>
        <p onClick={()=>{
          setExpand(!expand)
        }}
         className={`text-xs text-(--light-pink) cursor-pointer ${expand ? '' : 'line-clamp-1'}`}>{data.taskDescription}</p>
      </div>
      <div className='flex gap-5 justify-self-center'>
        <span className='text-yellow-400 bg-(--yellow) px-3 py-1.5 text-xs rounded-lg border border-yellow-600/50'>{data.taskData.priority}</span>
        <div className='text-blue-400 bg-(--blue) px-3 py-1.5 text-xs rounded-lg border border-blue-600/50 flex items-center gap-2'><Dot size={12} strokeWidth={15}/> New</div>
        <span className='text-xs flex gap-2 items-center'><CalendarDays size={12}/>{data.taskData.dueDate}</span>
      </div>
      <div className='flex gap-5 justify-self-end'>
        <button className='bg-(--green) px-5 py-2.5 border border-green-600/50 rounded-lg text-xs flex gap-2 items-center cursor-pointer'><Check className='text-green-500' size={20} strokeWidth={3}/> Accept</button>
        <button className='bg-(--red) px-5 py-2.5 border border-red-400/50 rounded-lg text-xs flex gap-2 items-center cursor-pointer'><X stroke='red' size={20} strokeWidth={3}/>Reject</button>
      </div>
    </div>
  )
}

export default NewTask
