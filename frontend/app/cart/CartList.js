"use client"

import { useSelector } from "react-redux"
import CartItem from "./CartItem"

export default function CartList() {
    const items = useSelector((state) => state.cart.items)
    console.log(items)

    if(items.length === 0) {
        return <p> Your Cart is empty</p>
    }
  return (
    <div>
        {
            items?.map((item, index) => (
               <CartItem />
            ))
        }

    </div>
  )
}
