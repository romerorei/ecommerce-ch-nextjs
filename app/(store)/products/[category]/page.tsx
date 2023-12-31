import { Suspense } from "react";
import { Metadata } from 'next';
//import { Product } from "@/interfaces/products"
import { ProductCard } from "@/components/products/ProductCard"
import { revalidatePath } from 'next/cache';
import { getCategories } from '../../../../lib/getCategories';


export interface Product {
    id: number | string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }
interface ProductProps {
    //product: Product
    params: { category: string };
}

export const generateMetadata = async ({params}: { params: Metadata } ) => {
    return {
        title: `STORE - ${params.category}`
    }
}

export async function generateStaticParams (){
    return [
        {category: 'all'},
        {category: "mens-clothing"},
        {category: "womens-clothing"},
        {category: "jewelery"},
        {category: "electronics"}
    ]
}

export const revalidate = 3600

const Productos: React.FC<ProductProps> = async ({ params }) => {
    const { category }:any = params

    //AQUI
    // const items = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/products/${category}`,
    // { cache:'no-store'
    // }).then(r => r.json())

    const items = await getCategories(category)
    type Item = typeof items[0];
    console.log(items)
    if (!items) {
        return <div>Categoria no encontrada</div>;
      }

    return (
        <div className="container m-auto pt-8 mb-6">
            <h2 className="text-4xl text-bold">Productos</h2>
            <hr/>
                <section className="gap-2 px-4 grid grid-cols-2 sm:grid-cols-4">
                    <Suspense fallback={<div>Cargando...</div>} >
                        { items.map((product:any) => <ProductCard key={product.id} item={product} />) }
                    </Suspense>
                </section>
            <hr/>
        </div>
    )
}

export default Productos;
