
import ProductCard from '@/components/common/ProductCard'
import Container from '@/components/home/Container'
import Hero from '@/components/home/Hero'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default async function page() {
  const res = await fetch("https://fakestoreapi.com/products?limit=4")
  const products = await res.json()
  console.log(products)

  return (
    <>
    <Container className="py-20 px-4 md:px-6">
      <div className="flex flex-col md:flex-row items-center justify-between mb-15">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Hero />
        </div>
        <div className="md:w-1/2">
          <img src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3N8ZW58MHx8MHx8fDA%3D"
            className="w-full rounded-lg shadow-lg" />
        </div>
      </div>
      </Container>


      <section className='w-full bg-gray-100 py-10'>
     <Container className="px-4">
        <h1 className='text-3xl font-semibold mb-10 mt-10 text-center'>Featured Products</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center auto-rows-fr'>
        {
          products.map((p)=> (
            <ProductCard key={p.id} product={p} />
          ))
        }
        </div>
   </Container>
      </section>


      </>



  
  )
}
