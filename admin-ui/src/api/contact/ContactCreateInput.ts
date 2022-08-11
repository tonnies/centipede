import { NewsItemCreateNestedManyWithoutContactsInput } from "./NewsItemCreateNestedManyWithoutContactsInput";

export type ContactCreateInput = {
  cellphoneNumber?: number | null;
  company?: string | null;
  lastUsed?: NewsItemCreateNestedManyWithoutContactsInput;
  name: string;
  surname: string;
};
