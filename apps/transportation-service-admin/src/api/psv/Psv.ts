import { Route } from "../route/Route";

export type Psv = {
  createdAt: Date;
  fare: number | null;
  id: string;
  name: string | null;
  route?: Route | null;
  updatedAt: Date;
};
