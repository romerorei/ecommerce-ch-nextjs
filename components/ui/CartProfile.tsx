"use client"

import { useState } from 'react'
import {User, Link} from "@nextui-org/react";

const CartProfile = () => {
    const [open, setOpen] = useState(false)

    const handleMenu = () => {
        setOpen(!open)
    }

    return (
        <User
          name="User TESR"
          description={(
            <Link href="https://twitter.com/jrgarciadev" size="sm" isExternal>
              Cerrar Sesion
            </Link>
          )}
          avatarProps={{
            src: "/user.png"
          }}
      />

    )
}

export default CartProfile
