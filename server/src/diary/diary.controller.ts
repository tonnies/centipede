import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DiaryService } from "./diary.service";
import { DiaryControllerBase } from "./base/diary.controller.base";

@swagger.ApiTags("diaries")
@common.Controller("diaries")
export class DiaryController extends DiaryControllerBase {
  constructor(
    protected readonly service: DiaryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
