import React, { useContext } from 'react'
import { Form, useParams } from 'react-router-dom'
import { shopContext } from '../context/ShopContext'
import { useState } from 'react'
import { useEffect } from 'react'
import star_dull_icon from '../assets/star_dull_icon.png'
import star_icon from '../assets/star_icon.png'
import RelatedProducts from '../components/RelatedProducts'
const Product = () => {
  const { productId } = useParams()
  const { all_product,currency, addToCart } = useContext(shopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
  const [size, setSize] = useState("")

  const fetchProductData = () => {
    all_product.map((item) => {
      if (item._id == productId) {
        setProductData(item)
        setImage(item.images[0])
        return null
      }
    })
  }

  useEffect(() => {
    fetchProductData()
  }, [productId])


  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100' >
      {/* --------------- Product Data ------------------- */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row' >
        {/* ----------------- product images -------------- */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row' >
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full' >
            {
              productData.images.map((item, index) => (
                <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="image" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]' >
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>
        {/* ---------------- Product Data -------------- */}
        <div className='flex-1 ' >
          <h1 className='font-medium text-2xl mt-2' >{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2' >
            <img src={star_icon} className='w-3.5' alt="" />
            <img src={star_icon} className='w-3.5' alt="" />
            <img src={star_icon} className='w-3.5' alt="" />
            <img src={star_dull_icon} className='w-3.5' alt="" />
            <img src={star_dull_icon} className='w-3.5' alt="" />
            <p className='pl-2' >(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium' >{currency}{productData.new_price}</p>
          <p className='mt-5 text-gray-500 md:4/5' >{productData.description}</p>
          <div className='flex flex-col gap-4 my-8' >
            <p>Select Size</p>
            <div className='flex gap-2' >
              {productData.sizes.map((item,index) =>(
                <button onClick={()=>setSize(item)} className={`py-2 border border-gray-100 px-4 bg-gray-100 ${item === size ? "border-rose-500" : ""}`} key={index} >{item}</button>
              ))
              }
            </div>
          </div>
          <button onClick={()=> addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700' >ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1' >
            <p>100% original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange within 7 days.</p>
          </div>
        </div>
      </div>
      {/* Description & Review Section */}
      <div className='mt-20' >
        <div className='flex' >
          <b className='border px-5 py-3 text-sm' >Description</b>
          <p className='border px-5 py-3 text-sm' >Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500 ' >
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, perferendis voluptatum. Laborum perspiciatis et itaque quis repudiandae, modi vero id. Minus commodi autem dolorum perspiciatis laboriosam veniam vero ratione ut, voluptatem dolore voluptates aliquam tempora quidem, reiciendis error eligendi, quo cum ab labore. Suscipit ad, sequi consequatur perferendis enim pariatur culpa nam maxime error aliquam vitae doloremque ab accusamus fugit iste reprehenderit. Facere modi molestiae, quaerat harum maiores ipsa fugiat ipsam dignissimos asperiores, officia iusto commodi reiciendis qui voluptas debitis.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum dignissimos expedita perspiciatis facere! Voluptatibus velit aliquid perferendis eius neque maiores excepturi sed blanditiis sit facilis id nam corporis itaque, optio quos! Impedit natus labore neque a doloribus soluta hic officiis.</p>
        </div>
      </div>

          {/* Display Related Products */}

          <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

    </div>
  ) : <div>Product not Found</div>
}

export default Product
