import React, { useEffect, useState } from "react";
import Question from "../Question/Question";
import axios from "axios";

const BASE_URL =
  "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [point, setPoint] = useState(0);

  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((res) => res.data)
      .then((data) => {
        const questions = data.results.map((question) => ({
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers,
          ].sort(() => Math.random() - 0.5),
        }));
        setQuestions(questions);
      });
  }, []);

  const handleForAnswer = (answer) => {
    if (answer === questions[index].correct_answer) {
      setPoint(point + 10);
    }

    setIndex(index + 1);
  };

  return questions.length > 0 ? (
    <div>
      {index >= questions.length ? (
        <h3>Selesai! Poin anda {point}</h3>
      ): (
        <Question data={questions[index]} handleForAnswer={handleForAnswer} />
      )}
    </div>
  ) : (
    "Wait a minute..."
  );
};

export default Quiz;
