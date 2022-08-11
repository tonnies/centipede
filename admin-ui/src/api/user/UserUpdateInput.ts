import { NewsItemUpdateManyWithoutUsersInput } from "./NewsItemUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  newsItems?: NewsItemUpdateManyWithoutUsersInput;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
