import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NewsItemCreateInput = {
  body?: string | null;
  contacts?: ContactWhereUniqueInput | null;
  createdBy?: UserWhereUniqueInput | null;
  slug: string;
  status?: "Published" | "Draft" | "Expired" | null;
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
    | "Plaaslik"
    | null;
};
