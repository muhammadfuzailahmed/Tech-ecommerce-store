import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import Professionalcollection from '../Data/Professionalcollection';
import {motion} from 'motion/react'
import { toast } from 'react-toastify';

function Professionalproductid() {
      const AddToCart = () => {
        toast.success("Added to cart successfully!")
      }
      let Decreade = () => {
        if(counter > 1){
          setCounter(counter - 1)
        }
      }
      let Increase = () => {
        setCounter(counter + 1)
      }
      const [counter, setCounter] = useState(1)
    let {newproductId} = useParams();
    let id = Number(newproductId);
    let product = Professionalcollection.find(p => p.id === id);
    if(!product) return <h2>Element not found</h2>
  return (
     <motion.div 
    initial={{
      y: 20,
      opacity: 0
    }}
    animate={{
      y:0,
      opacity: 1
    }}
    transition={{
      delay: 0.5,
      duration: 0.8
    }}
    className='flex justify-center pl-52 pr-52 mt-20 mb-20'>
      <div>
        <motion.img whileHover={{scale: 1.2}} transition={{duration: 0.5}} className='w-[15vw] cursor-pointer p-1.5 rounded-lg border-3 border-orange-700' src={product.img} alt="" />
      </div>
      <div className='ml-20'>
        <h3 className='font-bold text-2xl capitalize'>{product.title}</h3>
        <p className='mt-3'>{product.description}</p>
        <p className='font-bold text-[22px] mt-3'>Rs. {product.price}</p>
        <p className='mt-3'><button
        onClick={Decreade}
        className='border-2 cursor-pointer border-black w-[20px] h-[30px] font-bold'>-</button><span className='w-[20px] ml-0.5 mr-0.5 h-[30px] font-bold'>{counter}</span><button 
        onClick={Increase}
        className='border-2 border-black cursor-pointer w-[20px] h-[30px] font-bold'>+</button></p>
        <motion.button 
        onClick={AddToCart}
        whileHover={{
          scale: 1.05
        }}
        transition={{
          duration: 0.3
        }}
        className='p-2 border-3 border-orange-700 rounded-lg mt-4 capitalize text-orange-700 cursor-pointer font-bold hover:bg-orange-700 hover:text-white '>Add to cart</motion.button>
      </div>
    </motion.div>
  )
}

export default Professionalproductid