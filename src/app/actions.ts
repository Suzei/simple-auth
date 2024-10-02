"use server";

import { ICreateUser } from "./interfaces/CreateUser";
import { ILoginRequest } from "./interfaces/Login";
import pb from "./services/api";

export async function CreateLogin(data: ICreateUser) {
  try {
    await pb.collection("users").create(<ICreateUser>{ ...data });
  } catch (error) {}
}

export async function CreateSession(data: ILoginRequest) {
  const auth = await pb.admins.authWithPassword(data.email, data.password);
}
