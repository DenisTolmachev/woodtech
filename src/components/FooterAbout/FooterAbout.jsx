import {
  FooterAboutContainer,
  FooterAboutText,
  FooterAboutTitle,
} from './FooterAbout.style';
import { Logo } from '../Logo/Logo';

export const FooterAbout = () => {
  return (
    <FooterAboutContainer>
      <Logo footerStyle={true} />
      <FooterAboutTitle>Коротко про нас</FooterAboutTitle>
      <FooterAboutText>
        Ми досконально опрацьовуємо, а потім обговорюємо з нашими клієнтами
        зовнішній вигляд кожного виробу. Ми вкрай рідко повторюємося, адже ми
        знаємо, що Ви цінуєте індивідуальність і не готові задовольнятися
        готовими рішеннями.
      </FooterAboutText>
    </FooterAboutContainer>
  );
};
