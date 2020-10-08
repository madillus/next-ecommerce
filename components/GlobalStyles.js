import React from 'react';
import { createGlobalStyle } from 'styled-components';
import BackgroundBrick from '../images/BackgroundBrick.png';

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  text-decoration: none;
  }
  body {
    height: 100%;
    background-image: url(${BackgroundBrick});
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    font-family: Arial, Helvetica, Verdana, sans-serif;
    font-size: 16px;
    font-weight: normal;
    letter-spacing: .03rem;
    margin: 0 auto;
    text-decoration: none;
    z-index: -1;
  }
  a {
    text-decoration: none;

  }


`;

export default GlobalStyles;
