"use client"
import {  SearchIcon } from "lucide-react"
import { Input } from "../ui/input"

export default function Search() {
  return (
    <>

    <div className="relative w-full">

       <SearchIcon className="h-6 w-6  absolute left-2 top-1/2 -translate-y-1/2" />
       <Input
        type="text"
        placeholder="What you are looking for...?"
        className="w-full pl-10"
      />
     
    </div>

    </>
  )
}
