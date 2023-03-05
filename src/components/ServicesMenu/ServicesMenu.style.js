import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ServicesMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ServicesMenuItem = styled.li``;

export const ServicesMenuLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.lineHeights.link};
  color: ${({ theme }) => theme.colors.primaryText};

  &:hover,
  &:focus,
  &:active {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
