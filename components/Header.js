import Link from 'next/link';
import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LogoWhite from '../images/LogoWhite.png';
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
//   height: 4rem;
//   width: 4rem;
//   border: none;
// `;

const NavSection = styled.section`
  width: 30rem;
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

// const VisitedLink = styled.a`
//   text-decoration: none;
//   :hover & {
//     color: orange;
//   }
// `;

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
            <Link href="/collection">
              <NavText>COLLECTION</NavText>
            </Link>
          </NavText>
          <NavText>
            <Link href="/about">
              <NavText>ABOUT US</NavText>
            </Link>
          </NavText>
          <NavText>
            <Link href="/checkout">
              <ShoppingCartIcon style={{ cursor: 'pointer' }} />
            </Link>
          </NavText>
        </NavSection>
      </HeaderTop>
    </header>
  );
}

// <header
//   style={{
//     display: 'flex',
//     justifyContent: 'space-between',
//     padding: 30,
//     background: '#190000',
//     color: 'whitesmoke',
//     paddingLeft: 40,
//     paddingRight: 40,
//   }}
// >
//   <Link href="/">
//     <a>
//       <div
//         style={{
//           marginTop: -30,
//           marginLeft: 40,
//           paddingBottom: 30,

//           paddingLeft: 30,
//           paddingRight: 30,
//           position: 'absolute',
//           borderRadius: '0px 0px 60px 60px ',
//         }}
//       >
//         <img src="/LogoWhite.png" alt="Logo" width="150" />
//       </div>
//     </a>
//   </Link>
//   <Link href="/">
//     <a
//       style={{
//         color: 'white',
//         marginTop: 5,
//         marginLeft: '60%',
//         width: '4.5%',
//         textAlign: 'center',
//         paddingBottom: '-50px',
//       }}
//     >
//       <div style={{ borderBottom: '2px white solid', paddingBottom: 5 }}>
//         HOME
//       </div>
//     </a>
//   </Link>
//   <Link href="/collection">
//     <a
//       style={{
//         color: 'white',
//         marginTop: 5,
//         textAlign: 'center',
//       }}
//     >
//       <div style={{ borderBottom: '2px white solid', paddingBottom: 5 }}>
//         COLLECTION
//       </div>
//     </a>
//   </Link>

//   <Link href="/about">
//     <a
//       style={{
//         color: 'white',
//         marginTop: 5,
//         textAlign: 'center',
//       }}
//     >
//       <div style={{ borderBottom: '2px white solid', paddingBottom: 5 }}>
//         ABOUT US
//       </div>
//     </a>
//   </Link>
//   <div
//     style={{
//       marginRight: 15,
//     }}
//   >
//     <ShoppingCartIcon
//       style={{
//         marginTop: 5,
//       }}
//     />
//   </div>
// </header>
