'use server';

import Pocketbase from 'pocketbase';
import { pbUrl } from '../../lib/pBUrl';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { User } from '@/app/entities/User';

const pb = new Pocketbase(pbUrl);

export async function CreateUser(data: User) {
  try {
    await pb.collection('users').create(<User>{ ...data });
  } catch (err) {
    console.log('Erro', err.data);
  }
}

export async function EditUser(id: string, data: User) {
  await pb.collection('users').update(id, data);
}

export async function Logout() {
  cookies().delete('pb_auth');
  pb.authStore.clear();
  redirect('/');
}
