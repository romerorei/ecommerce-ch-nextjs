import React from "react";
import ProductsTableAdmin from "@/components/admin/ProductsTableAdmin";
import LogoutButton from "@/components/admin/LogoutButton";
import { getCategories } from "@/lib/getCategories";

interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: string;
  title: string;
  image: string;
  description: string;
  category: string;
  inStock: number;
  price: number;
  rating?: Rating;
}


const ProductsAdmin: React.FC = async  () => {
  const category = 'all'

  const itemList:any = await getCategories(category)

  console.log(itemList)
  return (
    <>
      <LogoutButton/>
      <ProductsTableAdmin itemList={itemList}/>
    </>
  );
}

export default ProductsAdmin;
