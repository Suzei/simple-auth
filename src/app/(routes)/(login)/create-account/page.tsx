'use client';

import { RegisterFormInputs } from '@/app/utils/formInputs';
import { CreateUser } from '@/app/_server_components/(login)/userActions';
import { Form } from '@/app/components/Form';
import { createAccountSchema } from '@/app/lib/zod/loginSchemas';
import { Box } from '@/app/components/Box';
import Loading from '@/app/loading';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { User } from '@/app/entities/User';

type createAccountSchema = z.infer<typeof createAccountSchema>;

async function CreateAccount() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm<createAccountSchema>({
    resolver: zodResolver(createAccountSchema),
  });

  async function onSubmit(data: FormData) {
    CreateUser(data);
  }
  return (
    <Box authOption="createAccount">
      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <input placeholder="Seu nome" type="text" {...register('name')} />
          <div>
            <div>
              <input
                placeholder="Seu username"
                type="text"
                {...register('username')}
              />
              {errors.username?.message}
            </div>
            <div>
              <input placeholder="" type="Seu e-mail" {...register('email')} />
            </div>
          </div>
          <input
            placeholder="Sua senha"
            type="password"
            {...register('password')}
          />
          <input
            placeholder="Confirme sua senha"
            type="password"
            {...register('passwordConfirm')}
          />
        </section>
        <button type="submit" disabled={!isDirty || !isValid || isSubmitting}>
          {!isDirty || !isValid
            ? 'Por favor, preencha os dados'
            : 'Criar conta'}
        </button>
      </form>
    </Box>
  );
}

export default CreateAccount;
