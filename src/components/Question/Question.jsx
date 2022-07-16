import React from "react";
import "./style.css";

const Question = ({handleForAnswer,
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
          return (
            <button onClick={() => handleForAnswer(answer)}
              className="btn-answer"
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Question;
