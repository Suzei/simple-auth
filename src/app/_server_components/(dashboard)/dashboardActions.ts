import { pbUrl } from "@/app/lib/pBUrl";
import Pocketbase, { ListResult } from "pocketbase";
const cookies = require("next/headers");

export async function GetUserByCookie() {
  const cookie = cookies().get("pb_auth");

  if (!cookie) {
    return false;
  }

  const pb = new Pocketbase(pbUrl);

  pb.authStore.loadFromCookie(cookie.value || "");
  return pb.authStore.model;
}

export async function GetUserList() {
  const pb = new Pocketbase(pbUrl);

  const users = await pb.collection("users").getList(1, 10, {
    sort: "-updated",
    requestKey: null,
  });

  return users;
}

export async function GetUserByID({ id }: { id: string }) {
  const pb = new Pocketbase(pbUrl);

  const user = await pb.collection("users").getOne(id);
  return user;
}
