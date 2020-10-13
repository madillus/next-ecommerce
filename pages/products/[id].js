import Head from 'next/head';
import Layout from '../../components/Layout';
import { products } from '../../util/database';
import styled from 'styled-components';
import BaseballHatLogo from '../../images/BaseballHatLogo.png';

const StyledRoot = styled.div`
  padding: 50px 12px;
`;

const StyledOuterContainer = styled.div`
  max-width: 60rem;
  display: flex;
  width: 100%;
  height: 100%;
  margin: auto;
`;
const StyledContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  height: 40rem;
  width: 40rem;
  border: none;
  border-radius: 4rem 4rem 4rem 4rem;
  padding: 2rem 1rem 2rem 2rem;
  opacity: 0.9;
  background-color: #2b2020;
  background-image: url(${BaseballHatLogo});
  background-attachment: local;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Title = styled.h1`
  text-align: center;
  margin-top: -2rem;
  font-size: 7rem;
  color: #933a16;
  font-weight: 700;
  @media (max-width: 500px) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  text-align: center;
  margin-top: 25rem;
  font-size: 1.5rem;
  color: #fff;
  font-weight: 300;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`;

const BuyButton = styled.button`
  cursor: pointer;
  border: 0;
  margin: auto;
  font-size: 1.5rem;
  color: ghostwhite;
  background-color: #2b2020;
  display: flex;
  justify-content: center;
`;

export default function Product(props) {
  const product = products.find((currentProduct) => {
    if (currentProduct.id === props.id) {
      return true;
    }
    return false;
  });
  if (!props.product) {
    return (
      <Layout>
        <Head>
          <title>Product not found</title>
        </Head>
        Product not found.
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>Product</title>
      </Head>
      product id: {props.id}
      <br />
      product name: {props.product.name}
      <br />
      product price: {props.product.price}
    </Layout>
  );
}

export function getServerSideProps(context) {
  return {
    props: { id: context.query.id },
  };
}

// export async function getServerSideProps(context) {
//   const id = context.query.id;

//   const { getProductrById } = await import('../../util/database');
//   const product = await getProductById(id);

//   const props = {};
//   if (product) props.product = product;

//   return {
//     props: { id: context.query.id },
//     props: props,
//   };
// }

//   return (
//     <StyledRoot>
//       <StyledOuterContainer>
//         <StyledContainer>
//           <Title>product id: {props.id}</Title>
//           <Description>product name: {product.name}</Description>

//           <BuyButton>product price: {product.price}</BuyButton>
//         </StyledContainer>
//       </StyledOuterContainer>
//     </StyledRoot>
//   );
// };
