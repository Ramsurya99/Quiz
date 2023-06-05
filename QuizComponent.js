import React, { useState } from "react"

const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Rome'],
      correctAnswer: 'Paris'
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
      correctAnswer: 'Jupiter'
    },
    {
        question: 'What is the biggest city in the world?',
        options: ['Chongqing', 'Harbin', 'Hangzhou', 'Beijing'],
        correctAnswer: 'Chongqing'
      },
  ];

const Questions = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(''));
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswerSelection = (option) => {
        const updatedAnswers = [...userAnswers];
        updatedAnswers[currentQuestion] = option;
        setUserAnswers(updatedAnswers);
    }

    const handleNextQuestion = () => {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }

    const handleSubmitQuiz = () => {
        const updatedScore = userAnswers.reduce((scoreCount, userAnswer, index) =>{
            if(userAnswer === questions[index].correctAnswer){
                return scoreCount + 1
            }
            return scoreCount;
        }, 0);
        setScore(updatedScore);
        setShowResult(true);
    }
    
    const renderQuestion = () => {
        const question = questions[currentQuestion];
        return (
            <div>
                <h3> question.question </h3>
                <ul style="list-style-type:none;">
                    {question.options.map((option, index) => (
                    <li key="index">
                        <label>
                            <input
                                type="radio"
                                value={option}
                                checked={userAnswers[currentQuestion] === option}
                                onChange={() => handleAnswerSelection(option)}
                            />
                            {option}
                        </label>
                    </li>
                ))}
                </ul>
            </div>
        );
    };

    const renderResult = () => {
        return(
            <div>
            <h3> Your score: {score} </h3>
            <button onClick={() => setShowResult(false)}>Restart Quiz</button>
            </div>
        )};

    return(
        <div>
            {showResult ? (renderResult()) 
            :(
                <div>
                    {renderQuestion()}
                    {currentQuestion < questions.length-1 ? (
                        <button onClick={handleNextQuestion}>Next Question</button>
                    ): (
                        <button onClick={handleSubmitQuiz}> Submit Quiz</button>
                    )}
                </div>
            )}
        </div>
    );
};



export default Questions;

