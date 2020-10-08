import Layout from '../components/Layout';
import styled from 'styled-components';
import About from '../components/About';

const MainWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export default function LandingPage() {
  return (
    <Layout>
      <About />
    </Layout>
  );
}
