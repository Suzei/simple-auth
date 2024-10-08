'use server';

import { ILoginRequest } from '../../interfaces/ICreateSession';
import Pocketbase from 'pocketbase';
import { pbUrl } from '../../lib/pBUrl';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { User } from '@/app/entities/User';

export async function CreateUser(data: User) {
  const pb = new Pocketbase(pbUrl);

  try {
    if (data.type === 'admin') {
      await pb.admins.create(<User>{ ...data });
    }

    await pb.collection('users').create(<User>{ ...data });
  } catch (error) {
    console.log(error);
  }
}

export async function CreateSession(data: ILoginRequest) {
  const pb = new Pocketbase(pbUrl);

  let redirectPath: string | null = null;
  try {
    const { token, record: model } = await pb
      .collection('users')
      .authWithPassword(data.email, data.password);

    const cookie = JSON.stringify({ token, model });

    cookies().set('pb_auth', cookie, {
      secure: true,
      path: '/',
      sameSite: 'strict',
      httpOnly: true,
    });
    pb.authStore.save(token);

    redirectPath = '/dashboard';
  } catch (error) {
    redirectPath = '/';
  } finally {
    if (redirectPath) {
      redirect(redirectPath);
    }
  }
}

export async function EditUser(id: string, data: User) {
  const pb = new Pocketbase(pbUrl);
  await pb.collection('users').update(id, data);
}

export async function Logout() {
  cookies().delete('pb_auth');
  redirect('/');
}
