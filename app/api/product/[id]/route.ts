import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import { getProductsById } from "@/lib/getProductById";


export async function GET(request:Request, {params}: {params:string}) {
  const {id}:any = params;
  //console.log(id)

  const docRef = doc(db, "products", id)
  const docSnapshot = await getDoc(docRef)

  revalidateTag('products')

  return NextResponse.json(docSnapshot.data())
}
