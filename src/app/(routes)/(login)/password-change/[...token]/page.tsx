'use client';

import { Form } from '@/app/components/Form';
import { PasswordConfirmInputs } from '@/app/utils/formInputs';
import { useParams } from 'next/navigation';
import { z } from 'zod';

const schema = z.object({
  password: z.string(),
  passwordConfirm: z.string(),
});

export default function PasswordChange() {
  const params = useParams();

  return (
    <Form
      schema={schema}
      formType="forgotPassword"
      inputs={PasswordConfirmInputs}
      onSubmitFunction={() => params.token}
    />
  );
}
