import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { DiaryServiceBase } from "./base/diary.service.base";

@Injectable()
export class DiaryService extends DiaryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
