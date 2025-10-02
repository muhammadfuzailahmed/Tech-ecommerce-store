import React from 'react'
import {motion} from 'motion/react'
import Professionalcollection from '../Data/Professionalcollection'
import Row from '../Row/Row';
import Productcard from '../Card/Professionalproductcard';

function Product() {
    const ProfessionalCollectionFirstFour = Professionalcollection.slice(0,4);
    const ProfessionalCollectionLastFour = Professionalcollection.slice(4,8);
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
    className='md:pt-0 pt-20'>
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
      className=''>
        <Row item={ProfessionalCollectionLastFour.map((item) => (
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
      </motion.div>
      </>
  )
}

export default Product