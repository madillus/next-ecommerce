import { useState } from 'react';
import { removeFromCookie, addToCookie } from '../util/cookies';
import styled from 'styled-components';
import Counter from './Counter';

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
`;
const StyledContainerCart = styled.div`
  margin-right: auto;
  margin-left: auto;
  height: auto;
  width: auto;
  border: none;
  border-radius: 4rem 4rem 4rem 4rem;
  padding: 2rem 1rem 2rem 2rem;
  opacity: 0.9;
  background-color: ghostwhite;
`;
const Title = styled.h1`
  text-align: center;
  margin-top: -2rem;
  font-size: 4rem;
  color: ghostwhite;
  font-weight: 700;
  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;
const Description = styled.p`
  text-align: center;

  font-size: 1.5rem;
  color: red;
  font-weight: 300;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`;

const CartButton = styled.button`
display: flex;
flex-direction: column;
flex-wrap: wrap;
  background-color: black;
  border-radius: 8px;
  padding: 18px;
  margin: 4px;
  font-size: 14px;
  width: 25%;
  color: white;
  cursor: pointer;
`;

const InputField = styled.input`
  padding: 0.5em;
  margin: auto;
  font-size: 1rem;
  color: black;
  background-color: ghostwhite;
  display: flex;
  justify-content: center;
  text-align: center;
  border: none;
  border-radius: 3px;
`;

export default function ShoppingCartComponent(props) {
  const [count, setCount] = useState();
  const [cart, setCart] = useState(props.cart);
  const productsWithCartConditionData = cart.map((hat) => ({
    ...hat,
    ...props.products.find((product) => product.id === hat.id),
  }));


  return (
    <StyledRoot>
      <StyledOuterContainer>

        <StyledContainer><Title>Shopping Cart</Title>
      {productsWithCartConditionData.map((hat) => (
        <StyledContainerCart key={hat.id}>


      <Description>{hat.name}</Description><Description>{hat.price}</Description>
          <InputField
              id={hat.id}
              defaultValue={hat.count}
              onChange={(e) => setCount(e.currentTarget.value)}
            />
          <CartButton
              key={hat.id}
              onClick={(e) => {
                setCart(addToCookie(`${hat.id}`, count));
              }}
            >
              Update
            </CartButton>
            <CartButton
              key={hat.id}
              onClick={(e) => {
                setCart(removeFromCookie(`${hat.id}`));
              }}
            >
              Remove
            </CartButton>

            <Counter productsWithCartConditionData={productsWithCartConditionData} />

        </StyledContainerCart>))}

        </StyledContainer>
      </StyledOuterContainer>
    </StyledRoot>
  );
}
