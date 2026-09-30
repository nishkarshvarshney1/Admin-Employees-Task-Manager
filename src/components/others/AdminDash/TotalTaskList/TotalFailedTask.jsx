import React, { useContext } from 'react'
import { ArrowDown, CalendarRange, X } from 'lucide-react'
import { AuthContext } from '../../../../context/AuthProvider';

const TotalFailedTask = () => {
    const {employees} = useContext(AuthContext)
    const totalFailedTask = employees.reduce((total, e)=>{
        const data = Object.values(e)[0]
        return total + data.failed
    }, 0)
    return (
        <div className='p-px rounded-2xl w-[24%] backdrop-blur-xs bg-linear-to-bl from-(--red) via-(--border-color) to-(--red)'>
            <div className='flex  items-center bg-linear-to-r from-(--red)/50 to-(--dark-purple) justify-between py-3.5 px-5 rounded-2xl'>
                <div className='p-1 bg-red-400 rounded-sm'>
                    <X size={20} strokeWidth={3} />
                </div>
                <div>
                    <h2 className='text-xl'>{totalFailedTask}</h2>
                    <h4 className='text-[0.65rem]'>Failed</h4>
                </div>
                <div className='text-[0.65rem] text-red-400 flex items-center '>
                    -5%
                    <ArrowDown size={12} />
                </div>
            </div>
        </div>
    )
}

export default TotalFailedTask
