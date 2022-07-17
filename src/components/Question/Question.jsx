import React from "react";
import "./style.css";

const Question = ({
  handleForAnswer,
  handleForNext,
  showAnswers,
  index,
  data: { category, question, correct_answer, answers },
}) => {
  return (
    <div className="container">
      <div className="title-challenge">
        <h1>Quiz Challenge - DOT Indonesia</h1>
      </div>
      <div className="quiz-content">
        <p>{`${(index += 1)} of ${(index = 10)} question`}</p>
        <hr />
        <div className="question">
          <h3 dangerouslySetInnerHTML={{ __html: question }} />
          <p>{`${category}`}</p>
          {/* <p>{`${difficulty}`}</p> */}
        </div>

        <br />
        <div className="btn-quiz">
          {answers.map((answer, i) => {
            return (
              <button
                onClick={() => handleForAnswer(answer)}
                className="btn-question"
                dangerouslySetInnerHTML={{ __html: answer }}
              />
            );
          })}
        </div>
        {/* {showAnswers && (
        <button onClick={handleForNext} className="next-btn">Next Question</button>
      )} */}
      </div>
    </div>
  );
};

export default Question;
