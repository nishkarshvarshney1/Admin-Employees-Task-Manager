import React, { useState } from 'react'
import Header from '../others/EmployeeDash/Header'
import HeaderBg from '../others/AdminDash/HeaderBg';
import LeftContent from '../others/AdminDash/LeftContent';
import RightContent from '../others/AdminDash/RightContent';
import TotalTask from '../others/AdminDash/TotalTask';
import CreateTaskModal from '../others/AdminDash/CreateTaskModal';

const AdminDash = ({handleLogout}) => {
  const [isModalOpened, setIsModalOpened] = useState(false)
  const [pageOpened, setPageOpened] = useState('dashboard')
  return (
    <div id='admindash' className='bg-(--very-dark) h-screen text-white relative flex'>
      <HeaderBg />
      
      <LeftContent handleLogout={handleLogout} setPageOpened={setPageOpened} pageOpened={pageOpened}/>
      <RightContent setIsModalOpened={setIsModalOpened} pageOpened={pageOpened}/>
      {isModalOpened ? <CreateTaskModal setIsModalOpened={setIsModalOpened}/> : null}
    </div>
  )
}

export default AdminDash
