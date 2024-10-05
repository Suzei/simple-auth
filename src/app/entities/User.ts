import { UserTypes } from "../types/UserTypes";

export interface User {
  username: string;
  email: string;
  emailVisibility: boolean;
  password: string;
  passwordConfirm: string;
  name: string;
  type: UserTypes;
}
