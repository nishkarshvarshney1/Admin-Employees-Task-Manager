import React from 'react'
import Header from '../Header'
import TaskContainer from '../TaskContainer';
import TaskList from '../TaskList';

const EmployeesRightContent = ({handleLogout, userData}) => {
  return (
    <div className='w-[85%] px-5 flex flex-col relative z-11'>
      <Header handleLogout={handleLogout} currentUser={Object.values(userData)[0]} />
      <TaskList userData={userData}/>
      <TaskContainer userData={userData}/>
    </div>
  )
}

export default EmployeesRightContent
