import { PickUpDropOffPoint } from "../pickUpDropOffPoint/PickUpDropOffPoint";
import { Psv } from "../psv/Psv";

export type Route = {
  createdAt: Date;
  distance: number | null;
  id: string;
  name: string | null;
  pickUpDropOffPoints?: Array<PickUpDropOffPoint>;
  psvs?: Array<Psv>;
  updatedAt: Date;
};
