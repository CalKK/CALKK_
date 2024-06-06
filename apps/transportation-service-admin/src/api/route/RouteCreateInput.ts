import { PickUpDropOffPointCreateNestedManyWithoutRoutesInput } from "./PickUpDropOffPointCreateNestedManyWithoutRoutesInput";
import { PsvCreateNestedManyWithoutRoutesInput } from "./PsvCreateNestedManyWithoutRoutesInput";

export type RouteCreateInput = {
  distance?: number | null;
  name?: string | null;
  pickUpDropOffPoints?: PickUpDropOffPointCreateNestedManyWithoutRoutesInput;
  psvs?: PsvCreateNestedManyWithoutRoutesInput;
};
