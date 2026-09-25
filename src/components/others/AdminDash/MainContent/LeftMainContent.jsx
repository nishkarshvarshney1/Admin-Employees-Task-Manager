import React from 'react'
import TotalTask from '../TotalTask';
import CreateTask from '../CreateTask'
import AllTask from '../AllTask'

const LeftMainContent = () => {
  return (
    <div className='no-scrollbar w-[75%] flex flex-col gap-5 overflow-y-auto'>
      <TotalTask />
      <CreateTask />
      <AllTask />
    </div>
  )
}

export default LeftMainContent
