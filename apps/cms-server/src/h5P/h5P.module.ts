import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { H5PModuleBase } from "./base/h5P.module.base";
import { H5PService } from "./h5P.service";
import { H5PController } from "./h5P.controller";
import { H5PResolver } from "./h5P.resolver";

@Module({
  imports: [H5PModuleBase, forwardRef(() => AuthModule)],
  controllers: [H5PController],
  providers: [H5PService, H5PResolver],
  exports: [H5PService],
})
export class H5PModule {}
