import { NewsItem } from "../newsItem/NewsItem";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  newsItems?: Array<NewsItem>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
