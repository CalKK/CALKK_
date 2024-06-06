import { Module } from "@nestjs/common";
import { PsvModuleBase } from "./base/psv.module.base";
import { PsvService } from "./psv.service";
import { PsvController } from "./psv.controller";
import { PsvResolver } from "./psv.resolver";

@Module({
  imports: [PsvModuleBase],
  controllers: [PsvController],
  providers: [PsvService, PsvResolver],
  exports: [PsvService],
})
export class PsvModule {}
