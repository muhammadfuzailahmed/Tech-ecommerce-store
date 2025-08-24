import React from 'react'
import { useParams } from 'react-router-dom'
import Gamingcollection from '../Data/Gamingcollection';

function Gamingproductid() {
    let {productId} = useParams();
    let id = Number(productId);
    let product = Gamingcollection.find(p => p.id === id);
    if(!product) return <h1>No product found</h1>
  return (
    <div>Product id: {product.title}</div>
  )
}

export default Gamingproductid