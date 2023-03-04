import { Container } from './Header.style';
import { Logo } from '../Logo/Logo';
import { HeaderNav } from '../HeaderNav/HeaderNav';
import { HeaderSocial } from '../HeaderSocial/HeaderSocial';

export const Header = () => {
  return (
    <Container>
      <Logo headerStyle={true} />
      <HeaderNav />
      <HeaderSocial />
    </Container>
  );
};
