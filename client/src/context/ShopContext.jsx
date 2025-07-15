import { createContext,useEffect,useState } from "react";
import all_product from "../assets/all_product"
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom"

export const shopContext = createContext()

const shopContextProvider = ({children}) => {

    const [search, setSearch] = useState("")
    const [showSearch, setShowSearch] = useState(false)
    const [cartItems, setCartItems] = useState({})
    const navigate = useNavigate()
    const addToCart = async (itemId,size) => {

      if (!size) {
        toast.error("Select Product Size")
        return
      }

      let cartData = structuredClone(cartItems)
      if (cartData[itemId]) {
        if (cartData[itemId][size]) {
          cartData[itemId][size] += 1
        }
        else {
          cartData[itemId][size] = 1;
        }
      } else {
        cartData[itemId] = {}
        cartData[itemId][size] = 1;
      }
      setCartItems(cartData)
    }

    const getCartCount = () => {
      let totalCount = 0
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
         try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item]
          }
         } catch (error) {
          console.log(error);
          
         }
        }
      }
      return totalCount;
    }

    const updateQuantity = async(itemId,size,quantity) => {
      let cartData = structuredClone(cartItems)
      cartData[itemId][size] = quantity;
      setCartItems(cartData)
    }

    const getCartAmount = () => {
      let totalAmount = 0;
      for (const items  in cartItems) {
        let itemInfo = all_product.find((product) => product.id == items)
        // for in loop
        for (const item in cartItems[items]) {
          try {
            if (cartItems[items][item] > 0) {
              totalAmount += itemInfo.new_price * cartItems[items][item]
            }
          } catch (error) {
            console.log(error);
            
          }
        }
        // for in loop
      }
      return totalAmount
    }
    

    const currency = "$"
    const delivery_fee = 50
    const value = {
        all_product, currency, delivery_fee,search, setSearch,showSearch, setShowSearch, cartItems, addToCart, getCartCount,updateQuantity, getCartAmount,
        navigate
    }

  return (
    <shopContext.Provider value={value} >
        {children}
    </shopContext.Provider>
  )  
}

export default shopContextProvider