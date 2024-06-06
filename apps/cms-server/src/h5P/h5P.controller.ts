import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { H5PService } from "./h5P.service";
import { H5PControllerBase } from "./base/h5P.controller.base";

@swagger.ApiTags("h5Ps")
@common.Controller("h5Ps")
export class H5PController extends H5PControllerBase {
  constructor(
    protected readonly service: H5PService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
