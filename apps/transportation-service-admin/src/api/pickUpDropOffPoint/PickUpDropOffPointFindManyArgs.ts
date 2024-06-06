import { PickUpDropOffPointWhereInput } from "./PickUpDropOffPointWhereInput";
import { PickUpDropOffPointOrderByInput } from "./PickUpDropOffPointOrderByInput";

export type PickUpDropOffPointFindManyArgs = {
  where?: PickUpDropOffPointWhereInput;
  orderBy?: Array<PickUpDropOffPointOrderByInput>;
  skip?: number;
  take?: number;
};
