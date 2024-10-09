'use client';

import { z } from 'zod';
import { Box } from '@/app/components/Box';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreatePasswordRecovery } from '@/app/_server_components/(login)/passwordRecoveryActions';

const schema = z.object({
  email: z.string().email('Não é um e-mail válido'),
});

type forgotPasswordSchema = z.infer<typeof schema>;

async function PasswordRecover() {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid, isSubmitting, errors },
  } = useForm<forgotPasswordSchema>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  async function onSubmit(data: forgotPasswordSchema) {
    await CreatePasswordRecovery({ email: data.email });
  }
  return (
    <Box authOption="forgotPassword">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Seu e-mail" type="text" {...register('email')} />
      </form>
      <button type="submit" disabled={!isDirty || !isValid}>
        Solicitar nova senha
      </button>
    </Box>
  );
}

export default PasswordRecover;
