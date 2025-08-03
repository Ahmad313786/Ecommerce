import React, { useContext, useState, useEffect } from 'react'
import { shopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSeller = () => {
  const { all_product } = useContext(shopContext)
  const [best_Seller, setBest_Seller] = useState([])
  useEffect(() => {
    const bestProduct = all_product.filter((item) => item.bestSeller)
    setBest_Seller(bestProduct.slice(0,5))
  }, [all_product])

  return (
    <div className='my-10' >
      <div className='text-center text-3xl py-8' >
        <Title text1={"BEST"} text2={"SELLER"} />
        <p className='w-3/4 mx-auto text-xs sm:text-sm md:text-base text-gray-600' >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, sed nulla! Amet aliquam accusamus ut!</p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6' >
        {best_Seller.length === 0 ? (
          <p>No best sellers found.</p>
        ) : (
          best_Seller.map((item, index) => (
            <ProductItem key={index} id={item._id} images={item.images} name={item.name} price={item.new_price} />
          ))
        )}
      </div>
    </div>
  )
}

export default BestSeller
