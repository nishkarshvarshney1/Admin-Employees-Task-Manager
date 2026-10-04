import { CalendarRange, ChevronLeft, ChevronRight, MoveVertical, Plus, Search } from 'lucide-react';
import React, { useContext } from 'react'
import TaskDiv from './table/TaskDiv';
import { AuthContext } from '../../../../context/AuthProvider';
import { data } from 'react-router-dom';

const BottomTaskContent = ({ setIsModalOpened }) => {
    const { employees } = useContext(AuthContext)
    return (
        <div className='p-px bg-linear-to-br from-(--purple) via-(--border-color) to-(--border-color) mb-5 relative z-11 rounded-2xl flex-1'>
            {/* <div className=' bg-(--dark-purple) rounded-2xl flex-col p-5 gap-4 text-sm h-full hidden'>
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
                <div className=' border border-(--border-color) rounded-2xl '>
                    <div className='grid grid-cols-[2fr_1.3fr_1fr_1fr_1fr_0.7fr] items-center py-3 bg-(--border-color) px-4 rounded-t-2xl'>
                        <h4 className='flex items-center gap-2'>Tasks <MoveVertical size={14} stroke='#8286B8' /></h4>
                        <h4 className='flex items-center gap-2'>Assigned to <MoveVertical size={14} stroke='#8286B8' /></h4>
                        <h4 className='flex items-center gap-2'>Due date <MoveVertical size={14} stroke='#8286B8' /></h4>
                        <h4 className='flex items-center gap-2'>Priority <MoveVertical size={14} stroke='#8286B8' /></h4>
                        <h4 className='flex items-center gap-2'>Status <MoveVertical size={14} stroke='#8286B8' /></h4>
                        <h4 className='flex items-center gap-2'>Actions</h4>
                    </div>
                    <div className='divide-y divide-(--border-color) overflow-auto'>
                        {employees.map((e)=>{
                            const data = Object.values(e)[0]
                            return (
                                <>
                                {data.tasks.filter((e)=>e.newTask).map(()=> <TaskDiv />)}
                                {data.tasks.filter((e)=>e.active).map(()=> <TaskDiv />)}
                                {data.tasks.filter((e)=>e.completed).map(()=> <TaskDiv />)}
                                {data.tasks.filter((e)=>e.failed).map(()=> <TaskDiv />)}
                                </>
                            )
                        })}
                    </div>
                </div>
                <footer className='flex items-center justify-between flex-1'>
                    <span className='text-(--light-pink)/75 text-sm'>Showing 1-6 of 54 tasks</span>
                    <div className='flex gap-2 text-xs'>
                        <button className='h-7 w-7 border border-(--border-color) rounded-lg bg-(--border-color)/80 flex justify-center items-center cursor-pointer'><ChevronLeft size={18} /></button>
                        <button className='h-7 w-7 border border-(--border-color) rounded-lg bg-(--border-color)/80 cursor-pointer'>1</button>
                        <button className='h-7 w-7 border border-(--border-color) rounded-lg bg-(--border-color)/80 cursor-pointer'>2</button>
                        <button className='h-7 w-7 border border-(--border-color) rounded-lg bg-(--border-color)/80 cursor-pointer'>3</button>
                        <button className='h-7 w-7 border border-(--border-color) rounded-lg bg-(--border-color)/80 cursor-pointer'>4</button>
                        <button className='h-7 w-7 border border-(--border-color) rounded-lg bg-(--border-color)/80 cursor-pointer'>5</button>
                        <button className='h-7 w-7 border border-(--border-color) rounded-lg bg-(--border-color)/80 cursor-pointer'>6</button>
                        <button className='h-7 w-7 border border-(--border-color) rounded-lg bg-(--border-color)/80 cursor-pointer'>7</button>
                        <button className='h-7 w-7 border border-(--border-color) rounded-lg bg-(--border-color)/80 flex justify-center items-center cursor-pointer'><ChevronRight size={18} /></button>
                    </div>
                </footer>
            </div> */}
        </div>
    )
}

export default BottomTaskContent
