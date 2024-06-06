import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PickUpDropOffPointService } from "./pickUpDropOffPoint.service";
import { PickUpDropOffPointControllerBase } from "./base/pickUpDropOffPoint.controller.base";

@swagger.ApiTags("pickUpDropOffPoints")
@common.Controller("pickUpDropOffPoints")
export class PickUpDropOffPointController extends PickUpDropOffPointControllerBase {
  constructor(protected readonly service: PickUpDropOffPointService) {
    super(service);
  }
}
