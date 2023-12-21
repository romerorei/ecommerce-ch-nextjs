"use client"
import Link from "next/link"
import { useAuthContext } from "../context/AuthContext"


const MenuList = ({open, setOpen}:any) => {
    const { logout, user } = useAuthContext()



    const handleClose = () => setOpen(false)

    const handleCloseLogout = () => {
        //console.log(event.target);
        setOpen(false)
        logout()
      };

    return (
        <div className={`${open ? 'visible opacity-100' : 'invisible opacity-0'} transition-all fixed inset-0 bg-black/50 flex justify-end`}>

            <aside className={`${!open ? 'translate-x-48' : ''} transition-all w-48 bg-gray-800`}>
                <div
                    className="text-white text-right p-4 text-2xl"
                    onClick={handleClose}
                >
                    X
                </div>

                <nav className="flex flex-col gap-5 px-4 text-white">
                    {user.logged ?  <Link onClick={ handleCloseLogout } href={"/products/all"}>Cerrar Sesion</Link>
                                 :  <Link onClick={handleClose} href={"/login"}>Login</Link>
                    }
                    <Link onClick={handleClose} href={"/nosotros"}>Nosotros</Link>
                    <Link onClick={handleClose} href={"/contacto"}>Contacto</Link>
                    <Link onClick={handleClose} href={"/admin"}>Admin</Link>
                </nav>
            </aside>
        </div>
    )
}

export default MenuList
