import React from "react";
import "./style.css";

const Question = ({handleForAnswer, handleForNext, showAnswers,
  data: { category, difficulty, question, correct_answer, answers }
}) => { 
  return (
    <div className="container">
      <h1 dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        <p>{`Kategori : ${category}`}</p>
        <p>{`Tingkat Kesulitan : ${difficulty}`}</p>
      </div>
      <div className="btn-quiz">
        {answers.map((answer, i) => {
          const checkAnswers = showAnswers ? (
            answer === correct_answer ? "green-btn": "red-btn"
          ) : " ";
          return (
            <button onClick={() => handleForAnswer(answer)}
              className={`btn-answer ${checkAnswers}`}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          );
        })}
      </div>
      {showAnswers && (
        <button onClick={handleForNext} className="next-btn">Next Question</button>
      )}
    </div>
  );
};

export default Question;
