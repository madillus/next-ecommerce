import Head from 'next/head';
import Layout from '../../components/Layout';
import nextCookies from 'next-cookies';
import ShoppingCartComponent from '../../components/Cart';


export default function ShoppingCart(props: any) {
  const cart = props.cart;

  return (
    <Layout>
      <Head>
        <title>Shopping Cart</title>
      </Head>
      <ShoppingCartComponent cart={cart} products={props.products} />
    </Layout>
  );
}

export async function getServerSideProps(context: any) {

  const { getProducts } = await import('../../util/database');
  const products = await getProducts();
  const allCookies = nextCookies(context);
  const cart = allCookies.cart || [];
  const id = allCookies.id || [];

  return {
    props: {
      products: products,
      id: id,
      cart: cart,
    },
  };
}


// const StyledRoot = styled.div`
//   padding: 50px 12px;
// `;

// const StyledOuterContainer = styled.div`
//   max-width: 60rem;
//   display: flex;
//   width: 100%;
//   height: 100%;
//   margin: auto;
// `;
// const StyledContainer = styled.div`
//   margin-right: auto;
//   margin-left: auto;
//   height: 40rem;
//   width: 40rem;
//   border: none;
//   border-radius: 4rem 4rem 4rem 4rem;
//   padding: 2rem 1rem 2rem 2rem;
//   opacity: 0.9;
//   background-color: #2b2020;
// `;

// const Title = styled.h1`
//   text-align: center;
//   margin-top: -1rem;
//   font-size: 4rem;
//   color: ghostwhite;
//   font-weight: 700;
//   @media (max-width: 500px) {
//   }
// `;

// const Description = styled.p`
//   text-align: center;
//   margin-top: 25rem;
//   font-size: 1.5rem;
//   color: #fff;
//   font-weight: 300;
//   text-align: center;
//   @media (max-width: 500px) {
//     font-size: 0.75rem;
//   }
// `;

// const BuyButton = styled.button`
//   cursor: pointer;
//   border: 0;
//   margin: auto;
//   font-size: 1.5rem;
//   color: ghostwhite;
//   background-color: #2b2020;
//   display: flex;
//   justify-content: center;
// `;