"use client"
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'


const Page = () => {
    const path= usePathname()
    const search= useSearchParams();
   const name= search.get("name");
   console.log(name, "name")
   console.log(path)
  return (
    <div>page about</div>
  )
}

export default Page