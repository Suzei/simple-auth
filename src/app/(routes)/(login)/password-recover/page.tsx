'use client';

import { z } from 'zod';
import { CreatePasswordRecovery } from '@/app/_server_components/(login)/passwordRecoveryActions';
import { PasswordRecoveryInputs } from '@/app/utils/formInputs';
import { Form } from '@/app/components/Form';

const schema = z.object({
  email: z.string().email('Não é um e-mail válido'),
});

function PasswordRecover() {
  return (
    <Form
      schema={schema}
      formMessages="forgotPassword"
      inputs={PasswordRecoveryInputs}
      onSubmitFunction={CreatePasswordRecovery}
    />
  );
}

export default PasswordRecover;
