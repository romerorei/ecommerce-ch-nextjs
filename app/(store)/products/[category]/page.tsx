// import ProductCard from "@/components/products/ProductCard"
import { mockData } from "@/data/products"
import { Product } from "@/interfaces/products"
import { ProductCard } from "@/components/products/ProductCard"


export const generateMetadata = async ({params}: { params: any } ) => {
    return {
        title: `STORE - ${params.category}`
    }
}


const Productos: React.FC<{ params: { category: string } }> = ({ params }) => {
    const { category } = params

    const items = category === 'all' ? mockData : mockData.filter(product => product.category === category)

    return (
        <div className="container m-auto pt-8 mb-6">
            <h2 className="text-4xl text-bold">Productos</h2>
            <hr/>
            <section className="gap-2 px-4 grid grid-cols-2 sm:grid-cols-4">
                { items.map(product => <ProductCard key={product.id} item={product} />) }
            </section>
            <hr/>
        </div>
    )
}

export default Productos;
