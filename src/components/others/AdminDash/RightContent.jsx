import React from 'react'
import Header from '../EmployeeDash/Header'
import MainContent from './MainContent/MainContent';
import TotalTask from './TotalTask';

const RightContent = ({handleLogout}) => {
  return (
    <div className='w-[85%] bg-purple-700 px-4 relative'>
      <Header handleLogout={handleLogout}/>
      <MainContent />
    </div>
  )
}

export default RightContent
