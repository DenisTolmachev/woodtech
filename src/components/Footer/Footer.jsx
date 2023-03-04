import { Container } from './Footer.style';
import { FooterAbout } from '../FooterAbout/FooterAbout';
import { FooterMenu } from '../FooterMenu/FooterMenu';
import { FooterServices } from '../FooterServices/FooterServices';
import { FooterSocial } from '../FooterSocial/FooterSocial';

export const Footer = () => {
  return (
    <Container>
      <FooterAbout />
      <FooterMenu />
      <FooterServices />
      <FooterSocial />
    </Container>
  );
};