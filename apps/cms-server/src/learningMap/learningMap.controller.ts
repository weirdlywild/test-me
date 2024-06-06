import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LearningMapService } from "./learningMap.service";
import { LearningMapControllerBase } from "./base/learningMap.controller.base";

@swagger.ApiTags("learningMaps")
@common.Controller("learningMaps")
export class LearningMapController extends LearningMapControllerBase {
  constructor(
    protected readonly service: LearningMapService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
