import { db } from "@/firebase/config"
import { collection, getDocs, query, where } from "firebase/firestore"
import { NextResponse } from "next/server"

export const getCategories = async (category:any) => {
    //const response = await fetch(`https://fakestoreapi.com/products/categories`, {cache: "force-cache"})

    // const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/products/${category}`,
    // { cache:'no-store'
    // }).then(r => r.json())
    // console.log('getCategories', response)

    // if (!response) {
    //     throw new Error('Fallo la obtencion de datos por category')
    // }

    // return response

    //const {category}:any = params;

    const productsRef = collection(db, "products")

    const q = category === 'all' ? productsRef : query(productsRef,where('category','==',category))

    const querySnapshot = await getDocs(q)
    const docs = querySnapshot.docs.map(doc => doc.data())

    //return NextResponse.json(docs)
    return docs

  }
