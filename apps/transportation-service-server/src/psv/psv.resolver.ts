import * as graphql from "@nestjs/graphql";
import { PsvResolverBase } from "./base/psv.resolver.base";
import { Psv } from "./base/Psv";
import { PsvService } from "./psv.service";

@graphql.Resolver(() => Psv)
export class PsvResolver extends PsvResolverBase {
  constructor(protected readonly service: PsvService) {
    super(service);
  }
}
