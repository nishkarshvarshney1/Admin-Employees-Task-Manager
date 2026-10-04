import { ArrowBigDown, ArrowDown, CalendarRange, ChevronDown, ChevronLeft, ChevronRight, MoveVertical, Plus, Search } from 'lucide-react';
import React, { useContext } from 'react'
import TaskDiv from './table/TaskDiv';
import { AuthContext } from '../../../../context/AuthProvider';

const BottomTaskContent = ({ setIsModalOpened }) => {
    const { employees } = useContext(AuthContext)
    return (
        <div className='p-px bg-linear-to-br from-(--purple) via-(--border-color) to-(--border-color) mb-5 relative z-11 rounded-2xl flex-1 min-h-0'>
            <div className=' bg-(--dark-purple) rounded-2xl flex-col p-5 gap-4 text-sm h-full text-(--light-pink) flex'>
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
                    <div className='w-[15%] relative'>
                        <select className='p-2 pl-4 border border-(--border-color) rounded-lg appearance-none w-full'>
                            <option value='none'>All Status</option>
                            <option value="newTask">New Task</option>
                            <option value="active">Active</option>
                            <option value="completed">Completed</option>
                            <option value="failed">Failed</option>
                        </select>
                        <ChevronDown size={15} className='absolute right-3 top-1/2 -translate-y-1/2' />
                    </div>
                    <div className='w-[15%] relative'>
                        <select className='p-2 pl-4 border border-(--border-color) rounded-lg  appearance-none w-full'>
                            <option value="none">All Proirity</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                            <option value="very high">Very High</option>
                        </select>
                        <ChevronDown size={15} className='absolute right-3 top-1/2 -translate-y-1/2' />
                    </div>
                    <div className='p-2 pl-4 border border-(--border-color) rounded-lg w-[20%]'>Due Date (Newest)</div>
                </div>
                <div className=' border border-(--border-color) rounded-2xl flex-1 min-h-0 overflow-hidden flex flex-col'>
                    <div className='grid grid-cols-[2fr_1.3fr_1fr_1fr_1fr_0.7fr] items-center py-3 bg-(--border-color) px-4 rounded-t-2xl'>
                        <h4 className='flex items-center gap-2'>Tasks <MoveVertical size={14} stroke='#8286B8' /></h4>
                        <h4 className='flex items-center gap-2'>Assigned to <MoveVertical size={14} stroke='#8286B8' /></h4>
                        <h4 className='flex items-center gap-2'>Due date <MoveVertical size={14} stroke='#8286B8' /></h4>
                        <h4 className='flex items-center gap-2'>Priority <MoveVertical size={14} stroke='#8286B8' /></h4>
                        <h4 className='flex items-center gap-2'>Status <MoveVertical size={14} stroke='#8286B8' /></h4>
                        <h4 className='flex items-center gap-2 justify-self-center'>Actions</h4>
                    </div>
                    <div className='divide-y divide-(--border-color) flex-1 min-h-0 overflow-y-auto'>
                        {employees.map((e) => {
                            const data = Object.values(e)[0]
                            return (
                                <>
                                    {data.tasks.filter((e) => e.newTask).map((tasks, idx) => <TaskDiv key={idx} tasks={tasks} data={data} />)}
                                    {data.tasks.filter((e) => e.active).map((tasks, idx) => <TaskDiv key={idx} tasks={tasks} data={data} />)}
                                    {data.tasks.filter((e) => e.completed).map((tasks, idx) => <TaskDiv key={idx} tasks={tasks} data={data} />)}
                                    {data.tasks.filter((e) => e.failed).map((tasks, idx) => <TaskDiv key={idx} tasks={tasks} data={data} />)}
                                </>
                            )
                        })}
                    </div>
                </div>
                <footer className='flex justify-center'>
                    <span className='text-(--light-pink)/75 text-xs flex items-center gap-1'>Scroll <ArrowBigDown size={14} /> to see all tasks</span>
                </footer>
            </div>
        </div>
    )
}

export default BottomTaskContent
