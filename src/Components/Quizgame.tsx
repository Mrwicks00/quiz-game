import { questions } from "./QuizQuestions";
import { useQuiz } from "../hooks/useQuiz";

const Quizgame = () => {
  const { quizState, manageAnswer } = useQuiz();
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
                    className="displaybtn"
                    id="btn"
                    key={index}
                    onClick={() => manageAnswer(index)}
                    // style={{
                    //   backgroundColor:
                    //     quizState.selectedAnswer === index
                    //       ? quizState.isCorrect
                    //         ? "pink"
                    //         : "lightcoral"
                    //       : "white",
                    //   color: "black",
                    //   marginLeft: "10px",
                    // }}
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
        </div>
      )}
    </>
  );
};

export default Quizgame;
