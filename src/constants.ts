export const LOCAL_STORAGE_KEY = 'resilienceScore';
export const QUESTION_COUNT = 53;
export const REVERSE_SCORE = 6;
export const QUESTION_SPLIT_COUNT = 10;

export const reverseQuestionList = [
  4, 5, 6, 10, 11, 12, 16, 17, 18, 22, 23, 24, 28, 29, 30, 34, 35, 36, 40, 41,
  42, 51, 52, 53,
];

export const emotionQuestionList = [1, 2, 3, 4, 5, 6];
export const impulseQuestionList = [7, 8, 9, 10, 11, 12];
export const causeQuestionList = [13, 14, 15, 16, 17, 18];

export const communicationQuestionList = [19, 20, 21, 22, 23, 24];
export const sympathyQuestionList = [25, 26, 27, 28, 29, 30];
export const egoExpandQuestionList = [31, 32, 33, 34, 35, 36];

export const egoOptimismQuestionList = [37, 38, 39, 40, 41, 42];
export const lifeSatisfactionQuestionList = [43, 44, 45, 46, 47];
export const thankfulQuestionList = [48, 49, 50, 51, 52, 53];

type Score = 'avg' | 'low' | 'high';

export const SelfControlScore: Record<Score, number> = {
  avg: 63.5,
  low: 55,
  high: 75,
};
export const PersonalRelationshipScore: Record<Score, number> = {
  avg: 67.8,
  low: 62,
  high: 80,
};
export const PositiveScore: Record<Score, number> = {
  avg: 63.4,
  low: 56,
  high: 75,
};
export const ResilienceScore: Record<Score, number> = {
  avg: 195,
  low: 170,
  high: 212,
};
