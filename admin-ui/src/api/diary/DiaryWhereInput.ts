import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DiaryWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
};
