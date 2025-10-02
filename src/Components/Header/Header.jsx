import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {motion} from 'motion/react'

function Header() {
  return (
    <>
    <motion.div 
    initial={{
        opacity: 0,
        y: -25
    }}
    animate = {{
        opacity: 1,
        y: 0
    }}
    transition={{
        duration: 1,
        delay: 0.5
    }}
    className='flex items-center justify-between pl-34 pr-34 pt-4 pb-4'>
        <div className="logo">
            <h1 className='font-bold text-4xl font-mono md:relative absolute left-5 md:top-auto md:left-auto top-[15px]'>Techify</h1>
        </div>
        <div>
            <ul className='flex items-center gap-3.5 md:relative absolute md:top-0 left-0 top-18'>
                <li><NavLink to="/" className={({isActive}) => `list-none font-[700] uppercase cursor-pointer transition-all hover:text-orange-700 ${isActive ? "text-orange-700" : "text-black"}`}>Home</NavLink></li>
                <li><NavLink to="/gamingaccessories" className={({isActive}) => `list-none font-[700] uppercase cursor-pointer transition-all hover:text-orange-700 ${isActive ? "text-orange-700" : "text-black"}`}>Gaming</NavLink></li>
                <li><NavLink to="/professionalaccessories" className={({isActive}) => `list-none font-[700] uppercase cursor-pointer transition-all hover:text-orange-700 ${isActive ? "text-orange-700" : "text-black"}`}>Professional</NavLink></li>
                <li><NavLink to="/about" className={({isActive}) => `list-none uppercase cursor-pointer font-[700] transition-all hover:text-orange-700 ${isActive ? "text-orange-700" : "text-black"}`}>About</NavLink></li>
                <li><NavLink to="/contact" className={({isActive}) => `list-none uppercase cursor-pointer font-[700] transition-all hover:text-orange-700 ${isActive ? "text-orange-700" : "text-black"}`}>Contact</NavLink></li>
            </ul>
        </div>
        <div>
            <Link to="/cart">
            <button className='md:relative absolute right-5 md:top-auto md:right-auto top-[15px] p-2 font-bold border-2 border-orange-700 rounded-lg fony-bold cursor-pointer transition-all hover:text-orange-700'>
                Cart
            </button>
            </Link>
        </div>
    </motion.div>
    </>
  )
}

export default Header