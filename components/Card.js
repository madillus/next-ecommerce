import React from 'react';
import styled from 'styled-components';
import BaseballHatLogo from '../images/BaseballHatLogo.png';

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

// const StyledPhoto = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   background-image: url(${BaseballHatLogo});
// `;

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
  font-size: 5rem;
  color: #fff;
  font-weight: 300;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`;

const Card = ({ title, description }) => (
  <StyledContainer>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </StyledContainer>
);

export default Card;
