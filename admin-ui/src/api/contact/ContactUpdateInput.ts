import { NewsItemUpdateManyWithoutContactsInput } from "./NewsItemUpdateManyWithoutContactsInput";

export type ContactUpdateInput = {
  cellphoneNumber?: number | null;
  company?: string | null;
  lastUsed?: NewsItemUpdateManyWithoutContactsInput;
  name?: string;
  surname?: string;
};
