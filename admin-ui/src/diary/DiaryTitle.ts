import { Diary as TDiary } from "../api/diary/Diary";

export const DIARY_TITLE_FIELD = "id";

export const DiaryTitle = (record: TDiary): string => {
  return record.id || record.id;
};
