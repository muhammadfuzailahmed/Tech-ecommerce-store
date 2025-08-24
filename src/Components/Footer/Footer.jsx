import React from 'react'
import { NavLink } from 'react-router-dom'
import {motion} from 'motion/react'

function Footer() {
  return (
    <motion.div
    initial={{
        opacity: 0,
        y: 35
    }}
    animate={{
        opacity: 1,
        y: 0
    }}
    transition={{
        delay: 0.8,
        duration: 1
    }}
    className='pl-34 pr-34 mt-20'>
        <hr className='border-2 border-orange-700 mb-6'/>
        <div className='flex items-center justify-around'>
            <div className="logo">
                <h1 className='font-mono text-4xl font-bold'>Techify</h1>
            </div>
            <div>
                <ul>
                    <li><NavLink to="/" className={({isActive}) => `list-none font-[700] uppercase cursor-pointer transition-all hover:text-orange-700 ${isActive ? "text-orange-700" : "text-black"}`}>Home</NavLink></li>
                    <li><NavLink to="/gamingaccessories" className={({isActive}) => `list-none font-[700] uppercase cursor-pointer transition-all hover:text-orange-700 ${isActive ? "text-orange-700" : "text-black"}`}>Gaming</NavLink></li>
                    <li><NavLink to="/professionalaccessories" className={({isActive}) => `list-none font-[700] uppercase cursor-pointer transition-all hover:text-orange-700 ${isActive ? "text-orange-700" : "text-black"}`}>Professional</NavLink></li>
                    <li><NavLink to="/about" className={({isActive}) => `list-none uppercase cursor-pointer font-[700] transition-all hover:text-orange-700 ${isActive ? "text-orange-700" : "text-black"}`}>About</NavLink></li>
                    <li><NavLink to="/contact" className={({isActive}) => `list-none uppercase cursor-pointer font-[700] transition-all hover:text-orange-700 ${isActive ? "text-orange-700" : "text-black"}`}>Contact</NavLink></li>
                </ul>
            </div>
            <div>
                <p className=' uppercase cursor-pointer transition-all hover:text-orange-700'>infous12@gmail.com</p>
                <p className=' uppercase cursor-pointer transition-all hover:text-orange-700'>021-34256778</p>
            </div>
        </div>
        <div className='text-center mt-4 pb-1.5 font-bold'>Techify 2025 &#169; | All Rights Reserved</div>
    </motion.div>
  )
}

export default Footer