import React, { useContext } from 'react'
import { ArrowUp, CalendarRange, Play } from 'lucide-react'
import { AuthContext } from '../../../../context/AuthProvider';

const TotalActiveTask = () => {
    const {employees} = useContext(AuthContext)
    console.log(employees)
    const totalActiveTask = employees.reduce((total, e)=>{
        const data = Object.values(e)[0]
        return total + data.active
    }, 0)
    return (
        <div className='p-px rounded-2xl w-[24%] backdrop-blur-xs bg-linear-to-bl from-(--yellow) via-(--border-color) to-(--yellow)'>
            <div className='flex  bg-linear-to-r from-(--yellow)/50 to-(--dark-purple) items-center justify-between  py-3.5 px-5 rounded-2xl'>
                <div className='p-2 text-(--dark-purple) bg-yellow-400 rounded-full'>
                    <Play size={15} strokeWidth={3} />
                </div>
                <div>
                    <h2 className='text-xl'>{totalActiveTask}</h2>
                    <h4 className='text-[0.65rem]'>Active</h4>
                </div>
                <div className='text-[0.65rem] text-yellow-400 flex items-center'>
                    +8%
                    <ArrowUp size={12} />
                </div>
            </div>
        </div>
    )
}

export default TotalActiveTask
