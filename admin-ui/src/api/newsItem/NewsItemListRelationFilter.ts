import { NewsItemWhereInput } from "./NewsItemWhereInput";

export type NewsItemListRelationFilter = {
  every?: NewsItemWhereInput;
  some?: NewsItemWhereInput;
  none?: NewsItemWhereInput;
};
