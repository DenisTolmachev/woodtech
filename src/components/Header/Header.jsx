import { Container } from './Header.style';
import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';
import { HeaderSocialList } from '../SocialLists/HeaderSocialList/HeaderSocialList';

export const Header = () => {
  return (
    <Container>
      <Logo headerstyle='true' />
      <Navigation headerstyle='true' />
      <HeaderSocialList />
    </Container>
  );
};
