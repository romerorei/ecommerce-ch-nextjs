import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { collection, deleteDoc, doc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from "@/firebase/config";


export async function GET(_:any, {params}: {params:string}) {
  // AQUI

  try {
    const {category}:any = params;

    const productsRef = collection(db, "products")

    const q = category === 'all' ? productsRef : query(productsRef,where('category','==',category))

    const querySnapshot = await getDocs(q)
    const docs = querySnapshot.docs.map(doc => doc.data())

    return NextResponse.json(docs)

  } catch (error) {
    console.error('Error en la función GET:', error);
    return NextResponse.json(new Error('Error interno del servidor'));
  }

}
