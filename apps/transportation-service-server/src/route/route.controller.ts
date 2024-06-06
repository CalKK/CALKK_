import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RouteService } from "./route.service";
import { RouteControllerBase } from "./base/route.controller.base";

@swagger.ApiTags("routes")
@common.Controller("routes")
export class RouteController extends RouteControllerBase {
  constructor(protected readonly service: RouteService) {
    super(service);
  }
}
