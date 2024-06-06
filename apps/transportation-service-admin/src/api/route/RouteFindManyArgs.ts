import { RouteWhereInput } from "./RouteWhereInput";
import { RouteOrderByInput } from "./RouteOrderByInput";

export type RouteFindManyArgs = {
  where?: RouteWhereInput;
  orderBy?: Array<RouteOrderByInput>;
  skip?: number;
  take?: number;
};
