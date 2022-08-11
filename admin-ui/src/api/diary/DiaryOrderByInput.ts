import { SortOrder } from "../../util/SortOrder";

export type DiaryOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
