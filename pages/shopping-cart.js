import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import nextCookies from 'next-cookies';

export default function CheckOut(props) {
  return (
    <Layout>
      <Head>
        <title>Shopping Cart</title>
      </Head>

      {/* {props.shoppingCart.map((hat) => ())

                    <Link href={`/check-out`}>
                      <button>Pay now</button>
                    </Link> */}
    </Layout>
  );
}

export function getServerSideProps(context) {
  //comes from next-cookie
  const allCookies = nextCookies(context);

  const shoppingCart = allCookies.shoppingCart;
  let totalString = allCookies.total;
  totalString = totalString.map(function (x) {
    return parseInt(x, 10);
  });
  const totalArray = totalString.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);

  const total = totalArray || [];

  return {
    props: {
      shoppingCart,
      total,
    },
  };
}
