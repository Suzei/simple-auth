'use client';

import { z } from 'zod';
import { LoginInputs } from '@/app/utils/formInputs';
import { Form } from './components/Form';
import { ILoginRequest } from './interfaces/ICreateSession';
import Pocketbase from 'pocketbase';
import { pbUrl } from './lib/pBUrl';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box } from './components/Box';
import Link from 'next/link';

const schema = z.object({
  email: z.string().min(8, 'Preencha um e-mail válido'),
  password: z.string().min(7, 'Mínimo de 7 caracteres'),
});

type loginSchema = z.infer<typeof schema>;

export default function Home() {
  const pb = new Pocketbase(pbUrl);
  const router = useRouter();
  async function CreateSession(data: ILoginRequest) {
    try {
      const { token, record: model } = await pb
        .collection('users')
        .authWithPassword(data.email, data.password);

      const cookie = JSON.stringify({ token, model });

      setCookie('pb_auth', cookie, {
        secure: true,
        path: '/',
        sameSite: 'strict',
        httpOnly: false,
      });

      router.push('/dashboard');
    } catch (error) {
      console.log(error.data);
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<loginSchema>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  console.log(errors);

  function onSubmit(data: loginSchema) {
    CreateSession(data);
  }

  return (
    <Box authOption="auth">
      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <input type="text" {...register('email')} />
          <Link href="/password-recover">Esqueceu a senha?</Link>
          <input type="password" {...register('password')} />
        </section>
        <button disabled={!isValid} type="submit">
          {!isDirty || !isValid
            ? 'Por favor, preencha os campos'
            : 'Fazer login'}
        </button>
      </form>
    </Box>
  );
}
