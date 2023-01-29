// option 1: fetch products on incremental static regeneration

import Head from 'next/head'
import { getProducts, Product } from '@/lib/products'
import Title from '../components/Title'
import { GetStaticProps } from 'next'

type HomePageProps = {
  products: Product[]
}

const HomePage: React.FC<HomePageProps> = ({ products }) => {
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

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  console.log('[HomePage] getstaticProps()')
  const products = await getProducts()

  return {
    props: { products },
    revalidate: 60
  }
}
