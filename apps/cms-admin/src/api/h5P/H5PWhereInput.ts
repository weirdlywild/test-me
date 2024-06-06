import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type H5PWhereInput = {
  accessibility?: StringNullableFilter;
  description?: StringNullableFilter;
  discipline?: StringNullableFilter;
  id?: StringFilter;
  language?: StringNullableFilter;
  learningOutcomes?: StringNullableFilter;
  owner?: StringNullableFilter;
  subject?: "test";
  title?: StringNullableFilter;
  topic?: StringNullableFilter;
};
