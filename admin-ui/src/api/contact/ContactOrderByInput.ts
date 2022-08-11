import { SortOrder } from "../../util/SortOrder";

export type ContactOrderByInput = {
  cellphoneNumber?: SortOrder;
  company?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  surname?: SortOrder;
  updatedAt?: SortOrder;
};
