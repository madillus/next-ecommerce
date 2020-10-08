import GlobalStyles from '../components/GlobalStyles';
import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';
import styled from 'styled-components';
import Items from '../components/Items';

export default function collectionpage() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <Items />
    </Layout>
  );
}

// import BackgroundBrick from '../images/BackgroundBrick.png';

// const Image = styled.div`
//   background-image: url(${BackgroundBrick.png}) no-repeat;
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   z-index: -5;
// `;

// const Content = styled.div`
//     border: 1px solid #000;
//     background-image: src='BackgroundBrick.png'
//     width: 2000px;
//     height: 2000px;
// `;

// const ImageDiv = styled.div`
//   height: 100%;
//   width: 100%;
//   float: left;
//   background-repeat: no-repeat;
//   background-position: left;
//   background-size: cover;
//   background-image: ${`url(${BackgroundBrick})`};
// `;

{
  /* <container className="gridcontainer">
          <div className="grid1">
            <Link href="/1">
              <a>
                <div className="gridItemContainer">
                  <img src="BaseballHatLogo.png" alt="Logo" width="250" />
                  <div className="gridItemContainerInfo">
                    <p>trucker</p>
                  </div>
                </div>
              </a>
            </Link>
          </div>

          <div className="grid2">
            <Link href="/2">
              <a>
                <div className="gridItemContainer">
                  <img src="BaseballHatLogo.png" alt="Logo" width="250" />
                  <div className="gridItemContainerInfo">
                    <p>baseball</p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          {/* <div className="grid3">
            <Link href="/3">
              <a>
                <div className="gridItemContainer">
                  <img src="BaseballHatLogo.png" alt="Logo" width="250" />
                  <div className="gridItemContainerInfo">
                    <p>beanie</p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <div className="grid4">
            <Link href="/4">
              <a>
                <div className="gridItemContainer">
                  <img src="BaseballHatLogo.png" alt="Logo" width="250" />
                  <div className="gridItemContainerInfo">
                    <p>bobble</p>
                  </div>
                </div>
              </a>
            </Link>
          </div> */
}
// </container> */}
