import React from "react";
import ProductsTableAdmin from "@/components/admin/ProductsTableAdmin";
import LogoutButton from "@/components/admin/LogoutButton";
import { getCategories } from "@/lib/getCategories";

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

interface ProductsAdminState {
  itemList: Product[];
  loading: boolean;
  error: string | null;
}



const ProductsAdmin = async () => {
  const category = 'all'

  const itemList = await getCategories(category)
 //console.log(itemList)
  return (
    <>
      <LogoutButton/>
      <ProductsTableAdmin itemList={itemList}/>
    </>
  );
}

export default ProductsAdmin;
