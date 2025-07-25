import React, { useContext, useEffect, useState } from 'react'
import { shopContext } from '../context/ShopContext'
import Title from "../components/Title"
import bin from "../assets/bin.webp"
import CartTotal from '../components/CartTotal'
const Cart = () => {

  const { all_product, currency, cartItems, updateQuantity,navigate } = useContext(shopContext)
  const [cartData, setCartData] = useState([])

  useEffect(() => {
    const tempData = []
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            id: items,
            size: item,
            quantity: cartItems[items][item]
          })
        }
      }
    }
    setCartData(tempData);

  }, [cartItems])

  return (
    <div className='border-t pt-14' >
      <div className='text-2xl mb-3' >
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div>
        {
          cartData.map((item, index) => {
            const productData = all_product.find((product) => product.id == item.id)
            return (
              <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4' >
                <div className='flex items-start gap-6' >
                  <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
                  <div>
                    <p className='text-sm sm:text-lg font-medium' >{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2' >
                      <p>{currency}{productData.new_price}</p>
                      <p className='px-2 sm:px-3 sm:py-1  bg-slate-200' >{item.size}</p>
                    </div>
                  </div>
                </div>
                <input onChange={(e) => e.target.value === "" || e.target.value === "0" ? null : updateQuantity(item.id,item.size,Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number" min={1} defaultValue={item.quantity} />
                <img onClick={() => updateQuantity(item.id,item.size,0)} className='w-10 mr-4 sm:mr-5 cursor-pointer' src={bin} alt="" /> 
                {/* Day 4 4:00:37 */}
              </div>
            )
          })
        }
      </div>
      <div className='flex justify-end my-20' >
        <div className='w-full sm:w-[450px]' >
          <CartTotal/>
          <div className='w-full text-end' >
            <button onClick={() => navigate("/place-order")} className='bg-black text-white text-sm my-8 px-8 py-3' >PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
