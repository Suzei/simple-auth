import { pbUrl } from '@/app/lib/pBUrl';
import Pocketbase from 'pocketbase';
const cookies = require('next/headers');

const pb = new Pocketbase(pbUrl);

export async function GetUserByCookie() {
  const cookie = cookies().get('pb_auth');

  if (!cookie) {
    return false;
  }

  pb.authStore.loadFromCookie(cookie.value || '');
  return pb.authStore.model;
}

export async function GetUserList() {
  const users = await pb.collection('users').getList(1, 10, {
    sort: '-updated',
    requestKey: null,
  });

  return users;
}

export async function GetUserByID(id: string) {
  const user = await pb.collection('users').getOne(id);
  console.log(user);

  return user;
}

export async function GetUserType() {
  const user = await pb.collection('user_types').getList(1, 10);

  return user;
}

export async function DeleteUser(id: string) {
  await pb.collection('users').delete(id);
}
