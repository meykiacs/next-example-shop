// option 2a: fetch products on the client side
import Title from '../components/Title'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { getProducts, Product, stripProduct } from '@/lib/products'


const HomePage: React.FC = () => {
  
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    getProducts().then(products => setProducts(products))
  }, [])

  console.log('[Homepage render:', products)

  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="px-6 py-4">
        <Title>Next Shop</Title>
        <ul>
          {products.map(p => (
            <li key={p.id}>{p.title}</li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default HomePage
