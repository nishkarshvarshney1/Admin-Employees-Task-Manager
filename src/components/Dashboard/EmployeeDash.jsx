import React from 'react'
import Header from '../others/EmployeeDash/Header'
import TaskList from '../others/EmployeeDash/TaskList'
import TaskContainer from '../others/EmployeeDash/TaskContainer'
import AcceptTask from '../TaskList/AcceptTask';
import LeftContent from '../others/AdminDash/LeftContent'
import EmployeesRightContent from '../others/EmployeeDash/EmployeesRightContent/EmployeesRightContent';

const EmployeeDash = ({handleLogout, userData}) => {
  return (
    <div className='h-screen bg-[url(/main-bg.png)] bg-center bg-cover text-(--light-pink) flex relative'>
      <LeftContent handleLogout={handleLogout}/>
      <EmployeesRightContent userData={userData} handleLogout={handleLogout}/>
      {/* <TaskList userData={userData}/> */}
      {/* <TaskContainer userData={userData}/> */}
      
    </div>
  )
}

export default EmployeeDash
