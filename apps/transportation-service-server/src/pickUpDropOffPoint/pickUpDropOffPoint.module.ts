import { Module } from "@nestjs/common";
import { PickUpDropOffPointModuleBase } from "./base/pickUpDropOffPoint.module.base";
import { PickUpDropOffPointService } from "./pickUpDropOffPoint.service";
import { PickUpDropOffPointController } from "./pickUpDropOffPoint.controller";
import { PickUpDropOffPointResolver } from "./pickUpDropOffPoint.resolver";

@Module({
  imports: [PickUpDropOffPointModuleBase],
  controllers: [PickUpDropOffPointController],
  providers: [PickUpDropOffPointService, PickUpDropOffPointResolver],
  exports: [PickUpDropOffPointService],
})
export class PickUpDropOffPointModule {}
