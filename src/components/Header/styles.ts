import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  transition: opacity 0.2s;

  border: solid #ff872c;
  border-width: 0;

  ${({ to }) =>
    to === useLocation().pathname
      ? css`
          border-width: 0 0 2px 0;
        `
      : css`
          opacity: 80%;
        `}

  & + a {
    margin-left: 32px;
  }

  &:hover {
    opacity: 0.6;
  }
`;
