import { NewsItemCreateNestedManyWithoutUsersInput } from "./NewsItemCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  newsItems?: NewsItemCreateNestedManyWithoutUsersInput;
  password: string;
  roles: Array<string>;
  username: string;
};
