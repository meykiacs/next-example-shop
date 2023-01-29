export type Product = {
  id: number
  title: string
}

type ApiProduct = {
  id: number, attributes: {title: string}
}

type Data = {
  data: ApiProduct[]
}

export function stripProduct(apiProduct: ApiProduct): Product {
  return {
    id: apiProduct.id,
    title: apiProduct.attributes.title
  }
}

export async function getProducts(): Promise<Product[]> {
  const response = await fetch('http://127.0.0.1:1337/api/products')
  const data : Data = await response.json()
  const apiProducts : ApiProduct[] = data.data
  return apiProducts.map(stripProduct)
}
