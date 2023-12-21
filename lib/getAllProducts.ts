

export const getAllProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products',
  { next: { revalidate: 0} })

  if (!response.ok) {
      throw new Error('Fallo la obtencion de datos')
  }

  return response.json()

}
