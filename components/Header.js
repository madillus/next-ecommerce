import Link from 'next/link';
import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import styled from 'styled-components';

const HeaderTop = styled.header`
  display: flex;
  justify-content: space-around;
  background: #2b2020;
  height: 6rem;
  padding: 20;
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
`;
// const Logo = styled.img`
//   background-image: url(${LogoWhite});
//   background-attachment: local;
//   background-size: contain;
//   background-repeat: no-repeat;
//   background-position: center;
//   margin-right: auto;
//   margin-left: auto;
//   width: auto;
//   height: auto;
//   border: none
// `;

const NavSection = styled.section`
  width: 40rem;
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  background: #2b2020;
  color: ghostwhite;
  margin: auto;
`;

const NavText = styled.a`
  text-decoration: none;
  color: ghostwhite;
  margin-top: 0.5rem;
  border-bottom: 0.25rem ghostwhite;
  padding-bottom: 0.5rem;
  :hover & {
    color: #933a16;
    cursor: pointer;
  }
`;

export default function Header(props) {
  return (
    <header>
      {props.children}
      <HeaderTop>
        <NavSection>
          <NavText>
            <Link href="/">
              <NavText>HOME</NavText>
            </Link>
          </NavText>
          <NavText>
            <Link href="/products/product-list">
              <NavText>COLLECTION</NavText>
            </Link>
          </NavText>

          <NavText>
            <Link href="/about">
              <NavText>ABOUT US</NavText>
            </Link>
          </NavText>
          <NavText>
            <Link href="/products/shopping-cart">
              <ShoppingCartIcon style={{ cursor: 'pointer' }} />
            </Link>
          </NavText>
        </NavSection>
      </HeaderTop>
    </header>
  );
}
