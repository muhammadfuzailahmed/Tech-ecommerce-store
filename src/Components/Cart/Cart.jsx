import React from 'react'
import Cartcard from '../Card/Cartcard'
// import check from '../../check'

function Cart({id, title, price, img}) {
  return (
     <>
      <h3>Title: {title}</h3>
      <div><img className='w-[20vw]' src={img} alt="" /></div>
      <h3>Price: {price}</h3>
     </>
  )
}

export default Cart