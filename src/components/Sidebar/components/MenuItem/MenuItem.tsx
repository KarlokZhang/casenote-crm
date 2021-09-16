import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const LinkWrapper = styled(Link)<{ select: any }>`
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

  ${({ select }) =>
    select &&
    css`
      border-radius: 0px 30px 30px 0px;
      background-color: #1a83ff;
      color: #ffffff;
    `}
`;

const IconWrapper = styled.div`
  font-size: 1.6rem;
  padding: 0 1rem;
`;

type MenuProps = {
  title: string;
  icon: string;
  path: string;
  selected: string;
  onClick: () => void;
};

const MenuItem: React.FC<MenuProps> = ({
  title,
  icon,
  path,
  selected,
  onClick,
}) => {
  return (
    <LinkWrapper
      to={path}
      select={selected === path ? 'true' : undefined}
      onClick={onClick}
    >
      <IconWrapper>
        <i className={`las la-${icon}`} />
      </IconWrapper>
      <span>{title}</span>
    </LinkWrapper>
  );
};

export default MenuItem;
