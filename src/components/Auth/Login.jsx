import React, { useState } from 'react'
import Hero from '../../assets/img.jpg'
import { Eye, EyeClosed, ShieldUser } from 'lucide-react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [rememberMe, setRememberMe] = useState(false)
    const mouseEffect = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        e.currentTarget.style.setProperty('--x', `${x}px`)
        e.currentTarget.style.setProperty('--y', `${y}px`)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password, rememberMe)
    }
    return (
        <div className="flex justify-center items-center h-screen w-screen text-white"
            style={{ background: `url(${Hero}) center/cover no-repeat` }}>
            <form onSubmit={(e) => {
                submitHandler(e)
            }}
                className='flex flex-col h-100 w-100 rounded-lg items-center bg-white/5 backdrop-blur-xl border border-white/20'>
                <h1 className='text-4xl font-bold my-10 tracking-tight'>Login</h1>
                <div className='w-[75%] relative'>
                <input onChange={(e) => {
                    setEmail(e.target.value)
                }}
                    value={email}
                    required type="email" placeholder='Enter your email' className='w-full pl-4 pr-11 py-2 focus:outline-none border border-purple-400 text-xs rounded-full mb-6' />
                    <span className='absolute right-2 p-2'><ShieldUser size={16} /></span>
                </div>
                <div className='relative w-[75%]'>
                    <input onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                        value={password}
                        required type={showPassword ? 'text' : 'password'} placeholder='Enter password' className='pl-4 pr-11 py-2  w-full focus:outline-none border border-purple-400 text-xs rounded-full' />
                    <button onClick={()=>{
                        setShowPassword(!showPassword)
                    }}
                     type='button' className='absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer hover:scale-115 active:scale-50 transition rounded-full p-2'>{showPassword ? <Eye size={16} /> : <EyeClosed size={16} />}</button>
                </div>
                <div className='flex justify-between w-[70%] text-xs my-4'>
                    <div className='flex gap-2'>
                        <input onChange={(e)=>{
                            setRememberMe(e.target.checked)
                        }}
                        checked={rememberMe}
                         type="checkbox" className='accent-purple-400 cursor-pointer'/>
                        <h3>Remember me </h3>
                    </div>
                    <a href='#' className='font-bold'>Forget Password?</a>
                </div>
                <button onMouseMove={(e) => {
                    mouseEffect(e);
                }}
                    className='w-[75%] yo overflow-hidden rounded-full bg-gray-200 text-xs text-black px-4 py-2 active:scale-95 cursor-pointer relative group transition'>
                    <span className='h-40 w-40 z-0 rounded-full absolute left-(--x) top-(--y) -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-400 transition duration-700 bg-purple-300 '></span>
                    <span className='relative z-10 group-hover:text-purple-900 transition duration-500'>Login</span>
                </button>
                <h3 className='text-xs mt-5'>Don't have an account? <a className='font-bold' href="#">Register</a></h3>
            </form>
        </div>
    )
}

export default Login
