import React from 'react'
import LeftMainContent from './LeftMainContent';
import RightMainContent from './RightMainContent';

const MainContent = ({setIsModalOpened}) => {
  return (
    <div className='relative z-11 flex justify-between gap-5 flex-1 overflow-auto '>
        <LeftMainContent />
        <RightMainContent setIsModalOpened={setIsModalOpened}/>
    </div>
  )
}

export default MainContent
