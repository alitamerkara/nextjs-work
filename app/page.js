import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Inter } from 'next/font/google'
import { Roboto } from 'next/font/google'
import { redirect } from 'next/navigation'
import { resolve } from 'styled-jsx/css'
import Trial from './Trial'



const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
  })
  const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  })
  const sleep= (ms)=>{
    return new Promise ((resolve)=>setTimeout(resolve, ms))
  }
  const fetchData = async ()=>{
    const data= await fetch('https://restcountries.com/v3.1/name/deutschland')
    return data.json()
  }

const Page = async () => {
    await sleep(3000);
    const newValue= await fetchData();
    console.log(newValue)
    const nav1= false
    if(nav1){
        redirect("/about")
    }

    
   
  return (
    <div>
        <div>page</div> 
        <Link href="/about" className={inter.className}>Yönlendirme 1 </Link>
        <Link href="/about?name=tamer&surname=kara" className={roboto.className}>Yönlendirme 2 </Link>
        <Link href={
            {
                pathname: "/about",
                query:{
                    name: "tamer",
                    surname: "kara"
                }
            }
        }>Yönlendirme 3 </Link>
        <Image src="http://audi.carwallpapers.ru/audi/rs7-sportback/2019/Audi-RS7-Sportback-2019-1280x800-037.jpg" width={400} height={400}/>
        <Trial/>
    </div>
  )
}

export default Page