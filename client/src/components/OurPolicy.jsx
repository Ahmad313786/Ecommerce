import React from 'react'
import exchange from "../assets/exchange.png";
import returnImg from "../assets/return.png"
import customer_support from "../assets/customer_support.jpeg"

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700' >
      <div>
        <img className='w-12 m-auto mb-5'  src={exchange} alt="" />
        <p className='font-semibold' >Easy Exchange Policy</p>
        <p className='text-gray-400' >We offer hassle free exchange policy</p>
      </div>
      <div>
        <img className='w-12 m-auto mb-5'  src={returnImg} alt="" />
        <p className='font-semibold' >7 Days Return Policy</p>
        <p className='text-gray-400' >We provide 7 days free return policy</p>
      </div>
      <div>
        <img className='w-12 m-auto mb-5'  src={customer_support} alt="" />
        <p className='font-semibold' >Customer Support Policy</p>
        <p className='text-gray-400' >We provide 24/7 customer support policy</p>
      </div>
    </div>
  )
}

export default OurPolicy
