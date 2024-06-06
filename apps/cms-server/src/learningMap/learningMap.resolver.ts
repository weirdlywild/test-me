import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LearningMapResolverBase } from "./base/learningMap.resolver.base";
import { LearningMap } from "./base/LearningMap";
import { LearningMapService } from "./learningMap.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LearningMap)
export class LearningMapResolver extends LearningMapResolverBase {
  constructor(
    protected readonly service: LearningMapService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
