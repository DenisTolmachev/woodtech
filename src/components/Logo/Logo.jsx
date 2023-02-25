import {
  LogoContainer,
  LogoIcon,
  LogoText,
  LogoTextContainer,
  LogoTitle,
} from './Logo.style';
import logoIcon from '../img/logo.svg';

export const Logo = () => {
  return (
    <LogoContainer to={'/'}>
      <LogoIcon src={logoIcon} alt='logo-icon' />
      <LogoTextContainer>
        <LogoTitle>Woodtech</LogoTitle>
        <LogoText>Architecture</LogoText>
      </LogoTextContainer>
    </LogoContainer>
  );
};
