import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuizService } from "./quiz.service";
import { QuizControllerBase } from "./base/quiz.controller.base";

@swagger.ApiTags("quizzes")
@common.Controller("quizzes")
export class QuizController extends QuizControllerBase {
  constructor(
    protected readonly service: QuizService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
