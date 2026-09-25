import React from 'react'

const RecentActivity = () => {
    return (
        <div className='flex flex-col gap-7 bg-(--dark-purple) p-5 rounded-lg border border-(--border-color)'>
            <div className='flex justify-between items-center'>
                <h1 className='text-base'>Recent Activity</h1>
                <h3 className='text-xs text-(--purple)'>View All</h3>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='flex items-center gap-3'>
                    <div className='w-7 h-7 rounded-full bg-green-400/30 flex items-center justify-center'>
                        <div className='w-3 h-3 bg-green-400 rounded-full'></div>
                    </div>
                    <div className='flex flex-col text-[0.70rem]'>
                        <span>Rahul Sharma completed a task</span>
                        <span className='text-gray-400'>2 hours ago</span>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='w-7 h-7 rounded-full bg-blue-400/30 flex items-center justify-center'>
                        <div className='w-3 h-3 bg-blue-400 rounded-full'></div>
                    </div>
                    <div className='flex flex-col text-[0.70rem]'>
                        <span>New task assigned to Priya Verma</span>
                        <span className='text-gray-400'>4 hours ago</span>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='w-7 h-7 rounded-full bg-yellow-400/30 flex items-center justify-center'>
                        <div className='w-3 h-3 bg-yellow-400 rounded-full'></div>
                    </div>
                    <div className='flex flex-col text-[0.70rem]'>
                        <span>Arjun Singh updated a task</span>
                        <span className='text-gray-400'>6 hours ago</span>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='w-7 h-7 rounded-full bg-red-400/30 flex items-center justify-center'>
                        <div className='w-3 h-3 bg-red-400 rounded-full'></div>
                    </div>
                    <div className='flex flex-col text-[0.70rem]'>
                        <span>Ananya Gupta failed a task</span>
                        <span className='text-gray-400'>8 hours ago</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentActivity
