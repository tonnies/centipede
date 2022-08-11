import { NewsItem as TNewsItem } from "../api/newsItem/NewsItem";

export const NEWSITEM_TITLE_FIELD = "slug";

export const NewsItemTitle = (record: TNewsItem): string => {
  return record.slug || record.id;
};
