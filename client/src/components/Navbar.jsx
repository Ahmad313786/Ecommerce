import React,{useContext, useState} from 'react'
import logo from '../assets/logo_big.png'
import search_icon from '../assets/search_icon.jpeg'
import profile_icon from '../assets/profile_icon.png'
import cart_icon from '../assets/cart_icon.png'
import dropdown_icon from '../assets/dropdown_icon.png'
import menu from '../assets/menu.png'
import { Link, NavLink } from 'react-router-dom'
import { shopContext } from '../context/ShopContext'
const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const {setShowSearch, getCartCount, navigate ,token, setToken, setCartItems}  = useContext(shopContext)
  const logOut = () => {
    navigate("/login")
    localStorage.removeItem("token")
    setToken("")
    setCartItems({})
  }
  return (
    <div className='flex items-center justify-between py-5 font-medium' >
      <Link to={'/'} ><img src={logo} alt="" className='w-20' /></Link>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700' >
        <NavLink to='/' className='flex flex-col items-center gap-1' >
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1' >
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1' >
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1' >
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-4' >
        <img onClick={() => setShowSearch(true)} src={search_icon} alt="" className=' w-5 cursor-pointer' />
        <div className='group relative' ><img onClick={()=> token ? null : navigate("/login")} src={profile_icon} alt="" className=' w-7 cursor-pointer' />
          {token && <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4' >
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded' >
              <p className='cursor-pointer hover:text-black' >My Profile</p>
              <p onClick={()=> navigate("/orders")} className='cursor-pointer hover:text-black' >Orders</p>
              <p onClick={logOut} className='cursor-pointer hover:text-black' >Logout</p>
            </div>
          </div>}
        </div>
        <Link to="/cart" className='relative' >
        <img src={cart_icon} className=' w-5 min-w-5' alt="" />
        <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]' >{getCartCount()}</p>
        </Link>
        <img onClick={()=> setVisible(true)} src={menu} className='w-5 cursor-pointer sm:hidden' alt="" />
      </div>
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-slate-200 opacity-75 transition-all duration-500 ${visible? "w-full" : "w-0"}`} >
        <div className='flex flex-col text-gray-600' >
          <div onClick={()=> setVisible(false)} className='flex items-center gap-2 p-3 cursor-pointer transition-all duration-500' >
            <img src={dropdown_icon} className='h-2 rotate-270 mt-0.5' alt="" />
            <p className='text-gray-900' >Back</p>
          </div>
          <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border text-black' to='/' >HOME</NavLink>
          <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border text-black' to='/collection' >COLLECTION</NavLink>
          <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border text-black' to='/about' >ABOUT</NavLink>
          <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border text-black' to='/contact' >CONTACT</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
