import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoContainer = styled(NavLink)`
  display: flex;
`;

export const LogoIcon = styled.img`
  width: 15px;
  height: 15px;
`;

export const LogoTextContainer = styled.div`
  margin-left: 7px;
`;

export const LogoTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.black};
  text-transform: uppercase;
  line-height: ${({ theme }) => theme.lineHeights.logo};
`;

export const LogoText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.logoText};
  line-height: ${({ theme }) => theme.lineHeights.title};
  letter-spacing: 0.23em;
`;
