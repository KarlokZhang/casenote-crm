import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 70px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2d313c;
`;

const UserInfo: React.FC = () => {
  return <Wrapper>This is User Info</Wrapper>;
};

export default UserInfo;
