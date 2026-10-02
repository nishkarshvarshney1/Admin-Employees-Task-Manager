import React, { useContext } from 'react'
import LeftMainContent from './LeftMainContent';
import RightMainContent from './RightMainContent';
import { AuthContext } from '../../../../context/AuthProvider';

const MainContent = ({ setIsModalOpened, totals }) => {
  return (
    <div className='relative z-11 flex justify-between gap-5 flex-1 overflow-auto '>
      <LeftMainContent totals={totals}/>
      <RightMainContent totals={totals} setIsModalOpened={setIsModalOpened} />
    </div>
  )
}

export default MainContent
