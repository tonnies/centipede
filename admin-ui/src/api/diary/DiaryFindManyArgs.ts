import { DiaryWhereInput } from "./DiaryWhereInput";
import { DiaryOrderByInput } from "./DiaryOrderByInput";

export type DiaryFindManyArgs = {
  where?: DiaryWhereInput;
  orderBy?: Array<DiaryOrderByInput>;
  skip?: number;
  take?: number;
};
