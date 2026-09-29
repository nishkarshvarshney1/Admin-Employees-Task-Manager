import React from 'react'
import AcceptTask from '../../TaskList/AcceptTask';
import CompleteTask from '../../TaskList/CompleteTask';
import NewTask from '../../TaskList/NewTask';
import FailedTask from '../../TaskList/FailedTask';
import { ChevronDown, Funnel, Search } from 'lucide-react';

const TaskContainer = ({ userData }) => {
  const numbers = Object.values(userData)[0]
  return (
    <div className='mt-5 pt-5 px-5  border border-b-0 border-(--light-border) rounded-lg flex flex-col flex-1 min-h-0'>
      <div className='flex justify-between shrink-0'>
        <div className='flex flex-col gap-px'>
          <h1 className='text-4xl'>My Tasks</h1>
        <p>Here are all the tasks assign to you.</p>
        </div>
        <div className='flex items-center text-sm gap-5'>
        <div className='flex items-center gap-3 relative'>
          <Search className='absolute left-3 z-11' size={20}/>
          <input type="text" placeholder='Search' className='border border-(--light-border)/80 backdrop-blur-xl pl-10 rounded-lg pr-3 py-3 w-70'/>
        </div>
        <div className='flex items-center gap-3 bg-[#22185D] py-3 px-4 rounded-lg border border-(--light-border)/80'>
          <Funnel size={20}/>
          <span>All Tasks</span>
          <ChevronDown size={20}/>
        </div>
        </div>
      </div>
      <div className='flex items-center gap-2 mt-5 mb-2 shrink-0'>
        <button className='py-2 px-6 bg-[#793AFC] shadow-[0_0_4px_#793AFC] border-(--light-border)/80 border text-sm rounded-lg'>All</button>
        <button className='py-2 px-6 bg-[#22185D] border-(--light-border)/80 border text-sm rounded-lg'>New</button>
        <button className='py-2 px-6 bg-[#22185D] border-(--light-border)/80 border text-sm rounded-lg'>Accepted</button>
        <button className='py-2 px-6 bg-[#22185D] border-(--light-border)/80 border text-sm rounded-lg'>Completed</button>
        <button className='py-2 px-6 bg-[#22185D] border-(--light-border)/80 border text-sm rounded-lg'>Rejected</button>
      </div>
    <div className='no-scrollbar flex flex-col w-full gap-1 overflow-y-auto min-h-0'>
      {numbers.tasks.filter((e) => e.newTask).map((e, idx) => <NewTask key={idx} data={e} />)}
      {numbers.tasks.filter((e) => e.completed).map((e, idx) => <CompleteTask key={idx} data={e} />)}
      {numbers.tasks.filter((e) => e.active).map((e, idx) => <AcceptTask key={idx} data={e} />)}
      {numbers.tasks.filter((e) => e.failed).map((e, idx) => <FailedTask key={idx} data={e} />)}
    </div>
    </div>
  )
}

export default TaskContainer
