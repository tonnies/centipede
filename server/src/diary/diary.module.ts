import { Module } from "@nestjs/common";
import { DiaryModuleBase } from "./base/diary.module.base";
import { DiaryService } from "./diary.service";
import { DiaryController } from "./diary.controller";
import { DiaryResolver } from "./diary.resolver";

@Module({
  imports: [DiaryModuleBase],
  controllers: [DiaryController],
  providers: [DiaryService, DiaryResolver],
  exports: [DiaryService],
})
export class DiaryModule {}
