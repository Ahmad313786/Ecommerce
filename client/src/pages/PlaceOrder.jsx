import React, { useContext, useState } from 'react'
import Title from "../components/Title"
import CartTotal from "../components/CartTotal"
import stripe from "../assets/stripe.png"
import razor from "../assets/razor.png"
import { shopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'
const PlaceOrder = () => {

  const [method, setMethod] = useState("cod")
  const {navigate,backendURL,token,cartItems,setCartItems,getCartAmount,delivery_fee,all_product} = useContext(shopContext)
  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const handleChange = (e) => {
    const name = e.target.name 
    const value = e.target.value

    setFormData(data => ({...data,[name]:value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let orderItems = []
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(all_product.find(product => product._id == items))
            if (itemInfo) {
              itemInfo.size = item
              itemInfo.quantity = cartItems[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }
      
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      }

      switch (method) {
        case "cod":
          const res = await axios.post(backendURL + "/api/order/place",orderData,{headers:{Authorization:`Bearer ${token}`}})
          if (res.data.success) {
            setCartItems({})
            navigate("/orders")
            toast.success(res.data.message)
          } else {
            toast.error(res.data.message)
          }
          break;
      
        default:
          break;
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-hi-[80vh] border-t ' >
      {/* ----------- Left Side ---------------- */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]' >
        <div className='text-xl sm:text-2xl my-3' >
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className='flex gap-3' >
          <input required onChange={handleChange} name='firstName' value={formData.firstName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none' type="text" placeholder='First Name' />
          <input required onChange={handleChange} name='lastName' value={formData.lastName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none' type="text" placeholder='Last Name' />
        </div>
        <input required onChange={handleChange} name='email' value={formData.email} className='border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none' type="email" placeholder='Email Address' />
        <input required onChange={handleChange} name='street' value={formData.street} className='border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none' type="text" placeholder='Street' />
        <div className='flex gap-3' >
          <input required onChange={handleChange} name='city' value={formData.city} className='border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none' type="text" placeholder='City' />
          <input required onChange={handleChange} name='state' value={formData.state} className='border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none' type="text" placeholder='State' />
        </div>
        <div className='flex gap-3' >
          <input required onChange={handleChange} name='zipcode' value={formData.zipcode} className='border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none' type="number" placeholder='Zipcode' />
          <input required onChange={handleChange} name='country' value={formData.country} className='border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none' type="text" placeholder='Country' />
        </div>
        <input required onChange={handleChange} name='phone' value={formData.phone} className='border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none' type="tel" placeholder='Phone' />
      </div>
      {/* ------------- Right Side ------------ */}
      <div className='mt-8' >
        <div className='mt-8 min-w-80' >
          <CartTotal />
        </div>
        <div className='mt-12' >
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/* ----------- Payment method selection ------------ */}
          <div className='flex gap-3 flex-col lg:flex-row' >
            <div onClick={() => setMethod("stripe")} className='flex items-center gap-3 border p-2 px-3 cursor-pointer' >
              <p className='min-w-3.5 h-3.5 border border-gray-500 rounded-full flex items-center justify-center'>
                {method === "stripe" && <span className="w-2 h-2 bg-blue-500 rounded-full"></span>}
              </p>
              <img className='h-5 mx-4 ' src={stripe} alt="" />
            </div>
            <div onClick={() => setMethod("razorpay")} className='flex items-center gap-3 border p-2 px-3 cursor-pointer' >
              <p className='min-w-3.5 h-3.5 border border-gray-500 rounded-full flex items-center justify-center'>
                {method === "razorpay" && <span className="w-2 h-2 bg-blue-500 rounded-full"></span>}
              </p>
              <img className='h-5 mx-4 ' src={razor} alt="" />
            </div>
            <div onClick={() => setMethod("cod")} className='flex items-center gap-3 border p-2 px-3 cursor-pointer' >
              <p className='min-w-3.5 h-3.5 border border-gray-500 rounded-full flex items-center justify-center'>
                {method === "cod" && <span className="w-2 h-2 bg-blue-500 rounded-full"></span>}
              </p>
              <p className='text-gray-500 text-sm font-medium mx-4' >CASH ON DELIVERY</p>
            </div>
          </div>
          <div className='w-full text-end mt-8' >
             <button type='submit' className='bg-black text-white px-16 py-3 text-sm' >PLACE ORDER</button>
             {/* 4:34:19 */}
          </div>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
