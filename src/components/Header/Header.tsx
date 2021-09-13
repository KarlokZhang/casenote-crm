import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  box-shadow: 4px 3px 4px 0px rgb(0 0 0 / 12%);
  background-color: #ffffff;
  color: #495057;
  display: flex;
  flex-direction: row;
  height: 70px;
`;

const Header: React.FC = () => {
  return <Wrapper>This is Header</Wrapper>;
};

export default Header;
