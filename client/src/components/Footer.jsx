import React from 'react'
import logo from '../assets/logo_big.png'
const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm' >
        <div>
          <img src={logo} className='mb-5 w-32' alt="" />
          <p className='w-full md:w-2/3 text-gray-600' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quae aspernatur mollitia quod distinctio accusantium pariatur delectus magni hic recusandae?</p>
        </div>
        <div className='sm:mt-20' >
          <p className='text-xl font-medium mb-5' >COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600' >
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='sm:mt-20' >
          <p className='text-xl font-medium mb-5' >GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600' >
            <li>+92 324 7316502</li>
            <li>ah2319655@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center' >Copyright 2025@ myShop.com - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
