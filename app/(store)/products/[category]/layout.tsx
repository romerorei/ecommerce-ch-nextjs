import Link from "next/link"
import { mockDataCategories } from "@/data/categories"

interface Props {
    children: React.ReactNode;
  }

const ProductosLayout: React.FC<Props> = ({children}) => {



    return (
        <div className="container m-auto px-4">
            <nav className="flex gap-10 py-4">
                { mockDataCategories.map(category => <Link key={category} href={`/products/${category}`} className="capitalize" >{category}</Link>)}
            </nav>
            {children}
        </div>
    )
}

export default ProductosLayout
