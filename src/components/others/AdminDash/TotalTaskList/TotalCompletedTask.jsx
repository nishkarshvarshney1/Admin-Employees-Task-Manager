
import { ArrowUp, Check } from 'lucide-react'

const TotalCompletedTask = ({completed}) => {
    return (
        <div className='p-px rounded-2xl w-[24%] backdrop-blur-xs bg-linear-to-bl from-(--green) via-(--border-color) to-(--green)'>
            <div className='flex  items-center justify-between bg-linear-to-r from-(--green)/50 to-(--dark-purple) py-3.5 px-5 rounded-2xl '>
                <div className='p-1 bg-green-400 rounded-full text-(--dark-purple)'>
                    <Check size={20} strokeWidth={3} />
                </div>
                <div>
                    <h2 className='text-xl'>{completed}</h2>
                    <h4 className='text-[0.65rem]'>Completed</h4>
                </div>
                <div className='text-[0.65rem] text-green-400 flex items-center'>
                    +20%
                    <ArrowUp size={12} />
                </div>
            </div>
        </div>
    )
}

export default TotalCompletedTask
