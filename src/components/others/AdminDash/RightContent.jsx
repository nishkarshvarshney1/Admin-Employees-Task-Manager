import React, { useContext } from 'react'
import Header from '../EmployeeDash/Header'
import MainContent from './MainContent/MainContent';
import TotalTask from './TotalTask';
import AllTaskPage from './AllTaskPage/AllTaskPage';
import { AuthContext } from '../../../context/AuthProvider';

const RightContent = ({ handleLogout, setIsModalOpened }) => {
  const { employees } = useContext(AuthContext)
  const totals = employees.reduce((total, e) => {
    const data = Object.values(e)[0]
    return {
      newTask: total.newTask + data.newTask,
      active: total.active + data.active,
      completed: total.completed + data.completed,
      failed: total.failed + data.failed
    }
  }, {
    newTask: 0,
    active: 0,
    completed: 0,
    failed: 0
  })
  return (
    <div className='w-[85%] bg-(--very-dark) px-5 relative flex flex-col'>
      <Header handleLogout={handleLogout} />
      <AllTaskPage setIsModalOpened={setIsModalOpened} totals={totals} />
      {/* <MainContent totals={totals}/> */}
    </div>
  )
}

export default RightContent
