import React from 'react'

export default function Category({categories}) {
   
  return (
    <div>
        <h1 className='text-lg font-semibold'>Categories</h1>
       <ul className='space-y-3'>
        {
            categories.map((item, index) => 
                <li className='border-b' key={index}>{item.toUpperCase()}</li>
            )
        }
       </ul>

    </div>
  )
}
