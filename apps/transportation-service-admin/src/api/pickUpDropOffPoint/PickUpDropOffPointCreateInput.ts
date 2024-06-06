import { InputJsonValue } from "../../types";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";

export type PickUpDropOffPointCreateInput = {
  location?: InputJsonValue;
  name?: string | null;
  route?: RouteWhereUniqueInput | null;
};
