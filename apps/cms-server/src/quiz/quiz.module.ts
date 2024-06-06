import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuizModuleBase } from "./base/quiz.module.base";
import { QuizService } from "./quiz.service";
import { QuizController } from "./quiz.controller";
import { QuizResolver } from "./quiz.resolver";

@Module({
  imports: [QuizModuleBase, forwardRef(() => AuthModule)],
  controllers: [QuizController],
  providers: [QuizService, QuizResolver],
  exports: [QuizService],
})
export class QuizModule {}
