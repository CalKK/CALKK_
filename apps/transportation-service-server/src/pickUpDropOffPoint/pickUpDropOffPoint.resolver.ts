import * as graphql from "@nestjs/graphql";
import { PickUpDropOffPointResolverBase } from "./base/pickUpDropOffPoint.resolver.base";
import { PickUpDropOffPoint } from "./base/PickUpDropOffPoint";
import { PickUpDropOffPointService } from "./pickUpDropOffPoint.service";

@graphql.Resolver(() => PickUpDropOffPoint)
export class PickUpDropOffPointResolver extends PickUpDropOffPointResolverBase {
  constructor(protected readonly service: PickUpDropOffPointService) {
    super(service);
  }
}
