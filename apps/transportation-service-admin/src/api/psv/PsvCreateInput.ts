import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";

export type PsvCreateInput = {
  fare?: number | null;
  name?: string | null;
  route?: RouteWhereUniqueInput | null;
};
