import React, { useState } from 'react'
import AcceptTask from '../../TaskList/AcceptTask';
import CompleteTask from '../../TaskList/CompleteTask';
import NewTask from '../../TaskList/NewTask';
import FailedTask from '../../TaskList/FailedTask';
import { ArrowBigDown, ChevronDown, Filter, Funnel, Search } from 'lucide-react';

const TaskContainer = ({ userData }) => {
  const numbers = Object.values(userData)[0]
  const [filterTasks, setFilterTasks] = useState('All')
  return (
    <div className='flex-1 mt-5 min-h-0 flex justify-center items-center rounded-2xl mb-5 p-px bg-linear-to-br from-(--purple) via-(--border-color) to-(--light-pink)'>
      <div className='pt-5 px-5 bg-(--dark-purple) rounded-2xl flex flex-col h-full w-full'>
        <div className='flex justify-between shrink-0'>
          <div className='flex flex-col gap-px'>
            <h1 className='text-2xl'>My Tasks</h1>
            <p className='text-sm'>Here are all the tasks assign to you.</p>
          </div>
          <div className='flex items-center text-sm gap-5'>
            <div className='flex items-center gap-3 relative'>
              <Search className='absolute left-3 z-11' size={20} />
              <input type="text" placeholder='Search' className='border border-(--border-color)/80 backdrop-blur-xl pl-10 rounded-lg pr-3 py-3 w-70' />
            </div>
            <div className='flex items-center gap-3 bg-[#22185D]  py-3 px-4 rounded-lg border border-(--border-color)/80'>
              <Funnel size={20} />
              <span>All Tasks</span>
              <ChevronDown size={20} />
            </div>
          </div>
        </div>
        <div className='flex items-center gap-2 mt-5 mb-2 shrink-0'>
          <button onClick={() => {
            setFilterTasks('All')
          }}
            className={`py-2 px-6 text-sm rounded-lg ${filterTasks === 'All' ? 'bg-[#793AFC] ' : 'bg-[#22185D] '} cursor-pointer transition`}>All</button>
          <button onClick={() => {
            setFilterTasks('New')
          }}
            className={`py-2 px-6  ${filterTasks === 'New' ? 'bg-[#793AFC] ' : 'bg-[#22185D] '} text-sm rounded-lg cursor-pointer transition`}>New</button>
          <button onClick={() => {
            setFilterTasks('Accepted')
          }}
            className={`py-2 px-6  ${filterTasks === 'Accepted' ? 'bg-[#793AFC] ' : 'bg-[#22185D] '} text-sm rounded-lg cursor-pointer transition`}>Accepted</button>
          <button onClick={() => {
            setFilterTasks('Completed')
          }}
            className={`py-2 px-6  ${filterTasks === 'Completed' ? 'bg-[#793AFC] ' : 'bg-[#22185D] '} text-sm rounded-lg cursor-pointer transition`}>Completed</button>
          <button onClick={() => {
            setFilterTasks('Rejected')
          }}
            className={`py-2 px-6  ${filterTasks === 'Rejected' ? 'bg-[#793AFC] ' : 'bg-[#22185D] '} text-sm rounded-lg cursor-pointer transition`}>Rejected</button>
        </div>
        <div className='no-scrollbar flex flex-col w-full divide-y divide-(--border-color) overflow-y-auto min-h-0'>
          {filterTasks === 'All' ? (
            <>
              {numbers.tasks.filter((e) => e.newTask).map((e, idx) => <NewTask key={idx} data={e} />)}
              {numbers.tasks.filter((e) => e.completed).map((e, idx) => <CompleteTask key={idx} data={e} />)}
              {numbers.tasks.filter((e) => e.active).map((e, idx) => <AcceptTask key={idx} data={e} />)}
              {numbers.tasks.filter((e) => e.failed).map((e, idx) => <FailedTask key={idx} data={e} />)}
            </>
          ) : filterTasks === 'Accepted' ? (
            numbers.tasks.filter((e) => e.active).map((e, idx) => <AcceptTask key={idx} data={e} />)
            ) : filterTasks === 'Completed' ? (
              numbers.tasks.filter((e) => e.completed).map((e, idx) => <CompleteTask key={idx} data={e} />)
            ) : filterTasks === 'New' ? (
              numbers.tasks.filter((e) => e.newTask).map((e, idx) => <NewTask key={idx} data={e} />)
              ) : filterTasks === 'Rejected' ? (
                numbers.tasks.filter((e) => e.failed).map((e, idx) => <FailedTask key={idx} data={e} />)
              ) : null}
        </div>
        {filterTasks === 'All' && (
          <footer className='flex justify-center py-4'>
          <span className='text-(--light-pink)/75 text-xs flex items-center gap-1'>Scroll <ArrowBigDown size={14} /> to see all tasks</span>
        </footer>
        )}
      </div>
    </div>
  )
}

export default TaskContainer
