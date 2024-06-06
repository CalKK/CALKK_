import { PickUpDropOffPointUpdateManyWithoutRoutesInput } from "./PickUpDropOffPointUpdateManyWithoutRoutesInput";
import { PsvUpdateManyWithoutRoutesInput } from "./PsvUpdateManyWithoutRoutesInput";

export type RouteUpdateInput = {
  distance?: number | null;
  name?: string | null;
  pickUpDropOffPoints?: PickUpDropOffPointUpdateManyWithoutRoutesInput;
  psvs?: PsvUpdateManyWithoutRoutesInput;
};
