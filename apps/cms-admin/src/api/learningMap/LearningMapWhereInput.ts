import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LearningMapWhereInput = {
  accessibility?: StringNullableFilter;
  description?: StringNullableFilter;
  discipline?: StringNullableFilter;
  id?: StringFilter;
  language?: StringNullableFilter;
  learningOutcomes?: StringNullableFilter;
  owner?: StringNullableFilter;
  subject?: StringNullableFilter;
  title?: StringNullableFilter;
  topic?: StringNullableFilter;
};
