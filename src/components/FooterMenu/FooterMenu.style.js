import styled from 'styled-components';

export const FooterMenuContainer = styled.div``;

export const FooterMenuTitle = styled.h2`
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
