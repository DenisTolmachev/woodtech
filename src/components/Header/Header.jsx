import { Container } from './Header.style';
import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';
import { HeaderSocial } from '../HeaderSocial/HeaderSocial';

export const Header = () => {
  return (
    <Container>
      <Logo headerStyle={true} />
      <Navigation headerStyle={true} />
      <HeaderSocial />
    </Container>
  );
};
