import { FormInputs } from '../components/Form';
import { RegisterFormInputs } from './formInputs';

export const RegisterUserDashboard: FormInputs[] = [
  ...RegisterFormInputs,
  {
    register: 'type',
    type: 'select',
    label: 'Tipo',
    select: [],
  },
];

export const RegisterCategoryInputs: FormInputs[] = [
  {
    register: 'name',
    label: 'Nome',
    type: 'text',
  },

  {
    register: 'category_mother',
    label: 'Categoria mãe',
    select: [{ label: 'catchigas', value: 'CATCHIGORIAM' }],
  },

  {
    register: 'description',
    type: 'text',
    label: 'Descrição',
  },
];

export const RegisterCourseInput: FormInputs[] = [
  {
    register: 'name',
    label: 'Nome',
    type: 'text',
  },

  {
    register: 'category',
    label: 'Categoria',
    select: [],
  },

  {
    register: 'objetives',
    label: 'Objetivo',
    type: 'text',
  },

  {
    register: 'description',
    label: 'Descrição',
    type: 'text',
  },

  {
    register: 'published',
    type: 'checkbox',
    label: 'Publicado',
  },
];
