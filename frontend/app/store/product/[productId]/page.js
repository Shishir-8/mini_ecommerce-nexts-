import React from 'react'
import Container from '@/components/home/Container'
import AddToCart from '@/components/common/AddToCart'

export default async function page({ params }) {
  console.log(params)
    const { productId } = await params
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
    const product = await res.json()
    return (
        
        <div className="bg-gray-50 mt-10">
  <Container className=" px-4 py-8">
    <div className="flex flex-wrap -mx-4">

      <div className="w-full md:w-1/2 px-4 mb-8">
        <img src={product.image} className='object-cover' alt="" />   
      </div>

      <div className="w-full md:w-1/2 px-4">
        <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="mb-4">
          <span className="text-2xl font-bold mr-2">${product.price}</span>
        </div>
     

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Color:</h3>
          <div className="flex space-x-2">
            <button
                className="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>
            <button
                className="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"></button>
            <button
                className="w-8 h-8 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
          <input type="number" id="quantity" name="quantity" min="1" value="1"
                        className="w-12 text-center rounded-md border-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" readOnly />
        </div>

        <div className="flex space-x-4 mb-6">
       <AddToCart product={product} />
        </div>

      </div>
    </div>
  </Container>
</div>
    
)
}
