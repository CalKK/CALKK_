import * as graphql from "@nestjs/graphql";
import { RouteResolverBase } from "./base/route.resolver.base";
import { Route } from "./base/Route";
import { RouteService } from "./route.service";

@graphql.Resolver(() => Route)
export class RouteResolver extends RouteResolverBase {
  constructor(protected readonly service: RouteService) {
    super(service);
  }
}
