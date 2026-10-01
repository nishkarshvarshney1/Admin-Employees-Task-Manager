import React, { useContext } from 'react'
import LeftMainContent from './LeftMainContent';
import RightMainContent from './RightMainContent';
import { AuthContext } from '../../../../context/AuthProvider';

const MainContent = ({ setIsModalOpened }) => {
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
    <div className='relative z-11 flex justify-between gap-5 flex-1 overflow-auto '>
      <LeftMainContent totals={totals}/>
      <RightMainContent totals={totals} setIsModalOpened={setIsModalOpened} />
    </div>
  )
}

export default MainContent
