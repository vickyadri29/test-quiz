import React, { useEffect } from "react";
import './style.css';

const Quiz = () => {
  
  useEffect(() => {
    document.title = "Test - Quiz page";
  }, []);

  return <div>Ini adalah Quiz</div>;
};

export default Quiz;
