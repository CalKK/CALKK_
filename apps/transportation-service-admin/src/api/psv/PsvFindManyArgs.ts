import { PsvWhereInput } from "./PsvWhereInput";
import { PsvOrderByInput } from "./PsvOrderByInput";

export type PsvFindManyArgs = {
  where?: PsvWhereInput;
  orderBy?: Array<PsvOrderByInput>;
  skip?: number;
  take?: number;
};
