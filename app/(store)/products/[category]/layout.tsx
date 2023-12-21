import Link from "next/link"
//import { getCategories  } from "@/lib/getCategories"

interface Props {
    children: React.ReactNode;
  }

const ProductosLayout: React.FC<Props> = async ({children}) => {

const categories = ['all', "mens-clothing", "womens-clothing", "jewelery", "electronics"]

    return (
        <div className="container m-auto px-4">
            <nav className="flex gap-10 py-4">
                { categories.map((category:string) => <Link key={category} href={`/products/${category}`} className="capitalize" >{category}</Link>)}
            </nav>
            {children}
        </div>
    )
}

export default ProductosLayout
