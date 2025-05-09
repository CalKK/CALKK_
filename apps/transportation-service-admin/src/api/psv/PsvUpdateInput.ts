import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";

export type PsvUpdateInput = {
  fare?: number | null;
  name?: string | null;
  route?: RouteWhereUniqueInput | null;
};
