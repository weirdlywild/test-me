import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LearningMapServiceBase } from "./base/learningMap.service.base";

@Injectable()
export class LearningMapService extends LearningMapServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
