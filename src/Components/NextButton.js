// import React from "react";
// import { QuizStateContext } from "../Helpers/Context";
// import { allQuestion } from "../Helpers/Questions";


// export default function NextButton() {
//   let {
//     setquizPageState,
//     correctScore,
//     setCorrectScore,
//     incorrectScore,
//     setIncorrectScore,
//     questionNumber,
//     setQuestionNumber,
//   } = useContext(QuizStateContext);

//   function shuffleArray(array) {
//     for (var i = array.length - 1; i > 0; i--) {
//       // Generate random number
//       var j = Math.floor(Math.random() * (i + 1));

//       var temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//     }

//     return array;
//   }

//   const nextQuestion = () => {
//     correct_ans === selectedOption
//       ? setCorrectScore(correctScore + 1)
//       : setIncorrectScore(incorrectScore + 1);
//     setSelectedOption("");

//     questionNumber === allQuestion.length - 1
//       ? setquizPageState("quizResult")
//       : setQuestionNumber(questionNumber + 1);
//   };

//   useEffect(() => {
//     if (inc_ans.length < 4) {
//       inc_ans.push(correct_ans);
//     }
//     let mixArray = shuffleArray(inc_ans);
//     setAllOptions(mixArray);
//     console.log(mixArray);
//   }, [questionNumber]);

//   return <div></div>;
// }
