import GlobalStyles from '../components/GlobalStyles';
import React from 'react';

import Head from 'next/head';
// import Link from 'next/link';
import Header from './Header';
import Footer from './Footer';

export default function Layout(props) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Header />

      <main>{props.children}</main>
      <Footer />
    </>
  );
}
