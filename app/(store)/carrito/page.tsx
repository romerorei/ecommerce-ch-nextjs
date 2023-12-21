import { useAuthContext } from "@/components/context/AuthContext";
import ShoppingCard from "@/components/products/ShoppingCard";
import Link from "next/link";

export async function generateMetadata() {

  return {
      title: `STORE - Carrito de Compras`,
  }
}

export default function Checkout() {

  //const { user } = useAuthContext()

  return (
      <>
        <ShoppingCard/>
      </>
  );
}
