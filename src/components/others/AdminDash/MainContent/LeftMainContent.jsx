import React from 'react'
import TotalTask from '../TotalTask';
import CreateTask from '../CreateTask'
import AllTask from '../AllTask'

const LeftMainContent = () => {
  return (
    <div className='w-[75%] flex flex-col gap-5 '>
      <TotalTask />
      <CreateTask />
      <AllTask />
    </div>
  )
}

export default LeftMainContent
