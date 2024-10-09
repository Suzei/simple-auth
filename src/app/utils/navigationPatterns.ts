import { Navigation } from '../types/NavigationType';
import { UserTypes } from '../types/UserTypes';

interface NavigationText {
  title: string;
  button: string;
  goTo: string;
  back: string;
  permitted: UserTypes[];
  editPrivilege: UserTypes[];
}

export const navigationsKeys: Record<Navigation, NavigationText> = {
  categories: {
    title: 'Categorias',
    button: 'Nova categoria',
    goTo: 'dashboard/categories/new-category',
    back: 'dashboard/categories',
    permitted: ['admin', 'coordinator', 'tutor'],
    editPrivilege: ['admin', 'coordinator'],
  },
  courses: {
    title: 'Cursos',
    button: 'Novo curso',
    goTo: 'dashboard/courses/new-course',
    back: 'dashboard/courses',
    permitted: ['admin', 'student', 'tutor', 'coordinator'],
    editPrivilege: ['admin', 'coordinator'],
  },
  users: {
    title: 'Usuário',
    button: 'Novo usuário',
    goTo: 'dashboard/users/new-user',
    back: 'dashboard/users',
    permitted: ['admin'],
    editPrivilege: ['admin'],
  },
};
