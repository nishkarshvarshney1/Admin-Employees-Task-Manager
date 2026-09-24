import React from 'react'
import Hero from '../../../assets/image header.png'

const HeaderBg = () => {
  return (
    <div className="absolute top-0 left-0 w-full -z-1 -translate-y-40 h-fit img-transition">
        <img src={Hero} alt="" />
        <div className='absolute top-0 left-0 h-full w-full' style={{background: 'linear-gradient(to bottom, transparent 50%, #0D0936)'}}></div>
    </div>
  )
}

export default HeaderBg