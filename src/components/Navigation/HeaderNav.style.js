import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  ${props =>
    props.headerStyle &&
    css`
      gap: 27px;
    `}
  ${props =>
    props.footerStyle &&
    css`
      flex-direction: column;
      gap: 15px;
    `}
`;

export const NavItem = styled.li``;

export const NavigationLink = styled(NavLink)`
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.lineHeights.link};

  ${props =>
    props.headerStyle &&
    css`
      color: ${({ theme }) => theme.colors.black};
      background-color: ${({ theme }) => theme.colors.white};
      padding: 10px 14px;
      border-radius: 0 5px;
    `}
  ${props =>
    props.footerStyle &&
    css`
      color: ${({ theme }) => theme.colors.primaryText};
    `}
  &:hover,
  &:focus,
  &:active {
    ${props =>
      props.headerStyle &&
      css`
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.accent};
      `}
    ${props =>
      props.footerStyle &&
      css`
        color: ${({ theme }) => theme.colors.accent};
      `}
  }
`;
