interface IQuizQuestion {
  Questions: string;
  answers: string[];
  answer: number;
}

export interface IQuestionState {
  isAnswered: boolean;
  currentQuestion: number;
  isCorrect: boolean | null;
  selectedAnswer: number | null;
  score: number;
  isQuizzOver: boolean;
}

export const questions: IQuizQuestion[] = [
  {
    Questions: "What is the capital of France",
    answers: ["Paris", "Abuja", "Botswana"],
    answer: 0,
  },
  {
    Questions: "Who is the current President of Nigeria",
    answers: ["Babaginda Tobe", "Bola Ahmed Tinubu", "Ayodeji Awoshika"],
    answer: 1,
  },
  {
    Questions: "What is the name of our current tutor",
    answers: ["Pablo Escobar", "Gojo Satoru", "Young Ancient"],
    answer: 2,
  },
];
