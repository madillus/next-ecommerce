import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const StyledRoot = styled.div`
  padding: 50px 12px;
`;

const StyledContainer = styled.div`
  max-width: 60rem;
  display: flex;
  width: 100%;
  height: 100%;
  margin: auto;
`;

const Parent = () => {
  return (
    <StyledRoot>
      <StyledContainer>
        <Card title="BRIK" description="TOP" />
      </StyledContainer>
    </StyledRoot>
  );
};

export default Parent;
