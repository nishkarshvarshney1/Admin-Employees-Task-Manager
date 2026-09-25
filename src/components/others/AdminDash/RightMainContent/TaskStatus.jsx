import React from 'react'

const TaskStatus = () => {
    return (
        <div className='text-xs flex flex-col gap-3 p-5 bg-(--dark-purple) rounded-lg border border-(--border-color)'>
            <h2 className='text-base'>Task Status</h2>
            <div className='flex items-center justify-between'>
                <div id='pie-chart' className='h-30 w-30 rounded-full flex items-center justify-center'>
                    <div className='w-[65%] h-[65%] bg-(--dark-purple) rounded-full flex justify-center items-center flex-col'>
                        <h1 className='text-xl'>24</h1>
                        <h2 className='text-[0.65rem]'>Total</h2>
                    </div>
                </div>
                <div className='flex flex-col w-[46%] gap-2'>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-2'>
                            <div className='w-3 h-3 rounded-sm bg-blue-600'></div>
                            <span>New</span>
                        </div>
                        <h5>6</h5>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-2'>
                            <div className='w-3 h-3 rounded-sm bg-yellow-600'></div>
                            <span>Active</span>
                        </div>
                        <h5>6</h5>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-2'>
                            <div className='w-3 h-3 rounded-sm bg-green-600'></div>
                            <span>Completed</span>
                        </div>
                        <h5>6</h5>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-2'>
                            <div className='w-3 h-3 rounded-sm bg-red-600'></div>
                            <span>Failed</span>
                        </div>
                        <h5>6</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskStatus
