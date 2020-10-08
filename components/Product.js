import React from 'react';
import styled from 'styled-components';
import BaseballHatLogo from '../images/BaseballHatLogo.png';

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
  font-size: 1rem;
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
  font-size: 1rem;
  color: ghostwhite;
  background-color: #2b2020;
  display: flex;
  justify-content: center;
`;

const Product = () => {
  return (
    <StyledRoot>
      <StyledOuterContainer>
        <StyledContainer>
          <Title>Trucker</Title>
          <Description>
            The classic, suitable for weddings, funerals even your mother in law
            would enjoy this style
          </Description>

          <BuyButton>BUY NOW $20</BuyButton>
        </StyledContainer>
      </StyledOuterContainer>
    </StyledRoot>
  );
};

export default Product;
