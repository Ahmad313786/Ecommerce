import React from 'react'
import {NavLink} from "react-router-dom"
import add from "../assets/add_icon.png"
import order from "../assets/order_icon.png"
// import upload from "../assets/upload_area.png"
const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2'>
        
      <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]' >
        <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg' to={"/add"} >
        <img className='size-5' src={add} alt="" />
        <p className='hidden md:block'>Add Items</p>
        </NavLink>
      </div>
      
        
      <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]' >
        <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg' to={"/list"} >
        <img className='size-5' src={order} alt="" />
        <p className='hidden md:block'>List Items</p>
        </NavLink>
      </div>
        
      <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]' >
        <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg' to={"/orders"} >
        <img className='size-5' src={order} alt="" />
        <p className='hidden md:block'>Orders</p>
        </NavLink>
      </div>

    </div>
  )
}

export default Sidebar
