import React from 'react'
import Header from '../EmployeeDash/Header'
import MainContent from './MainContent/MainContent';
import TotalTask from './TotalTask';

const RightContent = ({handleLogout, setIsModalOpened}) => {
  return (
    <div className='w-[85%] bg-(--very-dark) px-5 relative flex flex-col'>
      <Header handleLogout={handleLogout}/>
      <MainContent setIsModalOpened={setIsModalOpened}/>
    </div>
  )
}

export default RightContent
