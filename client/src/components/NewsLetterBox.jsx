import React, { useState } from 'react'

const NewsLetterBox = () => {
    const [data, setData] = useState({
        email: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(data);
        setData({email:""})

    }
    const handleChange = (e) => {
        let { name, value } = e.target
        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }
    return (
        <div className='text-center' >
            <p className='text-2xl font-medium text-gray-800' >Subscribe now and get 20% off</p>
            <p className='text-gray-400 mt-3' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, tempora.</p>
            <form onSubmit={handleSubmit} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3' >
                <input onChange={handleChange} className='sm:flex-1 w-full outline-none' value={data.email} type="email" name="email" id="" placeholder='Enter Your Email' required />
                <input type="submit" className='bg-black text-white text-xs px-10 py-4 ' value="SUBSCRIBE" />
            </form>
        </div>
    )
}

export default NewsLetterBox
