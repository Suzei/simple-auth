'use client';

import { RegisterFormInputs } from '@/app/utils/formInputs';
import { CreateUser } from '@/app/_server_components/(login)/userActions';
import { Form } from '@/app/components/Form';
import { createAccountSchema } from '@/app/lib/zod/loginSchemas';

function CreateAccount() {
  return (
    <Form
      formType="createAccount"
      schema={createAccountSchema}
      inputs={RegisterFormInputs}
      onSubmitFunction={CreateUser}
    />
  );
}

export default CreateAccount;
