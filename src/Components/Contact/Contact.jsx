import React from 'react'
import {motion} from 'motion/react'
import Contactimg from '../../assets/Contactimg.jpg'

function Contact() {
  function handleSubmit() {
    let name = document.querySelector(".name");
    let age = document.querySelector(".age");
  }
  return (
    <motion.div
    initial={{
      opacity: 0,
      y: 25
    }}
    animate={{
      y: 0,
      opacity: 1
    }}
    transition={{
      delay: 1,
      duration: 1
    }}
    className='flex items-center justify-between'>
        <div className='pt-32 pl-40 pr-40'>
            <div>
                <input className='border-2 border-black p-1 rounded-sm w-60 name' type="text" placeholder='Enter name'/>
                <input className='border-2 border-black p-1 rounded-sm w-60 ml-2 age' type="number" min={1} max={70} placeholder='Enter age'/>
            </div>
            <div className='mt-6 mb-6'>
                <label className='' htmlFor="">Gender: </label>
                <input className='border-2 ml-2 border-black p-1 rounded-sm' type="radio" placeholder='Male' />
                <label className='text-black ml-2' htmlFor="gender">Male</label>
                <input className='border-2 ml-4 border-black p-1 rounded-sm' type="radio" placeholder='Female' />
                <label className='text-black ml-2' htmlFor="gender">Female</label>
            </div>
                <textarea className='border-2 border-black p-1 text-black rounded-sm' placeholder='Tell us about yourself' cols={40} rows={6}></textarea>
                <div className="btn mt-4">
                    <motion.button
                    onClick={handleSubmit}
                    whileHover={{
                      scale: 1.15
                    }}
                    transition={{
                      duration: 0.8 
                    }}
                    className='cursor-pointer rounded-md border-2 border-black p-2 font-bold hover:bg-black hover:text-white'>Submit</motion.button>
                </div>
        </div>
            <div>
                <img className='w-[500px] rounded-md mt-32 mr-36' src={Contactimg} alt="contact" />
            </div>
    </motion.div>
  )
}

export default Contact