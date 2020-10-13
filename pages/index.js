import Head from 'next/head';
import Layout from '../components/Layout';

import Parent from '../components/Parent';

export default function LandingPage() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <Parent />
    </Layout>
  );
}
