import React from 'react'
import TotalTask from '../TotalTask';
import CreateTask from '../CreateTask'

const LeftMainContent = () => {
  return (
    <div className='w-[75%]'>
      <TotalTask />
      <CreateTask />
    </div>
  )
}

export default LeftMainContent
