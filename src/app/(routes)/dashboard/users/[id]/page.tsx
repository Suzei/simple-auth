'use client';
import {
  GetUserById,
  GetUserType,
} from '@/app/_server_components/(dashboard)/(users)/action';
import {
  CreateUser,
  EditUser,
} from '@/app/_server_components/(login)/userActions';
import { Form } from '@/app/components/Form';
import { createAccountSchema } from '@/app/lib/zod/loginSchemas';
import { RegisterUserDashboard } from '@/app/utils/dashboardInputs';

function CreateEditUser() {
  return (
    <Form
      schema={createAccountSchema}
      populateSelect={GetUserType}
      onSubmitFunction={CreateUser}
      updateValues={EditUser}
      inputs={RegisterUserDashboard}
      formType="dashboard"
    />
  );
}

export default CreateEditUser;
