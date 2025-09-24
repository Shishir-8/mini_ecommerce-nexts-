import Container from '@/components/home/Container'
import React from 'react'
import CartList from './CartList'

export default function page() {
  return (
    <div>
      <Container>
        <h1 className='text-2xl font-bold mb-8 py-10'>Your Cart</h1>

        <CartList />
      </Container>
        
    </div>
  )
}
