import React, { useContext } from 'react'
import Header from '../EmployeeDash/Header'
import MainContent from './MainContent/MainContent';
import TotalTask from './TotalTask';
import AllTaskPage from './AllTaskPage/AllTaskPage';
import { AuthContext } from '../../../context/AuthProvider';

const RightContent = ({ handleLogout, setIsModalOpened, pageOpened }) => {
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
    <div className='w-[85%] bg-(--very-dark) px-5 relative flex flex-col flex-1 min-h-0'>
      <Header handleLogout={handleLogout} />
      <div key={pageOpened} className='animate-page-in flex-1 min-h-0 flex relative z-11'>
        {pageOpened === 'dashboard'
          ? <MainContent totals={totals} />
          : pageOpened === 'allTask'
            ? <AllTaskPage setIsModalOpened={setIsModalOpened} totals={totals} />
            : null
        }
      </div>
    </div>
  )
}

export default RightContent
