import React from 'react'
import TopTaskContent from './TopTaskContent';
import BottomTaskContent from './BottomTaskContent';

const AllTaskPage = ({totals, setIsModalOpened}) => {
    return (
        <div className='flex flex-col gap-5'>
            <TopTaskContent totals={totals}/>
            <BottomTaskContent setIsModalOpened={setIsModalOpened}/>
        </div>
    )
}

export default AllTaskPage
