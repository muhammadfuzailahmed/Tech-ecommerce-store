import React from 'react'
import {motion} from 'motion/react'
import Row from '../Row/Row'
import Card from '../Card/Card'
import Gamingcollection from '../Data/Gamingcollection.jsx'
import Newcollection from '../Data/Newcollection.jsx'
import Professionalcollection from '../Data/Professionalcollection.jsx'
import Productcard from '../Card/Professionalproductcard.jsx'

function Home() {
  let GamingCollectionFirstFour = Gamingcollection.slice(0,4);
  let ProfessionalCollectionFirstFour = Professionalcollection.slice(0,4);
  return (
    <>
    <div className='md:flex items-center justify-between md:px-34 md:pb-16 md:mt-36 mt-28'>
      <motion.div
      initial={{
        opacity: 0,
        x: -55
      }}
      animate={{
        opacity: 1,
        x: 0
      }}
      transition={{
        delay: 1.3,
        duration: 1
      }}
      >
        <p className='font-bold text-2xl uppercase md:w-auto w-[90vw] m-auto'>New arrivals only!</p>
        <h1 className='mt-4 md:text-6xl text-5xl font-bold md:w-[30vw] w-[90vw] m-auto mb-4 capitalize'>New collection for every one</h1>
        <div className='md:w-auto w-[90vw] m-auto mb-5'>
        <motion.button 
        whileHover={{
          scale: 1.05,
        }}
        transition={{
          duration: 0.4
        }}
        className='capitalize p-3 border-2 border-orange-700 rounded-lg font-bold cursor-pointer text-orange-700'>Latest collection</motion.button>
        </div>
      </motion.div>
      <motion.div
      initial={{
        opacity: 0,
        x: 55
      }}
      animate={{
        opacity: 1,
        x: 0
      }}
      transition={{
        delay: 1.3,
        duration: 1
      }}
      >
        <img className='md:w-[30vw] w-[90vw] m-auto rounded-md' src="https://cdn.pixabay.com/photo/2019/07/14/16/27/pen-4337521_1280.jpg" alt="" />
      </motion.div>    
    </div>

      <motion.h1
      initial={{
        opacity: 0,
        y: 15
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        delay: 1.5,
        duration: 1
      }}
      className='text-center mt-20 font-bold text-4xl capitalize'>Popular in gaming</motion.h1>
      <div className='flex justify-center mt-1'>
      <motion.hr
      initial={{
        opacity: 0,
        y: 20
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        delay: 1.7,
        duration: 1
      }}
      className='border-3 rounded-lg border-orange-700 w-[25vw]'/>
      </div>

      <div className=''>
        <Row item={GamingCollectionFirstFour.map((item) => (
          <Card 
          key={item.id}
          id={item.id}
          img={item.img}
          title={item.title}
          description={item.description}
          price={item.price}
          />
        ))
        } />
      </div>
        {/* New Collection */}
      <div>
        <h1 className='text-center mt-20 font-bold text-4xl capitalize'>New Collection</h1>  
        <div className='flex justify-center mt-1'>
        <hr className='border-3 rounded-lg border-orange-700 w-[20vw]'/>      
        </div>

      <div className=''>
        <Row item={ProfessionalCollectionFirstFour.map((item) => (
          <Productcard 
          key={item.id}
          id={item.id}
          img={item.img}
          title={item.title}
          description={item.description}
          price={item.price}
          />
        ))
        } />
      </div>

      </div>
    </>
  )
}

export default Home