import { NavigationLink, NavItem, NavList } from './Navigation.style';

export const Navigation = ({ headerstyle, footerstyle }) => {
  return (
    <NavList headerstyle={headerstyle} footerstyle={footerstyle}>
      <NavItem>
        <NavigationLink
          headerstyle={headerstyle}
          footerstyle={footerstyle}
          to={'/'}
        >
          Головна
        </NavigationLink>
      </NavItem>
      <NavItem>
        <NavigationLink
          headerstyle={headerstyle}
          footerstyle={footerstyle}
          to={'/projects'}
        >
          Проєкти
        </NavigationLink>
      </NavItem>
      <NavItem>
        <NavigationLink
          headerstyle={headerstyle}
          footerstyle={footerstyle}
          to={'/services'}
        >
          Послуги
        </NavigationLink>
      </NavItem>
      <NavItem>
        <NavigationLink
          headerstyle={headerstyle}
          footerstyle={footerstyle}
          to={'/blog'}
        >
          Блог
        </NavigationLink>
      </NavItem>
      <NavItem>
        <NavigationLink
          headerstyle={headerstyle}
          footerstyle={footerstyle}
          to={'/company'}
        >
          Компанія
        </NavigationLink>
      </NavItem>
    </NavList>
  );
};
