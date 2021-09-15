import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const LinkWrapper = styled(Link)<{ selected: any }>`
  padding: 8px 12px 8px 24px;
  margin-right: 24px;
  margin-top: 12px;
  color: #808183;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  height: 30px;
  text-decoration: none;
  transition: background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  align-items: center;
  font-weight: 300;
  font-size: 1.2rem;
  border-radius: 0px 30px 30px 0px;

  :hover {
    color: #ffffff;
    background-color: #1a83ff;
  }

  ${({ selected }) =>
    selected &&
    css`
      background-color: #0a8fdc;
      color: #ffffff;
      transition: border-radius 0.15s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    `}
`;

const IconWrapper = styled.div`
  font-size: 1.6rem;
  padding: 0 1rem;
`;

type MenuProps = {
  title: string;
  icon: string;
  link: string;
};

const MenuItem: React.FC<MenuProps> = ({ title, icon, link }) => {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState((prevState) => !prevState);
  };

  return (
    <LinkWrapper to={link} selected={state} onClick={handleClick}>
      <IconWrapper>
        <i className={`las la-${icon}`} />
      </IconWrapper>
      <span>{title}</span>
    </LinkWrapper>
  );
};

export default MenuItem;
