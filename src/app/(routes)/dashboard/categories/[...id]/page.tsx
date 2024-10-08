'use client';

import { CreateCategory } from '@/app/_server_components/(dashboard)/categories/action';
import { Form } from '@/app/components/Form';
import { categoriesSchema } from '@/app/lib/zod/dashboardSchemas';
import { RegisterCategoryInputs } from '@/app/utils/dashboardInputs';
function CreateEditCategory() {
  return (
    <Form
      formType="dashboard"
      onSubmitFunction={CreateCategory}
      schema={categoriesSchema}
      inputs={RegisterCategoryInputs}
    />
  );
}

export default CreateEditCategory;
