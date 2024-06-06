import { H5PWhereInput } from "./H5PWhereInput";
import { H5POrderByInput } from "./H5POrderByInput";

export type H5PFindManyArgs = {
  where?: H5PWhereInput;
  orderBy?: Array<H5POrderByInput>;
  skip?: number;
  take?: number;
};
