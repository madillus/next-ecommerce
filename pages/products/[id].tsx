import { ChangeEvent, useState } from 'react';
import Head from 'next/head';

import Layout from '../../components/Layout';
// import { products } from '../../util/database';
import styled from 'styled-components';
import BaseballHatLogo from '../../images/BaseballHatLogo.png';
import { addToCookie } from '../../util/cookies';

import { GetServerSidePropsContext } from 'next';

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
  font-size: 6rem;
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

const InputField = styled.input`
  padding: 0.5em;
  margin: auto;
  font-size: 1rem;
  color: ghostwhite;
  background-color: #2b2020;
  display: flex;
  justify-content: center;
  text-align: center;
  border: none;
  border-radius: 3px;
`;

type ProductHat = {
id: string,
name: string,
price: number,

}
type Props ={
  product: ProductHat,
cart: object
}


export default function Product(props: Props) {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(props.cart);
  const onChange = (e: ChangeEvent<HTMLInputElement >) => {
    setCount (parseInt(e.currentTarget.value));
  };
console.log(cart)
  const product = props.product;
  if (!props.product) {
    return (
      <Layout>
        <Head>
          <title>Product not found</title>
        </Head>
        <h1>Product not found.</h1>
      </Layout>
    );
  }


  return (
    <Layout>

      <StyledRoot>
        <StyledOuterContainer>
          <StyledContainer>
            <Title>{props.product[0].name}</Title>
            <Description> {props.product[0].price}$</Description>
            <InputField
              onChange={onChange}
              placeholder="Enter amount"
            />

            <BuyButton
              key={product.id}
              onClick={() => {
                setCart(addToCookie(`${product.id}`, count));
              }}
            >
              Add To Cart
            </BuyButton>
          </StyledContainer>
        </StyledOuterContainer>
      </StyledRoot>
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.query.id;

  const { getProductById } = await import('../../util/database');
  const product = await getProductById(id);

  const props: {product?: ProductHat} = {};
  if (product) props.product = product;

  return {
    props: props,
  };
}

// return (
//   <StyledRoot>
//     <StyledOuterContainer>
//       <StyledContainer>
//         <Title>product id: {props.id}</Title>
//         <Description>product name: {product.name}</Description>

//         <BuyButton>product price: {product.price}</BuyButton>
//       </StyledContainer>
//     </StyledOuterContainer>
//   </StyledRoot>
// );
// };
