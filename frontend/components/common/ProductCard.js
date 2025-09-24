"use client"

import { Card,
    CardHeader,
    CardContent,
    CardFooter,

 } from "../ui/card"
 import { Button } from "../ui/button"
 import Image from "next/image"
import Link from "next/link"
import AddToCart from "./AddToCart"





export default function ProductCard({product}) {
  return (
    <Card className="flex flex-col max-w-xs w-full hover:scale-105 transition pt-0">
      <Link href={`store/product/${product.id}`}>
            <div className="w-full h-48 relative">
                <img src={product.image} className="w-full h-full object-cover"/>
            </div>
        <CardHeader className="flex-1 flex flex-col justify-between">
           <h1 className="text-md font-semibold"> {product.title}</h1>
           <p className="text-gray-500 text-sm line-clamp-2">{product.description}</p>
           <p className="font-bold text-blue-600">{product.price}</p>
        </CardHeader>
        </Link>
        <CardFooter>
           <AddToCart product={product} />
        </CardFooter>
    </Card>
  )
}
