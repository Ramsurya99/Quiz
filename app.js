import React from "react";
import ReactDOM from "react-dom";
import Questions from "./components/QuizComponent";

const App = () =>{
    return (
        <div>
          <h1>Quiz App</h1>
          <Questions />
        </div>
      );
    };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
