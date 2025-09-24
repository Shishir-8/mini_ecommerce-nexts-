"use client"
import { useSelector } from 'react-redux'
import { Button } from '../ui/button'
import { ShoppingCart } from 'lucide-react'

export default function CartIcon() {
    const items = useSelector((state) => state.cart.items)
    const count = items.length
    return (
        <Button variant="ghost" size="sm" className="flex items-center gap-1 relative">
            <ShoppingCart className="w-8 h-8" />
        
                 <span className="hidden sm:inline absolute -top-2 -right-0.5 bg-red-500 text-white w-4 h-4 items-center md:flex justify-center text-xs rounded-full ">{count}</span>

        </Button>
    )
}
