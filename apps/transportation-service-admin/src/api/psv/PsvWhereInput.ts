import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";

export type PsvWhereInput = {
  fare?: IntNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  route?: RouteWhereUniqueInput;
};
