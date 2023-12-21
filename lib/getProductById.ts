

export const getProductsById = async (id:number | string) => {
  // const response = await fetch(`https://fakestoreapi.com/products/1`,
  // {
  //   cache: "no-store",
  //   next:{
  //     revalidate: 0
  //   }
  // })

  // if (!response.ok) {
  //     throw new Error('Fallo la obtencion de datos')
  // }

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product/${id}`,
  {cache: "no-store"
  }).then(r => r.json())
  //console.log(response)

  if (!response) {
      throw new Error('Fallo la obtencion de datos')
  }

  return response
}
