/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { H5P } from "./H5P";
import { H5PCountArgs } from "./H5PCountArgs";
import { H5PFindManyArgs } from "./H5PFindManyArgs";
import { H5PFindUniqueArgs } from "./H5PFindUniqueArgs";
import { CreateH5PArgs } from "./CreateH5PArgs";
import { UpdateH5PArgs } from "./UpdateH5PArgs";
import { DeleteH5PArgs } from "./DeleteH5PArgs";
import { H5PService } from "../h5P.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => H5P)
export class H5PResolverBase {
  constructor(
    protected readonly service: H5PService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "H5P",
    action: "read",
    possession: "any",
  })
  async _h5PSMeta(
    @graphql.Args() args: H5PCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [H5P])
  @nestAccessControl.UseRoles({
    resource: "H5P",
    action: "read",
    possession: "any",
  })
  async h5PS(@graphql.Args() args: H5PFindManyArgs): Promise<H5P[]> {
    return this.service.h5PS(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => H5P, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "H5P",
    action: "read",
    possession: "own",
  })
  async h5P(@graphql.Args() args: H5PFindUniqueArgs): Promise<H5P | null> {
    const result = await this.service.h5P(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => H5P)
  @nestAccessControl.UseRoles({
    resource: "H5P",
    action: "create",
    possession: "any",
  })
  async createH5P(@graphql.Args() args: CreateH5PArgs): Promise<H5P> {
    return await this.service.createH5P({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => H5P)
  @nestAccessControl.UseRoles({
    resource: "H5P",
    action: "update",
    possession: "any",
  })
  async updateH5P(@graphql.Args() args: UpdateH5PArgs): Promise<H5P | null> {
    try {
      return await this.service.updateH5P({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => H5P)
  @nestAccessControl.UseRoles({
    resource: "H5P",
    action: "delete",
    possession: "any",
  })
  async deleteH5P(@graphql.Args() args: DeleteH5PArgs): Promise<H5P | null> {
    try {
      return await this.service.deleteH5P(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
