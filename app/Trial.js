"use client"
import { useRouter } from 'next/navigation'
import React from 'react'


const Trial = () => {
    const routerRed= useRouter()
  return (
    <>
    <div onClick={()=>{routerRed.push("/about")}}>way 1</div>
    <div onClick={()=>{routerRed.back()}}>way 2</div>
    <div onClick={()=>{routerRed.forward()}}>way 3</div>
    <div onClick={()=>{routerRed.refresh()}}>way 4</div>
    </>
  )
}

export default Trial