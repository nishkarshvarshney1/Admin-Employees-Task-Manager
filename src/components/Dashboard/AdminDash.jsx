import React from 'react'
import Header from '../others/EmployeeDash/Header'
import CreateTask from '../others/AdminDash/CreateTask'
import AllTask from '../others/AdminDash/AllTask'

const AdminDash = ({handleLogout}) => {
  return (
    <div id='admindash' className='bg-[#101010] h-screen px-15 text-white'>
      <Header handleLogout={handleLogout}/>
      <CreateTask />
      <AllTask />
    </div>
  )
}

export default AdminDash
