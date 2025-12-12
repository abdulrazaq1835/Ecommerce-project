import React, { useContext, useMemo } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { products, cartItems, currency, updateQuantity, } = useContext(ShopContext)

  const navigate =  useNavigate()
  const cartData = useMemo(() => {
    const tempData = []
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          })
        }
      }
    }
    return tempData
  }, [cartItems])

  // Total amount calculate karna
  const getCartAmount = () => {
    let totalAmount = 0
    for (const item of cartData) {
      const productInfo = products.find((product) => product._id === item._id)
      if (productInfo) {
        totalAmount += productInfo.price * item.quantity
      }
    }
    return totalAmount
  }

  return (
    <div className='border-t pt-14'>
      
      {/* Title */}
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      {/* Cart Items */}
      {cartData.length === 0 ? (
        <div className='text-center py-20'>
          <p className='text-xl text-gray-500'>Your cart is empty</p>
          <button 
            onClick={() => navigate('/collection')}
            className='bg-black text-white px-8 py-3 mt-5 text-sm hover:bg-gray-800'
          >
            CONTINUE SHOPPING
          </button>
        </div>
      ) : (
        <div>
          {cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id)
            
            if (!productData) return null

            return (
              <div 
                key={index} 
                className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'
              >
            
                <div className='flex items-start gap-6'>
                  <img 
                    className='w-16 sm:w-20' 
                    src={productData.image[0]} 
                    alt={productData.name} 
                  />
                  <div>
                    <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p className='text-sm sm:text-base'>{currency}{productData.price}</p>
                      <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                    </div>
                  </div>
                </div>

              
                <input 
                  onChange={(e) => {
                    const value = Number(e.target.value)
                    if (value === 0) {
                      updateQuantity(item._id, item.size, 0)
                    } else if (value > 0) {
                      updateQuantity(item._id, item.size, value)
                    }
                  }}
                  className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' 
                  type="number" 
                  min={1}
                  defaultValue={item.quantity} 
                />

            
                <RiDeleteBin6Line 
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  className='w-4 mr-4 sm:w-5 cursor-pointer hover:text-red-500' 
                />
              </div>
            )
          })}

                  <div className='flex justify-end my-20'>
            <div className='w-full sm:w-[450px]'>
              <div className='text-2xl'>
                <Title text1={'CART'} text2={'TOTALS'} />
              </div>

              <div className='flex flex-col gap-2 mt-2 text-sm'>
       
                <div className='flex justify-between'>
                  <p>Subtotal</p>
                  <p>{currency} {getCartAmount()}.00</p>
                </div>
                <hr />

             
                <div className='flex justify-between'>
                  <p>Shipping Fee</p>
                  <p>{currency} {getCartAmount() === 0 ? 0 : 50}.00</p>
                </div>
                <hr />

                {/* Total */}
                <div className='flex justify-between font-bold text-lg'>
                  <p>Total</p>
                  <p>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + 50}.00</p>
                </div>
              </div>

        
              <div className='w-full text-end mt-8'>
                <button 
                  onClick={() => navigate('/place-order')}
                  className='bg-black text-white text-sm my-8 px-8 py-3 hover:bg-gray-800'
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart