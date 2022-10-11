import React, { useState, useContext } from "react";
import { Star } from "../Components/Star";
import { allQuestion } from "../Helpers/Questions";
import { QuizStateContext } from "../Helpers/Context";

export default function QuizBox({ setSelectedOption, selectedOption }) {
  let { questionNumber } = useContext(QuizStateContext);
  const [quizLevel, setQuizLevel] = useState(0);

const currentQue = decodeURIComponent(allQuestion[questionNumber])$ git config --global user.name "Mona Lisa"
  const selectOption = (ansOption) => {
    setSelectedOption(ansOption);
  };

  return (
    <div className="quizBox">
      <div className="questionBox">
        <span className="questionDetails">
          <span id="hQuestion">
            Question: {questionNumber + 1} into {allQuestion.length}
          </span>
          <span className="starContainer">
            Category:
            {decodeURIComponent(allQuestion[questionNumber].category)}
          </span>
          <span className="starContainer">
            {Star({ quizLevel, setQuizLevel })}
          </span>
        </span>
        <h2 className="questionText">
          {decodeURIComponent(allQuestion[questionNumber].question)}
        </h2>
      </div>

      <div className="allOptions">
        {allQuestion[questionNumber].incorrect_answers.map((ansOption) => (
          <div className="optionRow">
            <button
              className={`option ${
                selectedOption === ansOption ? "selectedOption" : ""
              }`}
              disabled={selectedOption}
              checked={selectedOption === ansOption}
              value={selectedOption}
              onClick={() => {
                selectOption(ansOption);
              }}
            >
              {decodeURIComponent(ansOption)}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
