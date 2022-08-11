import { NewsItem } from "../newsItem/NewsItem";

export type Contact = {
  cellphoneNumber: number | null;
  company: string | null;
  createdAt: Date;
  id: string;
  lastUsed?: Array<NewsItem>;
  name: string;
  surname: string;
  updatedAt: Date;
};
