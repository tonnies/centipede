import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { DiaryResolverBase } from "./base/diary.resolver.base";
import { Diary } from "./base/Diary";
import { DiaryService } from "./diary.service";

@graphql.Resolver(() => Diary)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class DiaryResolver extends DiaryResolverBase {
  constructor(
    protected readonly service: DiaryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
