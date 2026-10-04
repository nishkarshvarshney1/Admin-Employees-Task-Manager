import { Dot, Ellipsis } from 'lucide-react';
import React from 'react'

const TaskDiv = ({ tasks }) => {
  console.log(tasks)
  return (
    <div className='grid grid-cols-[2fr_1.3fr_1fr_1fr_1fr_0.7fr] items-center py-1.5 px-4'>
      <div>
        <h2>Design a landing page</h2>
        <p className='line-clamp-1 text-xs text-(--light-pink)/80'>Create a modern website using react and use bankai katenkyokotsu karmatsu shinjui</p>
      </div>
      <div className='flex items-center'>
        <div></div>
        <span>Amna sharama</span>
      </div>
      <span className='items-center flex'>Oct 5, 2026</span>
      <div className='gap-2 flex items-center'>
        <div className='rounded-full w-2.5 h-2.5 bg-white'></div>
        <span>Very High</span>
      </div>
      <div className={`rounded-full self-center bg-linear-to-r ${tasks.newTask ? 'from-(--blue) border-(--blue)' : tasks.active ? 'from-(--yellow) border-(--yellow)' : tasks.completed ? 'from-(--green) border-(--green)' : tasks.failed ? 'from-(--red) border-(--red)' : null} to-(--border-color)/10 w-fit p-1.5 px-4 border justify-center gap-2 flex items-center`}>
        <div className={`rounded-full w-2.5 h-2.5 ${tasks.newTask ? 'bg-blue-400' : tasks.active ? 'bg-yellow-400' : tasks.completed ? 'bg-green-400' : tasks.failed ? 'bg-red-400' : null}`}></div>
        <span>
          {tasks.newTask
            ? 'New Task'
            : tasks.active
              ? 'Active'
              : tasks.completed
                ? 'Completed'
                : tasks.failed
                  ? 'Failed' : null}
        </span>
      </div>
      <button><Ellipsis /></button>
    </div>
  )
}

export default TaskDiv
