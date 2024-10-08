import { Navigation } from '../types/NavigationType';

interface NavigationText {
  title: string;
  button: string;
  goTo: string;
  back: string;
}

export const navigationsKeys: Record<Navigation, NavigationText> = {
  categories: {
    title: 'Categorias',
    button: 'Nova categoria',
    goTo: 'dashboard/categories/new-category',
    back: 'dashboard/categories',
  },
  courses: {
    title: 'Categorias',
    button: 'Novo curso',
    goTo: 'dashboard/courses/new-course',
    back: 'dashboard/courses',
  },
  users: {
    title: 'Usuário',
    button: 'Novo usuário',
    goTo: 'dashboard/users/new-user',
    back: 'dashboard/users',
  },
};
