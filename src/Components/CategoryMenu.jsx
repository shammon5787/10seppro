import React, { useEffect, useState } from 'react'
import FoodData from '../Data/FoodData.js'
import { useDispatch } from 'react-redux'
import { addCategory } from '../Store/CategorySlice.jsx'

const CategoryMenu = () => {

    const [categories, setcategories] = useState([])
    const ListUniqueCategory = ()=>{
        const uniqueCategory = [... new Set(FoodData.map((food)=>food.category))]
        setcategories(uniqueCategory)
    }
    useEffect(() => {
        ListUniqueCategory()      
    }, [])
    
    const dispatch = useDispatch()
    
  return (
    <div className='mt-24'>
        <h1 className='font-bold text-3xl uppercase'>order your favorite food</h1>
        <div className='flex items-center gap-5 overflow-x-scroll lg:overflow-x-hidden py-2 '>
        <button onClick={()=>dispatch(addCategory("All"))} className='bg-blue-900 px-2 py-0.5 rounded-md hover:bg-green-800 transition-all duration-500 font-semibold '>All Food</button>
            {
                categories.map((category, i)=>{
                    return(
                        <button onClick={()=>dispatch(addCategory(category))} key={i} className='bg-blue-900 px-2 py-0.5 rounded-md hover:bg-green-800 transition-all duration-500 font-semibold '>{category}</button>
                    )
                })
            }
        </div>
    </div>
  )
}

export default CategoryMenu