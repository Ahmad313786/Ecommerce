import React from 'react'
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox'
import contact from '../assets/contact.jpeg'
const Contact = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-10 border-t' >
        {/* 5:03:42 */}
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28' >
        <img className='w-full md:max-w-[480px]' src={contact} alt="" />
        <div className='flex flex-col items-start justify-center gap-6'>
          <p className='font-semibold text-xl text-gray-600' >Our Store</p>
          <p className='text-gray-500'>Lorem, ipsum dolor. <br />Lorem ipsum dolor sit amet.</p>
          <p className='text-gray-500'>Tel: +92 324 7316502 <br />Email: ah2319655@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at MyShop</p>
          <p className='text-gray-500'>Lorem, ipsum dolor. <br />Lorem ipsum dolor sit amet.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default Contact
