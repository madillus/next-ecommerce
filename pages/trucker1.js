import Head from 'next/head';
import Layout from '../components/Layout';
import Product from '../components/Product';

export default function LandingPage() {
  return (
    <Layout>
      <Head />

      <Product />
    </Layout>
  );
}
