import {
  ServicesMenuItem,
  ServicesMenuLink,
  ServicesMenuList,
} from './ServicesMenu.style';

export const ServicesMenu = () => {
  return (
    <ServicesMenuList>
      <ServicesMenuItem>
        <ServicesMenuLink to={'/'}>Дизайн інтер'єру</ServicesMenuLink>
      </ServicesMenuItem>
      <ServicesMenuItem>
        <ServicesMenuLink to={'/'}>Проектування</ServicesMenuLink>
      </ServicesMenuItem>
      <ServicesMenuItem>
        <ServicesMenuLink to={'/'}>Виїзд майстра</ServicesMenuLink>
      </ServicesMenuItem>
      <ServicesMenuItem>
        <ServicesMenuLink to={'/'}>Постачання дерева</ServicesMenuLink>
      </ServicesMenuItem>
      <ServicesMenuItem>
        <ServicesMenuLink to={'/'}>Ремонт</ServicesMenuLink>
      </ServicesMenuItem>
      <ServicesMenuItem>
        <ServicesMenuLink to={'/'}>Концепт</ServicesMenuLink>
      </ServicesMenuItem>
    </ServicesMenuList>
  );
};
