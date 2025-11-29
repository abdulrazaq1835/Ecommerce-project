import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'


const BestSeller = () => {
    const {products} = useContext(ShopContext)
    // console.log(products)
   const [bestSeller,setBestSeller] = useState([])



useEffect(()=>{
 const bestProduct = products.filter((item)=>(item.bestseller))
    console.log(bestProduct)
    setBestSeller(bestProduct.slice(0,5))
},[products])
   
   
  return (
    
   <div>
     <h1>bestProduct</h1>

    {
        bestSeller.map((item,index)=>(
            
            <ProductItem key={index} id={item.id} name={item.name} image={item.image}/>
        
        ))
    }
   </div>

    
  )
}

export default BestSeller
