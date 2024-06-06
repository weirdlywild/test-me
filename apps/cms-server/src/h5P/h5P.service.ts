import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { H5PServiceBase } from "./base/h5P.service.base";

@Injectable()
export class H5PService extends H5PServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
