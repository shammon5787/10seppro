import React from 'react'
import img from '../Food/5.avif'
import { MdOutlineStar } from "react-icons/md";

const FoodCard = ({id, name, image, price, desc, rating}) => {
    return (
        <div className='bg-gradient-to-r from-gray-600 to-blue-800 w-full lg:w-[23vw] rounded-md '>
            <div className='flex flex-col p-3 items-center'>
                <img className='w-[210px] h-[100px] rounded-md cursor-grab hover:scale-110 transition-all duration-500 ' src={image} alt="" />
            </div>
            <div className='p-3'>
                <div className='font-semibold flex items-center justify-between'>
                    <h1>{name}</h1>
                    <h1>$: {price}</h1>
                </div>
                <p>{desc}.</p>
                <div className='flex items-center justify-between font-semibold'>
                    <span className='flex items-center gap-2'>
                        <MdOutlineStar className='text-2xl text-yellow-400' />
                        <h1>{rating}</h1>
                    </span>
                    <button className='bg-green-900 px-2 py-0.5 rounded-md hover:bg-blue-950 transition-all duration-500 font-semibold '>Add To Card</button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard