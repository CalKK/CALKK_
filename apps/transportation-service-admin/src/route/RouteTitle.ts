import { Route as TRoute } from "../api/route/Route";

export const ROUTE_TITLE_FIELD = "name";

export const RouteTitle = (record: TRoute): string => {
  return record.name?.toString() || String(record.id);
};
