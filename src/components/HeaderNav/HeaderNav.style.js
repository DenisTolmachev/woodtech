import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  gap: 27px;
`;

export const NavItem = styled.li``;

export const NavigationLink = styled(NavLink)`
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.lineHeights.link};
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  padding: 10px 14px;
  border-radius: 0 5px;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;
