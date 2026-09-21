import React from 'react'
import Header from '../others/EmployeeDash/Header'
import TaskList from '../others/EmployeeDash/TaskList'
import TaskContainer from '../others/EmployeeDash/TaskContainer'
import AcceptTask from '../TaskList/AcceptTask';

const EmployeeDash = ({handleLogout, userData}) => {
  return (
    <div className='bg-[#1E1E1E] h-screen px-15'>
      <Header handleLogout={handleLogout} currentUser={Object.values(userData)[0]} />
      <TaskList userData={userData}/>
      <TaskContainer userData={userData}/>
    </div>
  )
}

export default EmployeeDash
