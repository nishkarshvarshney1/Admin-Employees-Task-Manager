import React from 'react'

const TaskList = ({userData}) => {
  const numbers = Object.values(userData)[0]
  return (
    <div className='flex gap-5 mt-5'>
     <div className='text-white flex flex-col gap-5 w-[45%] bg-(--blue) p-5 rounded-lg'>
      <h2 className='text-5xl font-bold'>{numbers.newTask}</h2>
      <h3 className='text-3xl font-medium'>New Task</h3>
    </div>
    <div className='text-white flex flex-col gap-5 w-[45%] bg-(--green) p-5 rounded-lg'>
      <h2 className='text-5xl font-bold'>{numbers.completed}</h2>
      <h3 className='text-3xl font-medium'>Completed Task</h3>
    </div>
    <div className='text-black flex flex-col gap-5 w-[45%] bg-(--yellow) p-5 rounded-lg'>
      <h2 className='text-5xl font-bold'>{numbers.active}</h2>
      <h3 className='text-3xl font-medium'>Accepted Task</h3>
    </div>
    <div className='text-white flex flex-col gap-5 w-[45%] bg-(--red) p-5 rounded-lg'>
      <h2 className='text-5xl font-bold'>{numbers.failed}</h2>
      <h3 className='text-3xl font-medium'>Failed Task</h3>
    </div>
    </div>
  )
}

export default TaskList
