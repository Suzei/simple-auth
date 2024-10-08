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
