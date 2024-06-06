import { InputJsonValue } from "../../types";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";

export type PickUpDropOffPointUpdateInput = {
  location?: InputJsonValue;
  name?: string | null;
  route?: RouteWhereUniqueInput | null;
};
