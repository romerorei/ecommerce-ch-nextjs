"use client"
import menu from '@/assets/menu_icon.svg'
import Image from 'next/image';
import MenuList from './MenuList'
import { useState } from 'react'

const Menu = () => {
    const [open, setOpen] = useState(false)

    const handleMenu = () => {
        setOpen(!open)
    }

    return (
        <div className='z-40'>
            <div onClick={handleMenu}>
                <Image
                    alt="Menu icon"
                    src={menu}
                    width={48}
                    height={48}
                    className='invert'
                />
            </div>

            <MenuList open={open} setOpen={setOpen}/>
        </div>
    )
}

export default Menu
