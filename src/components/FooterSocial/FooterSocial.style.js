import styled from 'styled-components';

export const FooterSocialContainer = styled.div``;

export const FooterSocialTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  line-height: ${({ theme }) => theme.lineHeights.nav};
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  position: relative;
  margin-bottom: 33px;

  &:after {
    content: '';
    position: absolute;
    height: 2px;
    width: 20px;
    bottom: -15px;
    left: 0;
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const FooterSocialText = styled.p`
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ theme }) => theme.lineHeights.nav};
  margin-top: 12px;
`;
