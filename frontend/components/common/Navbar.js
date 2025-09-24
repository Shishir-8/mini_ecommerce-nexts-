import Link from "next/link"
import SearchBar from "./SearchBar"
import { Button } from "../ui/button"
import { SearchIcon, ShoppingCart, User } from "lucide-react"
import CartIcon from "./CartIcon"





export default function Navbar() {
    return  (
      <nav className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Left: Logo */}
        <Link href="/" className="text-xl font-bold text-indigo-600">
          Hukut
        </Link>

        {/* Middle: Search */}
        <div className=" flex w-1/2 justify-center px-10">
          <SearchBar /> 
        </div>

        {/* Right: Cart + Account */}
        <div className="flex items-center gap-2 ">

          <Link href="/store">
            <Button variant="ghost" size="sm" className="flex items-center gap-1">
              <span className="hidden sm:inline">Store</span>
            </Button>
          </Link>

        

          <Link href="/cart">
           <CartIcon />
          </Link>

          <Link href="/account">
            <Button variant="ghost" size="sm" className="flex items-center gap-1">
              <User className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
    )
   
}