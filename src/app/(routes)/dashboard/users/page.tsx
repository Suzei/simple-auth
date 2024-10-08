'use client';

import {
  DeleteUser,
  GetUserList,
} from '@/app/_server_components/(dashboard)/(users)/action';
import { Logout } from '@/app/_server_components/(login)/userActions';
import { Table } from '@/app/components/Table';

function Users() {
  <button onClick={Logout}>Deslogar</button>;

  return (
    <Table
      deleteAction={DeleteUser}
      navigationTo="users"
      populateTable={GetUserList}
    />
  );
}

export default Users;
