export type VariantType = {
  text: string;
  isRight: boolean;
};

export type AnswersType = Array<VariantType>;

export type QuestionType = {
  text: string;
  score: number;
  answers: AnswersType;
  image: string;
};

export type QuestionsType = Array<QuestionType>;

export type StateType = {
  totalScore: number;
  i: number;
  questionBlock: {
    questions: QuestionsType;
  };
};
