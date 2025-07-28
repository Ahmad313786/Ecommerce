import React, { useContext,useState,useEffect } from 'react'
import { shopContext } from '../context/ShopContext'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'
import dropdown_icon from "../assets/dropdown_icon.png"
const Collection = () => {
  const {all_product, search, showSearch} = useContext(shopContext)
  const [showFilter, setShowFilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState("relevant")

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev,e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev,e.target.value])
    }
  }

  const applyFilter = () => {
    let products = all_product.slice()

    if (showSearch && search) {
      products = products.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      products = products.filter(item => category.includes(item.category))  //2:19:36
    }
    if (subCategory.length > 0) {
      products = products.filter(item => subCategory.includes(item.subCategory))
    }
    setFilterProducts(products)
  }

  const sortProducts = () => {
    let fpCopy = filterProducts.slice()
    
    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a,b) => (a.new_price - b.new_price)))
        break;
      case "high-low":
        setFilterProducts(fpCopy.sort((a,b) => (b.new_price - a.new_price)))
        break;
    
      default:
        applyFilter()
        break;
    }
  }

  useEffect(() => {
    setFilterProducts(all_product)
  }, [])

  useEffect(() => {
    applyFilter()
  }, [category,subCategory,search,showSearch,all_product])
  
  useEffect(() => {
    sortProducts()
  }, [sortType])
  
  
  
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t' >
      {/* Filter options */}
      <div className='min-w-60' >
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2' >FILTERS
          <img onClick={() => setShowFilter(!showFilter)} className={`h-3 sm:hidden ${showFilter ? "rotate-180" : ""}`} src={dropdown_icon} alt="" />
          {/* Day 2 2:00:27 */}
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter? "" : "hidden"} sm:block`} >
          <p className='mb-3 font-medium text-sm' >CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700' >
            <p className='flex gap-2' >
              <input onChange={toggleCategory} className='w-3' type="checkbox" value={"men"}/> Men
            </p>
            <p className='flex gap-2' >
              <input onChange={toggleCategory} className='w-3' type="checkbox" value={"women"}/> Women
            </p>
            <p className='flex gap-2' >
              <input onChange={toggleCategory} className='w-3' type="checkbox" value={"kid"}/> Kids
            </p>
          </div>
        </div>
        {/* SubCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter? "" : "hidden"} sm:block`} >
          <p className='mb-3 font-medium text-sm' >TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700' >
            <p className='flex gap-2' >
              <input onChange={toggleSubCategory} className='w-3' type="checkbox" value={"Topwear"}/> Top wear
            </p>
            <p className='flex gap-2' >
              <input onChange={toggleSubCategory} className='w-3' type="checkbox" value={"Bottomwear"}/> Bottom wear
            </p>
            <p className='flex gap-2' >
              <input onChange={toggleSubCategory} className='w-3' type="checkbox" value={"Winterwear"}/> Winter wear
            </p>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className='flex-1' >
        <div className='flex justify-between text-base sm:text-2xl mb-4' >
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          {/* Product sort */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value={"relevant"}>Sort by: Relevant</option>
            <option value={"low-high"}>Sort by: Low to High</option>
            <option value={"high-low"}>Sort by: High to Low</option>
          </select>
        </div>
        {/* Map products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6' >
          {
            filterProducts.map((item,index)=> (
              <ProductItem key={index} name={item.name} price={item.new_price} images={item.images} id={item._id} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection
