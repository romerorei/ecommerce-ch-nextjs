import Link from "next/link"
import { mockDataCategories } from "@/data/categories"

interface Props {
    children: React.ReactNode;
  }

const ProductosLayout: React.FC<Props> = ({children}) => {



    return (
        <div className=" bg-white container mt-2 m-auto px-4">
            <nav className="flex gap-10 py-4">
                { mockDataCategories.map(category => <Link key={category} href={`/products/${category}`} className="capitalize" >{category}</Link>)}
            </nav>
            <hr />
            {children}
        </div>
    )
}

export default ProductosLayout
