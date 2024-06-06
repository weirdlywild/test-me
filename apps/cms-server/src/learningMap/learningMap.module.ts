import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LearningMapModuleBase } from "./base/learningMap.module.base";
import { LearningMapService } from "./learningMap.service";
import { LearningMapController } from "./learningMap.controller";
import { LearningMapResolver } from "./learningMap.resolver";

@Module({
  imports: [LearningMapModuleBase, forwardRef(() => AuthModule)],
  controllers: [LearningMapController],
  providers: [LearningMapService, LearningMapResolver],
  exports: [LearningMapService],
})
export class LearningMapModule {}
