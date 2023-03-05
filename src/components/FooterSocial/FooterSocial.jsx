import {
  FooterSocialContainer,
  FooterSocialText,
  FooterSocialTitle,
} from './FooterSocial.style';
import { FooterSocialList } from '../SocialLists/FooterSocialList/FooterSocialList';

export const FooterSocial = () => {
  return (
    <FooterSocialContainer>
      <FooterSocialTitle>ми в соціальних мережах</FooterSocialTitle>
      <FooterSocialText>
        Підпишіться на нас у соціальних мережах, щоб не пропустити вихід нових
        неймовірних проєктів, розроблених для наших клієнтів по всьому світу.
      </FooterSocialText>
      <FooterSocialList />
    </FooterSocialContainer>
  );
};
