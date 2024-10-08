'use client';

import { z } from 'zod';
import { CreateSession } from '@/app/_server_components/(login)/userActions';
import { LoginInputs } from '@/app/utils/formInputs';
import { Form } from './components/Form';

const schema = z.object({
  email: z.string(),
  password: z.string(),
});

export default function Home() {
  return (
    <Form
      schema={schema}
      formType="auth"
      onSubmitFunction={CreateSession}
      inputs={LoginInputs}
    />
  );
}
