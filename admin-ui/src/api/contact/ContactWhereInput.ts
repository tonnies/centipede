import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NewsItemListRelationFilter } from "../newsItem/NewsItemListRelationFilter";

export type ContactWhereInput = {
  cellphoneNumber?: IntNullableFilter;
  company?: StringNullableFilter;
  id?: StringFilter;
  lastUsed?: NewsItemListRelationFilter;
  name?: StringFilter;
  surname?: StringFilter;
};
