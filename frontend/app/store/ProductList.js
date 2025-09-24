import React from 'react'
import ProductCard from '@/components/common/ProductCard'

export default async function ProductList({products}) {

    return (
        <>
      
        <div className='col-span-4 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-10'>

            {
                products.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))
            }
        </div>
         </>
    )
}
