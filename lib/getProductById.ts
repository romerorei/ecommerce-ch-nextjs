import { db } from "@/firebase/config"
import { doc, getDoc } from "firebase/firestore"


export const getProductsById = async (id:string) => {
  // const response = await fetch(`https://fakestoreapi.com/products/1`,
  // {
  //   cache: "no-store",
  //   next:{
  //     revalidate: 0
  //   }
  // })

  // if (!response.ok) {
  //     throw new Error('Fallo la obtencion de datos')
  // }

  // const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/product/${id}`,
  // {cache: "no-store"
  // }).then(r => r.json())
  // //console.log(response)

  // if (!response) {
  //     throw new Error('Fallo la obtencion de datos')
  // }

  // return response


  //const {id}:any = params;
  //console.log(id)

  // const productsRef = collection(db, "products")

  // const q = category === 'all' ? productsRef : query(productsRef,where('category','==',category))

  // const querySnapshot = await getDocs(q)
  // const docs = querySnapshot.docs.map(doc => doc.data())

  // //return NextResponse.json(docs)
  // return docs

  const docRef = doc(db, "products", id)
  const docSnapshot = await getDoc(docRef)

  //revalidateTag('products')

  return docSnapshot.data()


}
