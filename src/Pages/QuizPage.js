import React from "react";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { QuizStateContext } from "../Helpers/Context";
import { allQuestion } from "../Helpers/Questions";
import TopProgBar from "../Components/TopProgBar";
import QuizBox from "../Components/QuizBox";
import CurrentResult from "../Components/CurrentResult";
import "../App.css";

function QuizPage() {
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
  const correct_score = (100 / allQuestion.length) * correctScore;
  const inc_score = (100 / allQuestion.length) * incorrectScore;


  // const nextQuestion = () => {
  //   correct_ans === selectedOption
  //     ? setCorrectScore(correctScore + 1)
  //     : setIncorrectScore(incorrectScore + 1);
  //   setSelectedOption("");

  //   questionNumber === allQuestion.length - 1
  //     ? setquizPageState("quizResult")
  //     : setQuestionNumber(questionNumber + 1);
  // };


  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      // Generate random number
      var j = Math.floor(Math.random() * (i + 1));

      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }

  useEffect(() => {
    if (inc_ans.length < 4) {
      inc_ans.push(correct_ans);
    }
    let mixArray = shuffleArray(inc_ans);
    setAllOptions(mixArray);
    console.log(mixArray);
  }, [questionNumber]);

  return (
    <div className="quizPage">
      <TopProgBar />
      <div className="quizContent">
        <QuizBox
          setSelectedOption={setSelectedOption}
          selectedOption={selectedOption}
        />

        <div className="centerFlexBox">
        <CurrentResult />
          {/* <div className="btnResult">
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
          </div> */}
        </div>

        <div className="endFlexBox">
          <div className="scoreBox">
            <span>Score {correct_score}%</span>
            <span>
              Max Score {100 - inc_score}%
            </span>
          </div>
          <div className="progressBarBox">
            <div className="progress">
              <div
                className="progress-bar scoreProgressBar"
                role="progressbar"
                aria-label="Example 20px high"
                style={{
                  width: `${correct_score}%`,
                }}
              >
                {/* score{(100 / allQuestion.length) * correctScore}% */}
              </div>
              <div
                className="progress-bar lessProgressBar"
                role="progressbar"
                aria-label="Example 20px high"
                style={{
                  width: `${inc_score}%`,
                }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
              <div
                className="progress progressBarBackGround"
                style={{
                  width: `${
                    100 - inc_score
                  }%`,
                }}
              >
                <div
                  className="progress-bar progressMaxScore "
                  role="progressbar"
                  style={{
                    width: `${
                      100 - inc_score
                    }%`,
                  }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
