import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NewsItemListRelationFilter } from "../newsItem/NewsItemListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  newsItems?: NewsItemListRelationFilter;
  username?: StringFilter;
};
