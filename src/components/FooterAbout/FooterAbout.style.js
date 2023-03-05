import styled from 'styled-components';

export const FooterAboutContainer = styled.div`
  width: 350px;
`;

export const FooterAboutTitle = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  margin-top: 32px;
`;

export const FooterAboutText = styled.p`
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ theme }) => theme.lineHeights.nav};
  margin-top: 12px;
`;
