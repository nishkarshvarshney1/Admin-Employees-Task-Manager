import Hero from '../../../assets/image header.png'
import { CalendarDays, ChevronDown } from 'lucide-react'

const Header = ({ currentUser }) => {
    const storage = localStorage.getItem('loggedInUser') ? localStorage : sessionStorage
    const user = JSON.parse(storage.getItem('loggedInUser')).role
    return (
        <div className='flex justify-between py-3 items-center text-white bg-transparent relative z-11'>
            <div className='flex flex-col gap-1'>
                <h2 className='text-4xl'>Hello, {user === 'admin'
                    ? 'Nishkarsh'
                    : currentUser.name
                } 👋🏼
                </h2>
                <h6 className='text-sm tracking-wide text-gray-300'>Manage tasks, track progress and keep your team productive.</h6>
            </div>
            <div className='flex flex-col gap-6'>
                <button className='flex items-center gap-2 border border-(--border-color) cursor-pointer rounded-2xl w-fit py-1 px-3 bg-(--very-dark)'>
                    <div className='w-10 h-10 rounded-full bg-purple-400'></div>
                    <span>
                        {user === 'admin'
                            ? 'Nishkarsh'
                            : currentUser.name
                        }
                    </span>
                    <ChevronDown size={16} />
                </button>
                <div className='border border-(--border-color) rounded-lg p-3 bg-(--dark-purple)'>
                    <h6 className='text-xs flex items-center gap-2'><CalendarDays size={14} />Wed, Sep 23, 2026</h6>
                    <h6 className='text-lg'>11 : 14 PM</h6>
                    <h6 className='text-[0.65rem]'>"Small steps, big progress."</h6>
                </div>
            </div>
        </div>
    )
}

export default Header
