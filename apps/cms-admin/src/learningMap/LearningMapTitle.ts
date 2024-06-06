import { LearningMap as TLearningMap } from "../api/learningMap/LearningMap";

export const LEARNINGMAP_TITLE_FIELD = "title";

export const LearningMapTitle = (record: TLearningMap): string => {
  return record.title?.toString() || String(record.id);
};
