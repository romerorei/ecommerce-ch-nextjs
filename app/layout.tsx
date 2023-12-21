import type { Metadata } from 'next'
import { CartProvider } from '@/components/context/CartContext'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { AuthProvider } from '@/components/context/AuthContext'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ecommerce Company',
  description: 'Compra de todo',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en" >
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            <Providers>
              {children}
            </Providers>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
