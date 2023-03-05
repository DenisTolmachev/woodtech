import {
  LogoContainer,
  LogoIcon,
  LogoText,
  LogoTextContainer,
  LogoTitle,
} from './Logo.style';

export const Logo = ({ headerstyle, footerstyle }) => {
  return (
    <LogoContainer to={'/'}>
      <LogoIcon
        headerstyle={headerstyle}
        footerstyle={footerstyle}
        width='15'
        height='16'
        viewBox='0 0 15 16'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M10 0.762451H0V10.7625C0 13.5239 2.23858 15.7625 5 15.7625H15V5.76245C15 3.00103 12.7614 0.762451 10 0.762451ZM10 2.76243H2V10.7624C2 12.4193 3.34315 13.7624 5 13.7624H13V5.76243C13 4.10557 11.6569 2.76243 10 2.76243Z'
        />
      </LogoIcon>

      <LogoTextContainer>
        <LogoTitle headerstyle={headerstyle} footerstyle={footerstyle}>
          Woodtech
        </LogoTitle>
        <LogoText>Architecture</LogoText>
      </LogoTextContainer>
    </LogoContainer>
  );
};
