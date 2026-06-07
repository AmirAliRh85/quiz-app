import React from "react";


export default function Question({number , totalQuestions  , question , opt1 , opt2 , opt3 , opt4 , correctAnswer , answer}) : React.ReactElement
{
    return (
        <div className="question-container">
            <h2>Question number {number} out of {totalQuestions}</h2>
            <p className="question">{question}</p>
            <div className="option">
                <p className="opt1">{opt1}</p>
                <p className="opt2">{opt2}</p>
                <p className="opt3">{opt3}</p>
                <p className="opt4">{opt4}</p>
            </div>
        </div>
    );
}