//import Image from 'next/image'

import Footer from "@/components/ui/Footer"
import Navbar from "@/components/ui/Navbar"
import { getCategories } from "@/lib/getCategories"
import Link from "next/link"

export default async function Home() {

  const categories = await getCategories()

  return (
    <>
      <Navbar/>
      <div className="container m-auto px-4">
        <nav className="flex gap-10 py-4">
          <Link href={`/products/all`} className="capitalize" >All</Link>
          { categories.map((category:string) => <Link key={category} href={`/products/${category}`} className="capitalize" >{category}</Link>)}
        </nav>
      </div>
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <h1> este es el home</h1>
      <Footer/>
    </>

  )
}
