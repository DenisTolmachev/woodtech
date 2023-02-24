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
    <LogoContainer>
      <LogoIcon src={logoIcon} alt='wallet-icon' />
      <LogoTextContainer>
        <LogoTitle>Woodtech</LogoTitle>
        <LogoText>Architecture</LogoText>
      </LogoTextContainer>
    </LogoContainer>
  );
};
