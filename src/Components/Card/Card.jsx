import React from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'motion/react'

function Card({id, img, title, description, price}) {
  return (
    <motion.div 
    initial={{
        opacity: 0,
        y:25
    }}
    animate={{
        opacity: 1,
        y: 0
    }}
    whileHover={{
        y: -10,
        scale: 1.04
    }}
    transition={{
        duration: 0.5
    }}
    className='ml-4 border-[3px] border-orange-700 rounded-lg w-[250px]'>
        <Link to={`/gamingaccessories/${id}`}>
        <img className='w-[100%] rounded-lg mb-3' src={img} alt="src" />
        <div className='pl-2 pr-2'>
        <h2 className='mb-4 font-[700] capitalize'>{title}</h2>
        <p className='mb-4'>{description}</p>
        <h3 className='mb-4 font-[700]'>Rs. {price}</h3>
        </div>
        </Link>
    </motion.div>
  )
}

export default Card