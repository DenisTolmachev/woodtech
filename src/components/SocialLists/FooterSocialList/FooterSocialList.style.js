import styled from 'styled-components';

export const SocialList = styled.ul`
  display: flex;
  gap: 5px;
  margin-top: 25px;
`;

export const SocialItem = styled.li`
  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.colors.primaryText};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.primaryText};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.accent};
  }
`;
