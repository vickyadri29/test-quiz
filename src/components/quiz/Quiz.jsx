import React, { useEffect, useState } from "react";
import Question from "../Question/Question";
import { useTimer } from "react-timer-hook";
import axios from "axios";
import "./style.css";

// Import icon
import iconTimer from "../../img/timer.png";
import iconCorrect from "../../img/correct.png";
import iconIncorrect from "../../img/incorrect.png";

const BASE_URL =
  "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [point, setPoint] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);
  const [quizEnd, setQuizEnd] = useState(false);
  const [answers, setAnswers] = useState({
    correct: 0,
    incorrect: 0,
    answered: 0,
  });

  const time = new Date();
  time.setSeconds(time.getSeconds() + 1200);

  const { seconds, minutes, hours } = useTimer({
    expiryTimestamp: time,
    onExpire: () => {
      if (index >= questions.length) {
      }
      setQuizEnd(true);
    },
  });

  const handleForAnswer = (answer) => {
    if (!showAnswers) {
      if (answer === questions[index].correct_answer) {
        setPoint(point + 10);
        const newAnswer = { ...answers };
        newAnswer.correct = newAnswer.correct += 1;
        newAnswer.answered = newAnswer.answered += 1;
        setAnswers(newAnswer);
      } else {
        const newAnswer = { ...answers };
        newAnswer.incorrect = newAnswer.incorrect += 1;
        newAnswer.answered = newAnswer.answered += 1;
        setAnswers(newAnswer);
      }
    }
    setIndex(index + 1);
  };

  const handleForNext = () => {
    setIndex(index + 1);
    setShowAnswers(false);
  };

  useEffect(() => {
    document.title = "Test - Quiz";
  }, []);

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

  return questions.length > 0 ? (
    <div className="containers">
      {index >= questions.length || quizEnd ? (
        <div className="results">
          <h1>Finished!</h1>
          <h1>Here is your Score : {point}</h1>
          <div className="result-question">
            <div className="correct">
              <img src={iconCorrect} alt="correct answer" width="20" />
              <span>{answers.correct}</span>
            </div>
            <div className="incorrect">
              <img src={iconIncorrect} alt="correct answer" width="20" />
              <span>{answers.incorrect}</span>
            </div>
          </div>
          <h3>Total Answered {answers.answered}</h3>
        </div>
      ) : (
        <div>
          <div className="countdown">
            <img src={iconTimer} alt="icon" width="20" />
            <span>
              {hours}:{minutes}:{seconds}
            </span>
          </div>
          <Question
            data={questions[index]}
            handleForAnswer={handleForAnswer}
            showAnswers={showAnswers}
            handleForNext={handleForNext}
            index={index}
          />
        </div>
      )}
    </div>
  ) : (
    <div className="container-spin">
      <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
};

export default Quiz;
