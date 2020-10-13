import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import nextCookies from 'next-cookies';
import Layout from '../../components/Layout';
import { addToCartFromCookie } from '../../util/cookies';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import BaseballHatLogo from '../../images/BaseballHatLogo.png';
import styled from 'styled-components';
import cookie from 'js-cookie';
import { products } from '../../util/database';

const HeroContent = styled.div`
  border-radius: 2rem 2rem 2rem 2rem;
  opacity: 0.9;
  color: ghostwhite;
  padding: 0.5rem, 0rem, 0.375rem;
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;

  background-color: #2b2020;
`;

const CardGrid = styled.div`
  padding-top: 4rem;
  padding-bottom: 10rem;
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;
`;
const CardCard = styled.div`
  padding-top: 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #2b2020;
  color: ghostwhite;
  opacity: 0.9;
  border-radius: 2rem 2rem 2rem 2rem;
`;

const CardImage = styled.image`
  cursor: pointer;
  padding-top: 56.25%;
  background-image: url(${BaseballHatLogo});
  background-attachment: local;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -1;
`;

const CardContent = styled.div`
  flex-grow: 1;
`;

const CartButton = styled.button`
  cursor: pointer;
  border: 0;
  margin: 5px 0;
  font-size: 1rem;
  color: ghostwhite;
  background-color: #2b2020;
  margin-left: auto;
  margin-right: auto;
`;

export default function ProductList(props) {
  const [cartConditionFromCookie, setCartConditionFromCookie] = useState(
    props.cartConditionFromCookie,
  );

  const [
    productsWithCartConditionData,
    setProductsWithCartConditionData,
  ] = useState(products);

  useEffect(() => {
    setProductsWithCartConditionData(
      products.map((product) => {
        return {
          ...product,
          cartCondition: cartConditionFromCookie.includes(product.id),
        };
      }),
    );
  }, [cartConditionFromCookie, setProductsWithCartConditionData]);

  // const [
  //   productsWithCartConditionData,
  //   setproductsWithCartConditionData,
  // ] = useState(props.products);

  // useEffect(() => {
  //   setproductsWithCartConditionData(
  //     props.products.map((product) => {
  //       return {
  //         ...product,
  //         cartCondition: cartConditionFromCookie.includes(product.id),
  //       };
  //     }),
  //   );
  // }, [
  //   props.products,
  //   cartConditionFromCookie,
  //   setproductsWithCartConditionData,
  // ]);

  return (
    <Layout>
      <Head>
        <title>product list</title>
      </Head>
      <HeroContent>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="#933a16"
          gutterBottom
        >
          BRIKTOP
        </Typography>
        <Typography variant="h5" align="center" color="ghostwhite" paragraph>
          While our collection might be small, it is made from the highest
          quality materials, sourced from sustainable suppliers.
        </Typography>
      </HeroContent>
      <CardGrid>
        <Grid container spacing={4}>
          {productsWithCartConditionData.map((product) => (
            <Grid item key={product} xs={12} sm={6} md={4}>
              <Link href={`/products/${product.id}`}>
                <a>
                  {product.name}

                  {product.price}
                </a>
              </Link>
              <CardCard>
                <Link href={`/products/${product.id}`}>
                  <CardImage />
                </Link>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    align="center"
                  >
                    {product.name}
                  </Typography>
                </CardContent>
                <CartButton>{product.price}</CartButton>
                <CartButton
                  onClick={() => {
                    const cartCondition = addToCartFromCookie(product.id);
                    setCartConditionFromCookie(cartCondition);
                  }}
                >
                  {product.cartCondition ? 'Remove from cart' : 'Add to cart'}
                </CartButton>
              </CardCard>
            </Grid>
          ))}
        </Grid>
      </CardGrid>
    </Layout>
  );
}

export function getServerSideProps(context) {
  // const { getProducts } = await import('../../util/database');
  // const hats = await getProducts();

  const allCookies = nextCookies(context);

  const cartCondition = allCookies.cartCondition || [];

  return {
    props: {
      cartConditionFromCookie: cartCondition,
      // hats,
    },
  };
}
