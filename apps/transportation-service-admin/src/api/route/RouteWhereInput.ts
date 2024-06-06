import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PickUpDropOffPointListRelationFilter } from "../pickUpDropOffPoint/PickUpDropOffPointListRelationFilter";
import { PsvListRelationFilter } from "../psv/PsvListRelationFilter";

export type RouteWhereInput = {
  distance?: FloatNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  pickUpDropOffPoints?: PickUpDropOffPointListRelationFilter;
  psvs?: PsvListRelationFilter;
};
