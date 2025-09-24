"use client"

import { useDispatch } from "react-redux"
import { Button } from "../ui/button"
import { addToCart } from "@/redux/slice/cartSlice"

export default function AddToCart({product}) {
    const dispatch = useDispatch()
  return (
    <Button
    onClick={()=> dispatch(addToCart(product))}
    className="bg-indigo-600 text-white">
        Add to Cart
    </Button>
  )
}
