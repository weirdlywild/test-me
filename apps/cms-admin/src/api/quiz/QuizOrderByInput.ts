import { SortOrder } from "../../util/SortOrder";

export type QuizOrderByInput = {
  accessibility?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  discipline?: SortOrder;
  id?: SortOrder;
  language?: SortOrder;
  learningOutcomes?: SortOrder;
  owner?: SortOrder;
  subject?: SortOrder;
  title?: SortOrder;
  topic?: SortOrder;
  updatedAt?: SortOrder;
};
