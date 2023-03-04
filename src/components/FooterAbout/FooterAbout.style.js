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
  margin-top: 12px;
`;
