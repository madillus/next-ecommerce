import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';
import styled from 'styled-components';
import Parent from '../components/Parent';

// const LandingCard = styled;

export default function LandingPage(props) {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <Parent />
    </Layout>
  );
}
