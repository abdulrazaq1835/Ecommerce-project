import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

const LatestCollection = ({text1,text2}) => {

  const {products}  = useContext(ShopContext)

  return (
    <div  className='my-10'>
   <div className='text-center py-8 text-3`xl '>
     <Title text1={'LATEST'} text2={'COLLECTIONS'} />

   </div>
    </div>
  )
}

export default LatestCollection
