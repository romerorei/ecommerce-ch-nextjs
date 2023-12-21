import { Suspense } from "react";
import { Metadata } from 'next';
import { Product } from "@/interfaces/products"
import { ProductCard } from "@/components/products/ProductCard"
import { revalidatePath } from 'next/cache';

interface ProductProps {
    //product: Product;
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
    const { category } = params
    //console.log('page:',params)

    const items = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${category}`,
    { cache:'no-store'
    }).then(r => r.json())

    //console.log(items[1])
    return (
        <div className="container m-auto pt-8 mb-6">
            <h2 className="text-4xl text-bold">Productos</h2>
            <hr/>
                <section className="gap-2 px-4 grid grid-cols-2 sm:grid-cols-4">
                    <Suspense fallback={<div>Cargando...</div>} >
                        { items.map((product:Product) => <ProductCard key={product.id} item={product} />) }
                    </Suspense>
                </section>
            <hr/>
        </div>
    )
}

export default Productos;
