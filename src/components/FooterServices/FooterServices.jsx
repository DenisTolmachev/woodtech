import {
  FooterServicesContainer,
  FooterServicesTitle,
} from './FooterServices.style';
import { ServicesMenu } from '../ServicesMenu/ServicesMenu';

export const FooterServices = () => {
  return (
    <FooterServicesContainer>
      <FooterServicesTitle>Послуги</FooterServicesTitle>
      <ServicesMenu />
    </FooterServicesContainer>
  );
};
