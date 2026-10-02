import React, { useContext } from 'react'
import { AuthContext } from '../../../../context/AuthProvider';

const TaskStatus = ({ totals }) => {
    const { employees } = useContext(AuthContext)
    const total = employees.reduce((total, e) => {
        const employeeData = Object.values(e)[0]
        return total + (employeeData.newTask + employeeData.active + employeeData.completed + employeeData.failed)
    }, 0)
    const newTaskP = totals.newTask / total * 100
    const activeP = (totals.active / total * 100) + newTaskP
    const completedP = (totals.completed / total * 100) + activeP
    return (
        <div className='p-px rounded-2xl bg-linear-to-br from-(--purple) via-(--border-color) to-(--border-color)'>
            <div className='text-xs flex flex-col gap-3 p-5 bg-(--dark-purple) rounded-2xl'>
                <h2 className='text-base'>Task Status</h2>
                <div className='flex items-center justify-between'>
                    <div className='h-30 w-30 rounded-full flex items-center justify-center' style={{background: `conic-gradient(
                                blue 0% ${newTaskP}%,
                                yellow ${newTaskP}% ${activeP}%,
                                green ${activeP}% ${completedP}%,
                                red ${completedP}% 100%
                    )`}}>
                        <div className='w-[65%] h-[65%] bg-(--dark-purple) rounded-full flex justify-center items-center flex-col'>
                            <h1 className='text-xl'>
                                {total}
                            </h1>
                            <h2 className='text-[0.65rem]'>Total</h2>
                        </div>
                    </div>
                    <div className='flex flex-col w-[46%] gap-2'>
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <div className='w-3 h-3 rounded-sm bg-blue-400'></div>
                                <span>New</span>
                            </div>
                            <h5>{totals.newTask}</h5>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <div className='w-3 h-3 rounded-sm bg-yellow-400'></div>
                                <span>Active</span>
                            </div>
                            <h5>{totals.active}</h5>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <div className='w-3 h-3 rounded-sm bg-green-400'></div>
                                <span>Completed</span>
                            </div>
                            <h5>{totals.completed}</h5>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <div className='w-3 h-3 rounded-sm bg-red-400'></div>
                                <span>Failed</span>
                            </div>
                            <h5>{totals.failed}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskStatus
