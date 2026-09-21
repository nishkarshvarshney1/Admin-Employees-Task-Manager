import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthProvider';

const AllTask = () => {
  const employees = useContext(AuthContext).employees
  return (
    <div className='w-full mt-10 flex gap-2 flex-col h-55'>
      <div className='grid grid-cols-5 place-items-center w-full bg-red-400 p-3 rounded-sm'>
        <h2>Name</h2>
        <h3>New Task</h3>
        <h3>Active</h3>
        <h3>Completed</h3>
        <h3>Failed</h3>
      </div>
      <div className='overflow-y-auto flex flex-col gap-1 rounded-sm'>
        {employees.map((e) => {
          const employeesData = Object.values(e)[0]
          return <div key={employeesData.id}>
            <div className='grid grid-cols-5 w-full bg-(--red) text-center'>
              <h2 className='bg-black p-2'>{employeesData.name}</h2>
              <h3 className='bg-(--blue) p-2'>{employeesData.newTask}</h3>
              <h3 className='bg-(--yellow) text-black p-2'>{employeesData.active}</h3>
              <h3 className='bg-(--green) p-2'>{employeesData.completed}</h3>
              <h3 className='bg-(--red) p-2'>{employeesData.failed}</h3>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default AllTask
