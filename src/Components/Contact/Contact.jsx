import React, { useState } from 'react'
import {motion} from 'motion/react'
import Contactimg from '../../assets/Contactimg.jpg'
 import {toast} from 'react-toastify';

function Contact() {
  function handleSubmit() {
    let name = document.querySelector(".name");
    let age = document.querySelector(".age");
    let maleCheckbox = document.querySelector(".male-checkbox");
    let femaleCheckbox = document.querySelector(".female-checkbox");
    let message = document.querySelector(".message");
    if(name.value === "" || age.value === "" || message === "") {
      toast.error("Fill all the required fields");
    }else if(age.value < 1 || age.value > 70) {
      toast.error("Invalid age")
    }
    else if(maleCheckbox.checked && femaleCheckbox.checked) {
      toast.error("Select any one value under gender")
    }else{
      toast.success("Form submitted successfully!")
      name.value = "";
      age.value = "";
      message.value = "";
      maleCheckbox.checked = false;
      femaleCheckbox.checked = false;
    }

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
    className='md:flex items-center justify-between'>
        <div className='mt-20 md:px-40 md:w-auto w-[90vw] m-auto'>
            <div>
                <input className='border-2 border-black p-1 rounded-sm w-60 name' type="text" placeholder='Enter name'/>
                <input className='border-2 border-black p-1 rounded-sm w-60 md:ml-2 age md:mt-0 mt-5' type="number" min={1} max={70} placeholder='Enter age'/>
            </div>
            <div className='mt-6 mb-6'>
                <label className='' htmlFor="">Gender: </label>
                <input 
                className='border-2 ml-2 border-black p-1 rounded-sm male-checkbox' 
                type="radio"
                placeholder='Male'
                />
                <label className='text-black ml-2' htmlFor="gender">Male</label>
                <input 
                className='border-2 ml-4 border-black p-1 rounded-sm female-checkbox'
                type="radio"
                placeholder='Female' 
                />
                <label className='text-black ml-2' htmlFor="gender">Female</label>
            </div>
                <textarea className='border-2 border-black p-1 text-black rounded-sm message' placeholder='Tell us about yourself' cols={40} rows={6}></textarea>
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
                <img className='md:w-[500px] w-[95vw] m-auto rounded-md md:mt-32 mt-5 md:mr-36' src={Contactimg} alt="contact" />
            </div>
    </motion.div>
  )
}

export default Contact