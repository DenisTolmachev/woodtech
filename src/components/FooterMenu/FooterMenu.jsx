import { FooterMenuContainer, FooterMenuTitle } from './FooterMenu.style';
import { Navigation } from '../Navigation/Navigation';

export const FooterMenu = () => {
  return (
    <FooterMenuContainer>
      <FooterMenuTitle>Меню</FooterMenuTitle>
      <Navigation footerStyle={true} />
    </FooterMenuContainer>
  );
};
