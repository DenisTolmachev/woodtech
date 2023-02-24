import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 34px 85px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
`;
