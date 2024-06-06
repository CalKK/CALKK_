import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";

export type PickUpDropOffPointWhereInput = {
  id?: StringFilter;
  location?: JsonFilter;
  name?: StringNullableFilter;
  route?: RouteWhereUniqueInput;
};
