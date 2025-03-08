import { useState } from "react";
import { IQuestionState, questions } from "./QuizQuestions";

const Quizgame = () => {
  const [quizState, setQuizState] = useState<IQuestionState>({
    isAnswered: false,
    currentQuestion: 0,
    isCorrect: null,
    selectedAnswer: null,
    score: 0,
    isQuizzOver: false,
  });

  const manageAnswer = (selectedAnswerIndex: number) => {
    if (quizState.isAnswered) return;
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
    }, 2000);
  };

  return (
    <>
      <h3>Please wait 2 seconds for the next question 🐦</h3>
      {!quizState.isQuizzOver ? (
        <div>
          <h2>{questions[quizState.currentQuestion].Questions}</h2>
          <div>
            {questions[quizState.currentQuestion].answers?.map(
              (answer, index) => (
                <button key={index} onClick={() => manageAnswer(index)}>
                  {answer}
                </button>
              )
            )}
          </div>
        </div>
      ) : (
        <p>
          Your score: {quizState.score} / {questions.length}
        </p>
      )}
    </>
  );
};

export default Quizgame;
