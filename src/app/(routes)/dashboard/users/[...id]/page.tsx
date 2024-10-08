'use client';
import {
  GetUserByID,
  GetUserType,
} from '@/app/_server_components/(dashboard)/(users)/action';
import {
  CreateUser,
  EditUser,
} from '@/app/_server_components/(login)/userActions';
import { Form } from '@/app/components/Form';
import { createAccountSchema } from '@/app/lib/zod/loginSchemas';
import { RegisterUserDashboard } from '@/app/utils/dashboardInputs';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

function CreateEditUser() {
  const param = useParams();

  const query = useQuery({
    queryKey: ['user'],
    queryFn: () => GetUserType(),
  });
  console.log(query);
  return (
    <Form
      schema={createAccountSchema}
      onSubmitFunction={CreateUser}
      updateValues={EditUser}
      inputs={RegisterUserDashboard}
      formType="dashboard"
    />
  );
}

export default CreateEditUser;
