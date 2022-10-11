import React, { useContext, useEffect, useState } from "react";
import { QuizStateContext } from "../Helpers/Context";
import { allQuestion } from "../Helpers/Questions";

export default function CurrentResult() {
  let {
    setquizPageState,
    correctScore,
    setCorrectScore,
    incorrectScore,
    setIncorrectScore,
    questionNumber,
    setQuestionNumber,
  } = useContext(QuizStateContext);

  const [selectedOption, setSelectedOption] = useState("");
  const [allOptions, setAllOptions] = useState("");

  const inc_ans = allQuestion[questionNumber].incorrect_answers;
  const correct_ans = allQuestion[questionNumber].correct_answer;

 

  const nextQuestion = () => {
    correct_ans === selectedOption
      ? setCorrectScore(correctScore + 1)
      : setIncorrectScore(incorrectScore + 1);
    setSelectedOption("");

    questionNumber === allQuestion.length - 1
      ? setquizPageState("quizResult")
      : setQuestionNumber(questionNumber + 1);
  };

  return (
    <div className="btnResult">
      {selectedOption && correct_ans === selectedOption ? (
        <span id="selectedQuizResult">
          <p>Correct &#127881; !!</p>
        </span>
      ) : (
        selectedOption && (
          <span id="selectedQuizResult">
            <p>Wrong &#128148; !!</p>
          </span>
        )
      )}

      {questionNumber === allQuestion.length - 1 ? (
        <button
          className={` ${!selectedOption ? "hideBtn" : "btn"}`}
          disabled={!selectedOption}
          onClick={nextQuestion}
        >
          Finish Quiz
        </button>
      ) : (
        <button
          className={`${!selectedOption ? "hideBtn" : "btn"}`}
          disabled={!selectedOption}
          onClick={nextQuestion}
        >
          Next Question
        </button>
      )}
    </div>
  );
}
