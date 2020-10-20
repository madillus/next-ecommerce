import Head from 'next/head';
import Layout from '../components/Layout';
import ProductList from './products/product-list';

export default function collectionpage() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <ProductList />
    </Layout>
  );
}
