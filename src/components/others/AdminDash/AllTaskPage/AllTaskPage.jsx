import React from 'react'
import TopTaskContent from './TopTaskContent';
import BottomTaskContent from './BottomTaskContent';

const AllTaskPage = () => {
    return (
        <div className='flex flex-col gap-5'>
            <TopTaskContent />
            <BottomTaskContent />
        </div>
    )
}

export default AllTaskPage
