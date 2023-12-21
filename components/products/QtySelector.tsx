"use client"
import { useState } from "react"

import { useCartContext, ProductProps } from "../context/CartContext"
import Link from "next/link"
import { useAuthContext } from "../context/AuthContext"
import { Button } from "@nextui-org/react"


export interface ProductCartProps {
    item: ProductProps
  }


export const QtySelector: React.FC<ProductCartProps> = ({ item }) => {
    const { addToCart, isInCart } = useCartContext()
    const [quantity, setQuantity] = useState(1)
    const { user } = useAuthContext();

    const handleAdd = () => {
        addToCart({
            ...item,
            quantity
        })
        //console.log('al carrito')
    }

    return (
        <div className="ml-2">

        {user.logged ?
            ( isInCart(item.id)
                    ?   <Link href={"/carrito"}
                              className="rounded-lg py-2 px-4 bg-blue-600 text-white text-center">
                            Terminar mi compra
                        </Link>
                    :
                    <>
                        {/* <Counter max={item.inStock} counter={quantity} setCounter={setQuantity} /> */}
                        <button  className="flex ml-auto text-black bg-yellow-300 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-500 rounded" onClick={handleAdd} >Agregar al carrito</button>
                    </>
            )
            :   <Button color="primary">
                    <Link href={"/login"}>
                    Inicia sesion para comprar
                    </Link>
                </Button>
                    }
        </div>
    )
}
