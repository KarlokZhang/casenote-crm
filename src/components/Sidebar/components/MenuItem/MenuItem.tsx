import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.a`
  padding: 8px 12px 8px 24px;
  margin-right: 24px;
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

  :hover,
  :focus {
    color: #ffffff;
  }

  :focus {
    background-color: #0a8fdc;
    border-radius: 0px 30px 30px 0px;
    pointer-events: none;
    transition: border-radius 0.15s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  }
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
  return (
    <Wrapper>
      <IconWrapper>
        <i className={`las la-${icon}`} />
      </IconWrapper>
      <span>{title}</span>
      <Link to={link}>{title}</Link>
    </Wrapper>
  );
};

export default MenuItem;
