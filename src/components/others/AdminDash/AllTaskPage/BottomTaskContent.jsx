import { CalendarRange, Plus, Search } from 'lucide-react';
import React from 'react'
import TaskDiv from './table/TaskDiv';

const BottomTaskContent = ({ setIsModalOpened }) => {
    return (
        <div className='p-px bg-linear-to-br from-(--purple) via-(--border-color) to-(--border-color) mb-5 relative z-11 rounded-2xl'>
            <div className=' bg-(--dark-purple) rounded-2xl flex flex-col p-5 gap-4 text-sm'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        <CalendarRange size={25} />
                        <div className='text-white'>
                            <h2 className='text-xl'>Tasks</h2>
                            <p className='text-sm text-(--light-pink)/50'>View, search and manage all tasks.</p>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => {
                            setIsModalOpened(true)
                        }}
                            className='flex gap-2 px-4 py-3 rounded-xl text-base bg-linear-to-r from-(--purple)/70 cursor-pointer transition hover:bg-(--purple) to-(--border-color)'><Plus />Create Task</button>
                    </div>
                </div>
                <div className='flex items-center gap-3 text-sm'>
                    <div className='relative w-[35%]'>
                        <input type="text" placeholder='Search tasks, description...' className='w-full border border-(--border-color) py-2 pr-3 pl-12 rounded-lg' />
                        <Search size={18} className='absolute left-4 top-1/2 -translate-y-1/2' />
                    </div>
                    <div className='p-2 pl-4 border border-(--border-color) rounded-lg w-[15%] '>All Status</div>
                    <div className='p-2 pl-4 border border-(--border-color) rounded-lg w-[15%]'>All Proirity</div>
                    <div className='p-2 pl-4 border border-(--border-color) rounded-lg w-[20%]'>Due Date (Newest)</div>
                </div>
                <div>
                <div className='grid grid-cols-[2fr_1.3fr_1fr_1fr_1fr_0.7fr] items-center '>
                    <h4>Tasks</h4>
                    <h4>Assigned to</h4>
                    <h4>Due date</h4>
                    <h4>Priority</h4>
                    <h4>Status</h4>
                    <h4>Actions</h4>
                </div>
                <TaskDiv />
                <TaskDiv />
                <TaskDiv />
                <TaskDiv />
                <TaskDiv />
                <TaskDiv />
                <TaskDiv />
                <TaskDiv />
                <TaskDiv />
                <TaskDiv />
                <TaskDiv />
                </div>
            </div>
        </div>
    )
}

export default BottomTaskContent
