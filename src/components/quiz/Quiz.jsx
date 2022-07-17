import React, { useEffect, useState } from "react";
import Question from "../Question/Question";
import { useTimer } from "react-timer-hook";
import axios from "axios";
import "./style.css";

const BASE_URL =
  "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";

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
  time.setSeconds(time.getSeconds() + 20);

  const { seconds, minutes, hours, pause } = useTimer({
    expiryTimestamp: time,
    onExpire: () => {
      if (index >= questions.length) {
        pause();
      }
      alert("Waktu Habis :)");
      setQuizEnd(true);
    },
  });
  console.log(answers);

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

    // setShowAnswers(true);
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
    <div className="container">
      {index >= questions.length || quizEnd ? (
        <div>
          <h1>Selesai! Poin anda {point}</h1>
          <h1>Jawaban benar : {answers.correct}</h1>
          <h1>Jawaban Salah : {answers.incorrect}</h1>
          <h1>Total Jawab: {answers.answered}</h1>
        </div>
      ) : (
        <div>
          <p>
            Waktu anda : {hours}:{minutes}:{seconds}
          </p>
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
