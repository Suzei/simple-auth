"use server";

import { ICreateUser } from "./interfaces/CreateUser";
import { ILoginRequest } from "./interfaces/Login";
import Pocketbase from "pocketbase";
import { pbUrl } from "./lib/pBUrl";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const pb = new Pocketbase(pbUrl);

export async function CreateLogin(data: ICreateUser) {
  try {
    await pb.collection("users").create(<ICreateUser>{ ...data });
  } catch (error) {
    console.log(error);
  }
}

export async function CreateSession(data: ILoginRequest) {
  let redirectPath: string | null = null;
  console.log("?");
  try {
    const { token, record: model } = await pb
      .collection("users")
      .authWithPassword(data.email, data.password);

    const cookie = JSON.stringify({ token, model });

    cookies().set("pb_auth", cookie, {
      secure: true,
      path: "/",
      sameSite: "strict",
      httpOnly: true,
    });
    redirectPath = "/dashboard";
  } catch (error) {
    redirectPath = "/";
    console.log(error);
  } finally {
    if (redirectPath) {
      redirect(redirectPath);
    }
  }
}

export async function Logout() {
  cookies().delete("pb_auth");
  redirect("/");
}
