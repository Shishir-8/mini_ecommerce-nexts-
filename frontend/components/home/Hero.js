import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function Hero() {
  return (
    <section>
          <h1 className='text-4xl font-bold md:text-6xl'>Welcome to <span className='text-blue-600'>Hukut Store</span></h1>
          <p className='mt-4 text-lg text-gray-600'>Discover amazing Products and deals just for you. 
          </p>
          <p className='mt-2 text-lg text-gray-600'>We get all the best products at best price.</p>

          <div className='mt-5 text-lg text-gray-600'>
            <Button asChild className="me-2">
              <Link href="">Shop Now</Link>
            </Button>
              <Button variant="outline" asChild>
              <Link href="">Learn More</Link>
            </Button>
          </div>
      </section>
  )
}
