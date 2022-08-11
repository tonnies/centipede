import { SortOrder } from "../../util/SortOrder";

export type NewsItemOrderByInput = {
  body?: SortOrder;
  contactsId?: SortOrder;
  createdAt?: SortOrder;
  createdById?: SortOrder;
  id?: SortOrder;
  slug?: SortOrder;
  status?: SortOrder;
  tags?: SortOrder;
  updatedAt?: SortOrder;
};
