import React from "react";
import ProductsTableAdmin from "@/components/admin/ProductsTableAdmin";
import LogoutButton from "@/components/admin/LogoutButton";


const ProductsAdmin = async () => {
  const category = 'all'
  const itemList = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/products/${category}`,
  { cache:'no-store'}).then(r => r.json())
  //console.log(itemList)

  return (
    <>
      <LogoutButton/>
      <ProductsTableAdmin itemList={itemList}/>
    </>
  );
}

export default ProductsAdmin;
