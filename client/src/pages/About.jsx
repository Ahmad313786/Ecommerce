import React from 'react'
import Title from "../components/Title"
import NewsLetterBox from "../components/NewsLetterBox"
import about from '../assets/about.jpeg'
const About = () => {
  return (
    <div>
      {/* 4:56:12 */}
      <div className='text-2xl text-center pt-8 border-t' >
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16 ' >
        <img className='w-full md:max-w-[450px]' src={about} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600' >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus molestias asperiores ipsam tenetur labore nemo alias eius voluptate reiciendis aliquam? Minus, natus dolorem pariatur praesentium, maiores, eius explicabo mollitia incidunt eum quos in quis accusamus.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus unde magnam similique! Harum delectus rem a laboriosam dolor quis mollitia? Laudantium enim fuga sequi sint!</p>
        <b className='text-gray-800' >Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, aperiam. Rerum atque dolorum temporibus incidunt nesciunt laboriosam voluptas!</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20' >
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5' >
          <b>Quality Assurance:</b>
          <p className='text-gray-800' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero accusamus voluptate commodi, exercitationem dicta eaque.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5' >
          <b>Convenience:</b>
          <p className='text-gray-800' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis voluptatem odit eveniet, nihil odio voluptas.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5' >
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-800' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime ipsa rem impedit placeat, voluptates voluptatum.</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About
