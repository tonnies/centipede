import { Contact } from "../contact/Contact";
import { User } from "../user/User";

export type NewsItem = {
  body: string | null;
  contacts?: Contact | null;
  createdAt: Date;
  createdBy?: User | null;
  id: string;
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
  updatedAt: Date;
};
