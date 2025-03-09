import React from "react";

import Quizgame from "./Components/Quizgame";

const App: React.FC = () => {
  return (
    <>
      <div className="Quizbag">
        <h1 className="appquiz">🍭 Quiz Game</h1>
        <Quizgame />
      </div>
    </>
  );
};

export default App;
