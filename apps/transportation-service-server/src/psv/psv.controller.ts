import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PsvService } from "./psv.service";
import { PsvControllerBase } from "./base/psv.controller.base";

@swagger.ApiTags("psvs")
@common.Controller("psvs")
export class PsvController extends PsvControllerBase {
  constructor(protected readonly service: PsvService) {
    super(service);
  }
}
