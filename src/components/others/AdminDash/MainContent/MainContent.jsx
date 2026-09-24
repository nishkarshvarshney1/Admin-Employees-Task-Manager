import React from 'react'
import LeftMainContent from './LeftMainContent';
import RightMainContent from './RightMainContent';

const MainContent = () => {
  return (
    <div className='relative z-2 flex justify-between gap-5 h-full bg-amber-900'>
        <LeftMainContent />
        <RightMainContent />
    </div>
  )
}

export default MainContent
