import React from 'react';
import Link from 'next/link';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import styled from 'styled-components';

const FooterBottom = styled.footer`
  background: #2b2020;
  height: 6rem;
  padding: 20;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;
const IconBox = styled.section`
  width: 30rem;
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  background: #2b2020;
  color: ghostwhite;
  margin: auto;
`;

const Copyright = styled.p`
  display: 'flex';
  justify-content: center;
  background: #2b2020;
  color: ghostwhite;
  text-align: center;
  line-height: 1.6;
  font-size: 12px;
  padding-bottom: 30;
`;

export default function Footer() {
  return (
    <footer>
      <FooterBottom>
        <IconBox>
          <Link href="https://www.facebook.com">
            <FacebookIcon style={{ cursor: 'pointer' }} />
          </Link>

          <InstagramIcon style={{ cursor: 'pointer' }} />
          <TwitterIcon style={{ cursor: 'pointer' }} />
          <YouTubeIcon style={{ cursor: 'pointer' }} />
          <EmailIcon style={{ cursor: 'pointer' }} />
        </IconBox>

        <Copyright> ©Copyright 2020 All rights reserved. Briktop®</Copyright>
      </FooterBottom>
    </footer>
  );
}

// 'Copyright 2020 All rights reserved. Briktop'
