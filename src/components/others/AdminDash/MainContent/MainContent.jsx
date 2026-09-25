import React from 'react'
import LeftMainContent from './LeftMainContent';
import RightMainContent from './RightMainContent';

const MainContent = () => {
  return (
    <div className='relative z-2 flex justify-between gap-5 flex-1 overflow-auto '>
        <LeftMainContent />
        <RightMainContent />
    </div>
  )
}

export default MainContent
