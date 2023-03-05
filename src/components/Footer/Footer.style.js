import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr 3fr 3fr;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 70px 85px 40px;
`;
