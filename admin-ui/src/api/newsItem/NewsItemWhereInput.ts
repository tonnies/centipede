import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type NewsItemWhereInput = {
  body?: StringNullableFilter;
  contacts?: ContactWhereUniqueInput;
  createdBy?: UserWhereUniqueInput;
  id?: StringFilter;
  slug?: StringFilter;
  status?: "Published" | "Draft" | "Expired";
  tags?:
    | "Politiek"
    | "Misdaad"
    | "Finansies"
    | "Hofsake"
    | "Omgewing"
    | "Vermaak"
    | "Sport"
    | "Ongelukke"
    | "Dagboek"
    | "Internasionaal"
    | "Tegnologie"
    | "Gesondheid"
    | "Arbeid"
    | "Plaaslik";
};
