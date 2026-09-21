import React from 'react'
import AcceptTask from '../../TaskList/AcceptTask';
import CompleteTask from '../../TaskList/CompleteTask';
import NewTask from '../../TaskList/NewTask';
import FailedTask from '../../TaskList/FailedTask';

const TaskContainer = ({ userData }) => {
  const numbers = Object.values(userData)[0]
  return (
    <div id='taskcontainer' className='mt-20 flex items-center gap-5 overflow-x-auto'>
      {numbers.tasks.filter((e) => e.newTask).map((e, idx) => <NewTask key={idx} data={e} />)}
      {numbers.tasks.filter((e) => e.completed).map((e, idx) => <CompleteTask key={idx} data={e} />)}
      {numbers.tasks.filter((e) => e.active).map((e, idx) => <AcceptTask key={idx} data={e} />)}
      {numbers.tasks.filter((e) => e.failed).map((e, idx) => <FailedTask key={idx} data={e} />)}
    </div>
  )
}

export default TaskContainer
