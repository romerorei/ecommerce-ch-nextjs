import Link from "next/link"
import { getCategories } from "@/lib/getCategories"

interface Props {
    children: React.ReactNode;
  }

const ProductosLayout: React.FC<Props> = async ({children}) => {

 const category = await  getCategories()

    return (
        <div className=" bg-white container mt-2 m-auto px-4">
            <nav className="flex gap-10 py-4">
                { category.map((category:string) => <Link key={category} href={`/products/${category}`} className="capitalize" >{category}</Link>)}
            </nav>
            <hr />
            {children}
        </div>
    )
}

export default ProductosLayout
