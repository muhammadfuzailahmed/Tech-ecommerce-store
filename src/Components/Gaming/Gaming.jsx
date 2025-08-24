import React from 'react'
import Gamingcollection from '../Data/Gamingcollection.jsx'
import Row from '../Row/Row.jsx'
import Card from '../Card/Card.jsx'
import {motion} from 'motion/react'

function Gaming() {
  let GamingCollectionFirstFour = Gamingcollection.slice(0,4);
  let GamingCollectionLastFour = Gamingcollection.slice(4,8);
  return (
    <>
    <motion.div
    initial={{
      opacity: 0,
      y: 35
    }}
    animate={{
      opacity: 1,
      y:0
    }}
    transition={{
      delay: 1,
      duration: 1
    }}
    className='w-[80%] m-auto'>
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
      </motion.div>

      <motion.div
      initial={{
      opacity: 0,
      y: 35
    }}
    animate={{
      opacity: 1,
      y:0
    }}
    transition={{
      delay: 1.5,
      duration: 1
    }}
      className='w-[80%] m-auto'>
        <Row item={GamingCollectionLastFour.map((item) => (
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
      </motion.div>
      </>
  )
}

export default Gaming