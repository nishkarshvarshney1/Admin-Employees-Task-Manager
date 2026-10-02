import { CalendarRange, Plus, Search } from 'lucide-react';
import React from 'react'

const BottomTaskContent = ({setIsModalOpened}) => {
    return (
        <div className='p-px bg-linear-to-br from-(--purple) via-(--border-color) to-(--border-color) relative z-11 rounded-2xl'>
            <div className=' bg-(--dark-purple) rounded-2xl flex flex-col p-5 gap-4'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        <CalendarRange size={25} />
                        <div className='text-white'>
                            <h2 className='text-xl'>Tasks</h2>
                            <p className='text-sm text-(--light-pink)/50'>View, search and manage all tasks.</p>
                        </div>
                    </div>
                    <div>
                        <button onClick={()=>{
                            setIsModalOpened(true)
                        }}
                         className='flex gap-2 px-4 py-3 rounded-xl text-base bg-linear-to-r from-(--purple)/70 cursor-pointer transition hover:bg-(--purple) to-(--border-color)'><Plus />Create Task</button>
                    </div>
                </div>
                <div className='flex items-center gap-3 text-sm'>
                    <div className='relative w-[35%]'>
                    <input type="text" placeholder='Search tasks, description...' className='w-full border border-(--border-color) py-2 pr-3 pl-12 rounded-lg'/>
                    <Search size={18} className='absolute left-4 top-1/2 -translate-y-1/2' />
                    </div>
                    <div className='p-2 pl-4 border border-(--border-color) rounded-lg w-[15%] '>All Status</div>
                    <div className='p-2 pl-4 border border-(--border-color) rounded-lg w-[15%]'>All Proirity</div>
                    <div className='p-2 pl-4 border border-(--border-color) rounded-lg w-[20%]'>Due Date (Newest)</div>
                </div>
            </div>
        </div>
    )
}

export default BottomTaskContent
