import React from 'react'
import Header from '../others/EmployeeDash/Header'
import HeaderBg from '../others/AdminDash/HeaderBg';
import LeftContent from '../others/AdminDash/LeftContent';
import RightContent from '../others/AdminDash/RightContent';
import TotalTask from '../others/AdminDash/TotalTask';

const AdminDash = ({handleLogout}) => {
  return (
    <div id='admindash' className='bg-(--very-dark) h-screen text-white relative flex'>
      <HeaderBg />
      
      <LeftContent />
      <RightContent handleLogout={handleLogout}/>
    </div>
  )
}

export default AdminDash
