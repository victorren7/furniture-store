import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

import { database } from '../../utils/database';


const Product = () => {
  const {productName} = useParams()

  const [product, setProduct] = useState({})

  useEffect(() => {
    for (let i = 0; i < database.length; i++) {
      const element = database[i];

      if (element.name === productName) {
       setProduct(element)
      }
      
    }
  }, [productName])
  
console.log('product', product)
  
  
  return (
    <div>Product</div>
  )
}

export default Product