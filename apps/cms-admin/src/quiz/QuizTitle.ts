import { Quiz as TQuiz } from "../api/quiz/Quiz";

export const QUIZ_TITLE_FIELD = "title";

export const QuizTitle = (record: TQuiz): string => {
  return record.title?.toString() || String(record.id);
};
