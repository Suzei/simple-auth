import { FormInputs } from '../components/Form';

export const RegisterFormInputs: FormInputs[] = [
  {
    placeholder: 'Digite seu nome',
    register: 'name',
    type: 'text',
    label: 'Nome',
  },

  {
    placeholder: 'Digite seu username',
    register: 'username',
    type: 'text',
    label: 'Username',
  },

  {
    placeholder: 'Digite seu e-mail',
    register: 'email',
    type: 'email',
    label: 'E-mail',
  },

  {
    placeholder: 'Nova senha',
    register: 'password',
    type: 'password',
    label: 'Senha',
  },

  {
    placeholder: 'Confirme sua senha',
    register: 'passwordConfirm',
    type: 'password',
    label: 'Confirmar senha',
  },
];

export const LoginInputs: FormInputs[] = [
  { type: 'email', register: 'email', placeholder: 'Seu e-mail' },
  { type: 'password', register: 'password', placeholder: 'Sua senha' },
];

export const PasswordRecoveryInputs: FormInputs[] = [
  { type: 'email', register: 'email', placeholder: 'Digite seu e-mail' },
];

export const PasswordConfirmInputs: FormInputs[] = [
  {
    placeholder: 'Nova senha',
    register: 'password',
    type: 'password',
  },

  {
    placeholder: 'Confirme sua senha',
    register: 'passwordConfirm',
    type: 'password',
  },
];
