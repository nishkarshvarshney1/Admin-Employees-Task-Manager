import React from 'react'
import Header from '../others/EmployeeDash/Header'
import TaskList from '../others/EmployeeDash/TaskList'
import TaskContainer from '../others/EmployeeDash/TaskContainer'
import AcceptTask from '../TaskList/AcceptTask';

const EmployeeDash = ({handleLogout, userData}) => {
  return (
    <div className='h-screen bg-[url(/main-bg.png)] px-15 bg-center bg-cover'>
      <Header handleLogout={handleLogout} currentUser={Object.values(userData)[0]} />
      <TaskList userData={userData}/>
      <TaskContainer userData={userData}/>
    </div>
  )
}

export default EmployeeDash
