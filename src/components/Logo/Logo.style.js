import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoContainer = styled(NavLink)`
  display: flex;
`;

export const LogoIcon = styled.svg`
  width: 15px;
  height: 15px;
  ${props =>
    props.headerStyle &&
    css`
      fill: ${({ theme }) => theme.colors.accent};
    `}
  ${props =>
    props.footerStyle &&
    css`
      fill: ${({ theme }) => theme.colors.primaryText};
    `}
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
  ${props =>
    props.headerStyle &&
    css`
      color: ${({ theme }) => theme.colors.black};
    `}
  ${props =>
    props.footerStyle &&
    css`
      color: ${({ theme }) => theme.colors.primaryText};
      font-weight: ${({ theme }) => theme.fontWeights.extraBold};
    `}
`;

export const LogoText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.logoText};
  line-height: ${({ theme }) => theme.lineHeights.title};
  letter-spacing: 0.23em;
`;
