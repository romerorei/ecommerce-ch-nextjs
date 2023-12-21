import Image from "next/image"
import logo from '@/assets/logo1.svg'
import Menu from "./Menu"
import SearchBar from "./SearchBar"
// import logo from '@/assets/untitled.svg'
import Link from 'next/link';
import { usePathname } from "next/navigation";

const AdminNavbar = () => {


  return (
    <header className="text-white py-3 bg-black body-font">
      <div className="container mx-auto flex flex-wrap px-5 flex-col md:flex-row items-center">
        <Link href={`/`} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-white text-xl">BackOffice</span>
        </Link>
        <div className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <nav className="flex gap-5 px-4 text-white">
            <Link  href={"/products/all"}> Ir a la Tienda</Link>
            <Link  href={"/login"}>Login</Link>
            <Link  href={"admin/create"}>Crear Producto</Link>
            <Link  href={"/admin"}>Admin</Link>
          </nav>
        </div>

      </div>
    </header>
  )
}

export default AdminNavbar
