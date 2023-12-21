import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { collection, deleteDoc, doc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from "@/firebase/config";


export async function GET(request:Request, {params}: {params:string}) {
  const {category}:any = params;

  const productsRef = collection(db, "products")

  const q = category === 'all' ? productsRef : query(productsRef,where('category','==',category))

  const querySnapshot = await getDocs(q)
  const docs = querySnapshot.docs.map(doc => doc.data())

  return NextResponse.json(docs)
}
