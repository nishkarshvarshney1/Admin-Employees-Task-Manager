import React from 'react'

const TaskList = ({userData}) => {
  const numbers = Object.values(userData)[0]
  return (
    <div className='flex gap-5 mt-5 '>
     <div className='text-white flex flex-1 flex-col gap-2 bg-linear-to-r from-(--blue)/80 border border-[#3D47AE] to-(--dark-purple)/50 p-5 backdrop-blur-sm rounded-lg'>
      <h2 className='text-4xl font-bold'>{numbers.newTask}</h2>
      <h3 className='text-base font-medium'>New Task</h3>
    </div>
    <div className='text-white flex flex-1 flex-col gap-2 bg-linear-to-r from-(--green)/80 border border-[#415E83] to-(--dark-purple)/50 p-5 backdrop-blur-sm rounded-lg'>
      <h2 className='text-4xl font-bold'>{numbers.completed}</h2>
      <h3 className='text-base font-medium'>Completed Task</h3>
    </div>
    <div className='text-white flex flex-1 flex-col gap-2 bg-linear-to-r from-(--yellow)/80 border border-[#8557A4] to-(--dark-purple)/50 p-5 backdrop-blur-sm rounded-lg'>
      <h2 className='text-4xl font-bold'>{numbers.active}</h2>
      <h3 className='text-base font-medium'>Accepted Task</h3>
    </div>
    <div className='text-white flex flex-1 flex-col gap-2 bg-linear-to-r from-(--red)/80 border border-[#73369D] to-(--dark-purple)/50 p-5 backdrop-blur-sm rounded-lg'>
      <h2 className='text-4xl font-bold'>{numbers.failed}</h2>
      <h3 className='text-base font-medium'>Failed Task</h3>
    </div>
    </div>
  )
}

export default TaskList
