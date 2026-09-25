import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthProvider';

const AllTask = () => {
  const employees = useContext(AuthContext).employees
  return (
    <div className='p-5 flex flex-col gap-3 bg-(--dark-purple) rounded-lg border border-(--border-color) mb-5'>
      <h1 className='text-base'>Employee Task Overview</h1>
      <div className='w-full flex flex-col text-xs gap-1 bg-(--dark-purple) rounded-lg overflow-hidden'>
        <div className='grid grid-cols-6 place-items-center w-full bg-[#232755] p-3 rounded-sm'>
          <h2>Name</h2>
          <h3>New Task</h3>
          <h3>Active</h3>
          <h3>Completed</h3>
          <h3>Failed</h3>
          <h3>Total</h3>
        </div>
        <div className='overflow-y-auto flex flex-col rounded-sm gap-1'>
          {employees.map((e) => {
            const employeesData = Object.values(e)[0]
            return <div key={employeesData.id}>
              <div className='grid grid-cols-6 text-center gap-1'>
                <h2 className='p-2 border border-[#1A1F48] rounded-l-sm'>{employeesData.name}</h2>
                <h3 className='bg-(--blue) p-2 border-2 border-(--bright-blue)'>{employeesData.newTask}</h3>
                <h3 className='bg-(--yellow) p-2 border-2 border-(--bright-yellow)'>{employeesData.active}</h3>
                <h3 className='bg-(--green) p-2 border-2 border-(--bright-green)'>{employeesData.completed}</h3>
                <h3 className='bg-(--red) p-2 border-2 border-(--bright-red)'>{employeesData.failed}</h3>
                <h3 className='p-2 border-2 border-(--border-color) bg-[#232854] rounded-r-sm'> 45</h3>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default AllTask
