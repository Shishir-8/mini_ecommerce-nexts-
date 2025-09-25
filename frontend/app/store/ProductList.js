import React from 'react'
import ProductCard from '@/components/common/ProductCard'

export default async function ProductList({products}) {
    const totalProducts = products.length

    return (
        <>
        <div>
            <h1 className='text-lg p-10 font-semibold'>All Products ({totalProducts})</h1>

        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center'>
            {
                products.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))
            }
        </div>
        </div>
       
        
         </>
    )
}
