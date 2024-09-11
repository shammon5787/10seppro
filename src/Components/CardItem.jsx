import React from 'react'
import img from '../Food/3.avif'
import { HiMinus, HiPlus } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { decrementItem, incrementItem, removeCard } from '../Store/CardSlice';

const CardItem = ({id, name, price, image, qty}) => {
    const dispatch = useDispatch()
    return (
        <div className='p-2 bg-gray-700 rounded-md flex gap-5 mt-1 shadow-md '>
            <MdDelete onClick={()=>dispatch(removeCard({id}))} className='hover:text-red-700 text-xl absolute right-4 cursor-pointer' />
            <img className='w-[55px] h-[55px] rounded-full ' src={image} alt="" />
            <div className='flex'>
                <div className='leading-5 mt-2'>
                    <h1>{name}</h1>
                    <h1>$: {price}</h1>
                </div>
                <div className='flex items-center gap-3 absolute right-7 mt-8 font-semibold'>
                    <HiMinus onClick={()=>qty > 1 ? dispatch(decrementItem({id})) : qty = 1} className='cursor-pointer text-xl bg-gray-950 rounded-full' />
                    <span>{qty}</span>
                    <HiPlus onClick={()=>dispatch(incrementItem({id}))} className='cursor-pointer text-xl bg-gray-950 rounded-full' />
                </div>
            </div>
        </div>
    )
}

export default CardItem