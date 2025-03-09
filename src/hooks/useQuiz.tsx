import { useState } from "react";
import { IQuestionState, questions } from "../Components/QuizQuestions";

export const useQuiz = () => {
  const [quizState, setQuizState] = useState<IQuestionState>({
    isAnswered: false,
    currentQuestion: 0,
    isCorrect: null,
    selectedAnswer: null,
    score: 0,
    isQuizzOver: false,
  });

  const playPopSound = () => {
    const popSound = new Audio("/sounds/pop-39222.mp3");
    popSound.play().catch((err) => console.log("Pop sound play failed:", err));
  };

  const manageAnswer = (selectedAnswerIndex: number) => {
    if (quizState.isAnswered) return;

    playPopSound();
    const isAnswerCorrect =
      selectedAnswerIndex === questions[quizState.currentQuestion].answer;
    setQuizState((prevQuizState) => ({
      ...prevQuizState,
      isAnswered: true,
      isCorrect: isAnswerCorrect,
      selectedAnswer: selectedAnswerIndex,
      score: isAnswerCorrect ? prevQuizState.score + 1 : prevQuizState.score,
    }));
    setTimeout(() => {
      if (quizState.currentQuestion + 1 < questions.length) {
        setQuizState((prevQuizState) => ({
          ...prevQuizState,
          currentQuestion: prevQuizState.currentQuestion + 1,
          selectedAnswer: null,
          isCorrect: null,
          isAnswered: false,
        }));
      } else {
        setQuizState((prevQuizState) => ({
          ...prevQuizState,
          isQuizzOver: true,
        }));
      }
    }, 900);
  };

  return { quizState, manageAnswer };
};
