import React, { useEffect, useState } from 'react'
import { PropagateLoader } from 'react-spinners'

const Success = () => {
  const [loading, setloading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 3000)
  }, [])

  return (
    <div className='items-center justify-center flex flex-col h-screen'>
      {
        loading ? <PropagateLoader color='#36d7b7' /> :
          <div className='items-center justify-center flex flex-col'>
            <h1>Order Successful !!!</h1>
            <h1>Your order has been placed successfully</h1>
          </div>
      }

    </div>
  )
}

export default Success