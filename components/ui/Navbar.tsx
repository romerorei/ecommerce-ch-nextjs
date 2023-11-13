import Image from "next/image"
import logo from '@/assets/logo1.svg'
import Menu from "./Menu"
import SearchBar from "./SearchBar"
// import logo from '@/assets/untitled.svg'
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="text-white py-3 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap px-5 flex-col md:flex-row items-center">
        <Link href={`/products/all`} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image
            alt="Logo"
            src={logo}
            width={50}
            height={50}
          />
          <span className="ml-3 text-white text-xl">STORE</span>
        </Link>
        <div className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <SearchBar/>
        </div>
        <Menu/>
      </div>
    </header>
  )
}

export default Navbar
