import { NavigationLink, NavItem, NavList } from './Navigation.style';

export const Navigation = ({ headerStyle, footerStyle }) => {
  return (
    <NavList headerStyle={headerStyle} footerStyle={footerStyle}>
      <NavItem>
        <NavigationLink
          headerStyle={headerStyle}
          footerStyle={footerStyle}
          to={'/'}
        >
          Головна
        </NavigationLink>
      </NavItem>
      <NavItem>
        <NavigationLink
          headerStyle={headerStyle}
          footerStyle={footerStyle}
          to={'/projects'}
        >
          Проєкти
        </NavigationLink>
      </NavItem>
      <NavItem>
        <NavigationLink
          headerStyle={headerStyle}
          footerStyle={footerStyle}
          to={'/services'}
        >
          Послуги
        </NavigationLink>
      </NavItem>
      <NavItem>
        <NavigationLink
          headerStyle={headerStyle}
          footerStyle={footerStyle}
          to={'/blog'}
        >
          Блог
        </NavigationLink>
      </NavItem>
      <NavItem>
        <NavigationLink
          headerStyle={headerStyle}
          footerStyle={footerStyle}
          to={'/company'}
        >
          Компанія
        </NavigationLink>
      </NavItem>
    </NavList>
  );
};
