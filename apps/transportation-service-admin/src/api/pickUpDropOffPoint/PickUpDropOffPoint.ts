import { JsonValue } from "type-fest";
import { Route } from "../route/Route";

export type PickUpDropOffPoint = {
  createdAt: Date;
  id: string;
  location: JsonValue;
  name: string | null;
  route?: Route | null;
  updatedAt: Date;
};
