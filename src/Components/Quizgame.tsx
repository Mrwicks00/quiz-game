import { questions } from "./QuizQuestions";
import { useQuiz } from "../hooks/useQuiz";
import "../index.css";
import { Link } from "react-router-dom";

const Quizgame = () => {
  const { quizState, manageAnswer, restartGame } = useQuiz();

  const getButtonClass = (index: number) => {
    if (!quizState.isAnswered) return "displaybtn";

    if (quizState.selectedAnswer === index) {
      return quizState.isCorrect
        ? "displaybtn correct-answer"
        : "displaybtn incorrect-answer";
    }

    if (
      !quizState.isCorrect &&
      index === questions[quizState.currentQuestion].answer
    ) {
      return "displaybtn highlight-correct";
    }

    return "displaybtn";
  };

  return (
    <>
      {!quizState.isQuizzOver ? (
        <div>
          <h3 className="heading">You’re purr-fectly ready for this! 🐱💕</h3>
          <div>
            <h2 className="question">
              {questions[quizState.currentQuestion].Questions}
            </h2>
            <div>
              {questions[quizState.currentQuestion].answers?.map(
                (answer, index) => (
                  <button
                    className={getButtonClass(index)}
                    id="btn"
                    key={index}
                    onClick={() => manageAnswer(index)}
                  >
                    {answer}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p className="score">
            Your score: {quizState.score} / {questions.length}
          </p>
          <p style={{ color: "white", fontSize: "19px" }}>
            You did so well, don't let them tell you otherwise
          </p>
          <button
            onClick={restartGame}
            style={{
              padding: "10px 20px",
              backgroundColor: "#88B2CE",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "20px",
            }}
          >
            Restart Game
          </button>
          <Link to="letter" className="letter">
            You have a grok
          </Link>
        </div>
      )}
    </>
  );
};

export default Quizgame;
