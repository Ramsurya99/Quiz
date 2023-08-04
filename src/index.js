import React from "react";
import ReactDOM from "react-dom";
import Questions from './Components/QuizComponent'

const App = () =>{
    return (
        <>
          <Questions />
        </>
      );
    };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
