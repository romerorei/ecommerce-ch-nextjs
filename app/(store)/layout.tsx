import type { Metadata } from 'next'
import '../globals.css'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'


export const metadata: Metadata = {
  title: 'STORE',
  description: 'Compra de todo',
}

export default function StoreLayout({children}: {children: React.ReactNode}) {
  return (
      <>
      <Navbar/>
        {children}
      <Footer/>
      </>
  )
}
