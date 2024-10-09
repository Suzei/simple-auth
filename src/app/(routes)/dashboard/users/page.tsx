'use client';

import {
  DeleteUser,
  GetUserList,
} from '@/app/_server_components/(dashboard)/(users)/action';
import { Table } from '@/app/components/Table';

function Users() {
  return (
    <>
      <Table
        deleteAction={DeleteUser}
        navigationTo="users"
        populateTable={GetUserList}
      />
    </>
  );
}

export default Users;
