'use client'
import { ReactNode, createContext, useContext, useState } from "react"


export interface ProductProps {
  id: number,
  title: string,
  image?: string,
  price: number,
  quantity: number
}

interface CartContextType {
  addToCart: (item: ProductProps) => void;
  isInCart: (id: number) => boolean;
  totalQty: () => number;
  emptyCart: () => void;
  cart: ProductProps[]
}


const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCartContext = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext debe ser utilizado dentro de un CartProvider");
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}



export const CartProvider: React.FC<CartProviderProps> = ({children}) => {
  const [cart, setCart] = useState<ProductProps[]>([])
  console.log('carrito',cart)

  const addToCart = (item:ProductProps) => {
    setCart([...cart, item])
  }

  const isInCart = (id:number) => {
    return cart.some(item => item.id === id)
  }

  const totalQty = () => {
      return cart.reduce((acc, item) => acc + item.quantity, 0)
  }

  const emptyCart = () => {
      setCart([])
  }

  return(
    <CartContext.Provider value={{
        addToCart,
        isInCart,
        totalQty,
        emptyCart,
        cart
      }}>
      {children}
    </CartContext.Provider>
  )
}
