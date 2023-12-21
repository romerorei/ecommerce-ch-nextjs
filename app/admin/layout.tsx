"use client"
// import type { Metadata } from 'next'
import { useAuthContext } from "@/components/context/AuthContext"
import AdminNavbar from '@/components/ui/AdminNavbar'
import '../globals.css'


// export const metadata: Metadata = {
//   title: 'BackOffice',
//   description: 'DashBoard',
// }

interface AdminLayoutProps {
  children: React.ReactNode;
  login: React.ReactNode;
}

export default function AdminLayout({children, login}: AdminLayoutProps) {
  const { user } = useAuthContext()

  return (
      <>
        { user.logged && user.role === 'admin' ? <AdminNavbar /> : ""}
        {
          user.logged && user.role === 'admin'
              ? children
              : login
        }
      </>
  )
}
