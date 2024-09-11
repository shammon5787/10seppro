import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { BiSolidCart } from "react-icons/bi";
import CardItem from './CardItem';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Card = () => {
  const [activeCard, setactiveCard] = useState(true)
  const selectCard = useSelector((state) => state.cart.cart)
  const totalitem = selectCard.reduce((totalitem , items)=>totalitem + items.qty , 0)
  const totalprice = selectCard.reduce((totalprice, items)=>totalprice + items.qty * items.price, 0)
  const navigate = useNavigate()
  return (
    <>
      <div className={`bg-blue-950 w-full lg:w-[28vw] fixed top-0 right-0 h-full p-3 ${activeCard ? "translate-x-0" : "translate-x-full"} transition-all duration-500  z-50 `}>
        <div className='flex items-center justify-between font-bold text-xl'>
          <h1>Your Orders</h1>
          <IoMdClose onClick={() => setactiveCard(false)} className='font-bold text-2xl cursor-pointer bg-gray-500 rounded-full hover:text-black' />
        </div>
        {
          selectCard.map((food) => {
            return (
              <CardItem key={food.id} id = {food.id} name = {food.name} price = {food.price} image = {food.image} qty = {food.qty} />
            )
          })
        }
        <div className='font-semibold absolute bottom-2'>
          <h1>Total Items: {totalitem} </h1>
          <h1>Totla Price: {totalprice}</h1>
          <hr />
          <button onClick={()=>navigate("/Success")} className='bg-gray-950 px-1 my-2 rounded-md hover:bg-green-800 transition-all duration-500 font-semibold w-[90vw] lg:w-[25vw] '>Check Out</button>
        </div>
      </div>
      <BiSolidCart onClick={() => setactiveCard(true)} className={`text-6xl fixed bottom-7 right-7 cursor-pointer bg-green-500 rounded-full ${selectCard.length > 0 ? "animate-bounce" : "animate-none"} `} />
    </>
  )
}

export default Card