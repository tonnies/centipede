import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { NewsItemService } from "./newsItem.service";
import { NewsItemControllerBase } from "./base/newsItem.controller.base";

@swagger.ApiTags("newsItems")
@common.Controller("newsItems")
export class NewsItemController extends NewsItemControllerBase {
  constructor(
    protected readonly service: NewsItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
