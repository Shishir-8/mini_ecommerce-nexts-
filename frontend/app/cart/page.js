"use client"
import Container from '@/components/home/Container'
import { decrementQuantity, incrementQuantity } from '@/redux/slice/cartSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function () {
  const items = useSelector((state)=> state.cart.items)
  const dispatch = useDispatch()
  console.log(items)

 const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  

  if(items.length === 0) return <p>Your card is not available.</p>
  return (
   <div className="bg-gray-100 h-screen py-8">
    <Container className="px-4">
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
        <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
                <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="text-left font-semibold">Product</th>
                                <th className="text-left font-semibold">Price</th>
                                <th className="text-left font-semibold">Quantity</th>
                                <th className="text-left font-semibold">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                          {
                            items.map((item)=> (
                               <tr key={item.id} className='border-b'>
                                <td className="py-4">
                                    <div className="flex items-center">
                                        <img className="h-16 w-16 mr-4" src={item.image} />
                                        <span className="font-semibold">{item.title}</span>
                                    </div>
                                </td>
                                <td className="py-4">${item.price}</td>
                                <td className="py-4">
                                    <div className="flex items-center">
                                        <button onClick={()=> dispatch(decrementQuantity(item.id))}
                                         className="border rounded-md py-2 px-4 mr-2">-</button>
                                        <span className="text-center w-8">{item.quantity}</span>
                                        <button onClick={()=> dispatch(incrementQuantity(item.id))}
                                         className="border rounded-md py-2 px-4 ml-2">+</button>
                                    </div>
                                </td>
                                <td className="py-4">${Math.round(item.price * item.quantity)}</td>
                            </tr>

                            ))

                          }
                           

                       
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="md:w-1/4">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">Summary</h2>
                 
                    <hr className="my-2" /> 
                    <div className="flex justify-between mb-2">
                        <span className="font-semibold">Total</span>
                        <span className="font-semibold">${Math.round(total)}</span>
                    </div>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
                </div>
            </div>
        </div>
    </Container>
</div>
  )
}

