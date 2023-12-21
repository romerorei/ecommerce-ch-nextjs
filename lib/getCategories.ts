export const getCategories = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/categories`, {cache: "force-cache"})

    if (!response.ok) {
        throw new Error('Fallo la obtencion de datos')
    }

    return response.json()
  }
