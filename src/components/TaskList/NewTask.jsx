import React, { useContext } from 'react'
import {X, Check} from 'lucide-react'
import { AuthContext } from '../../context/AuthProvider';

const NewTask = ({data}) => {
  const authData = useContext(AuthContext)
  console.log(authData)
  return (
    <div className='text-white w-100 bg-(--blue) h-90 shrink-0 rounded-lg p-5 flex flex-col justify-between'>
      <div className='flex justify-between items-center font-semibold'>
        <span className='bg-red-400 px-3 py-1 rounded-lg'>{data.taskData.priority}</span>
        <h3>{data.taskData.dueDate}</h3>
      </div>
      <div className='flex flex-col gap-3'>
      <h1 className='text-3xl font-bold'>{data.taskTitle}</h1>
      <p>{data.taskDescription}</p>
      </div>
      <div className='flex justify-between'>
      <button onClick={()=>{
        
      }}
       className='bg-red-500 p-3 rounded'><X /></button>
      <button className='bg-green-500 p-3 rounded'><Check /></button>
      </div>
    </div>
  )
}

export default NewTask
