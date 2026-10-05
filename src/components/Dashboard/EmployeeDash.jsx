import React from 'react'
import LeftContent from '../others/AdminDash/LeftContent'
import EmployeesRightContent from '../others/EmployeeDash/EmployeesRightContent/EmployeesRightContent';
import HeaderBg from '../others/AdminDash/HeaderBg';

const EmployeeDash = ({handleLogout, userData}) => {
  return (
    <div className='h-screen text-(--light-pink) flex relative bg-(--very-dark)'>
      <HeaderBg />
      <LeftContent handleLogout={handleLogout}/>
      <EmployeesRightContent userData={userData} handleLogout={handleLogout}/>
      
    </div>
  )
}

export default EmployeeDash
