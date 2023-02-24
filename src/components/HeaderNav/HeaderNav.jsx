import { NavigationLink, NavItem, NavList } from './HeaderNav.style';

export const HeaderNav = () => {
  return (
    <NavList>
      <NavItem>
        <NavigationLink to={'/'}>Головна</NavigationLink>
      </NavItem>
      <NavItem>
        <NavigationLink to={'/projects'}>Проєкти</NavigationLink>
      </NavItem>
      <NavItem>
        <NavigationLink to={'/services'}>Послуги</NavigationLink>
      </NavItem>
      <NavItem>
        <NavigationLink to={'/blog'}>Блог</NavigationLink>
      </NavItem>
      <NavItem>
        <NavigationLink to={'/company'}>Компанія</NavigationLink>
      </NavItem>
    </NavList>
  );
};
