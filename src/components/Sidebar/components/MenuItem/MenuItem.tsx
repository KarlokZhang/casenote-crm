import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.a`
  padding: 8px 12px 8px 24px;
  color: #808183;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  height: 30px;
  text-decoration: none;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  align-items: center;

  :hover,
  :focus {
    color: #ffffff;
  }

  :focus {
    background-color: #0a8fdc;
    border-radius: 0px 30px 30px 0px;
    pointer-events: none;
    margin-right: 24px;
    transition: border-radius 0.15s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  }
`;

const MenuItem: React.FC = () => {
  return <Wrapper href="#">This is Menu Item</Wrapper>;
};

export default MenuItem;
