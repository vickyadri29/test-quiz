import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import Pages
import LoginPage from "./pages/Login";
import QuizPage from  "./pages/Quiz";

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
