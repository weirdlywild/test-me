import { LearningMapWhereInput } from "./LearningMapWhereInput";
import { LearningMapOrderByInput } from "./LearningMapOrderByInput";

export type LearningMapFindManyArgs = {
  where?: LearningMapWhereInput;
  orderBy?: Array<LearningMapOrderByInput>;
  skip?: number;
  take?: number;
};
