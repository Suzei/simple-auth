'use client';
import {
  DeleteCategory,
  GetCategories,
} from '@/app/_server_components/(dashboard)/categories/action';
import { Table } from '@/app/components/Table';

function Categories() {
  return (
    <Table
      deleteAction={DeleteCategory}
      populateTable={GetCategories}
      navigationTo="categories"
    />
  );
}

export default Categories;
