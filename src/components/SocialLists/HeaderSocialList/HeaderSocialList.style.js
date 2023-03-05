import styled from 'styled-components';

export const SocialList = styled.ul`
  display: flex;
  gap: 10px;
`;

export const SocialItem = styled.li``;

export const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.socialIcons};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
