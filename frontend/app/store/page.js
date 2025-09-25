import Container from '@/components/home/Container'
import React from 'react'
import Category from './Category'
import ProductList from './ProductList'




async function getProducts() {
    const res = await fetch("https://fakestoreapi.com/products")
    const products = await res.json()
    return products
}

const categories = ["Laptops", "Desktops", "Accessories", "Apple"]


export default async function page() {
  const products = await getProducts()
   
  return (
    <Container className="flex gap-10">

      <Category categories={categories} />
      <ProductList products={products} />

    </Container>
  )
}
