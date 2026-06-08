import React from "react";


export default function Question({number , totalQuestions  , question , opt1 , opt2 , opt3 , opt4 , answer_f , user_answer , _setIsSubmited}) : React.ReactElement
{

    return (
        <div className="question-container">
            <h2>Question number {number} out of {totalQuestions}</h2>
            <button className={`submit ${number === totalQuestions ? "" : "invisible"}`} onClick={_setIsSubmited}>Submit</button>
            <p className="question">{question}</p>
            <div className="option">
                <p className={`opt1 ${user_answer === 1 ? "selected" : ""}`} onClick={() => answer_f(1)}>{opt1}</p>
                <p className={`opt2 ${user_answer === 2 ? "selected" : ""}`}  onClick={() => answer_f(2)}>{opt2}</p>
                <p className={`opt3 ${user_answer === 3 ? "selected" : ""}`}  onClick={() => answer_f(3)}>{opt3}</p>
                <p className={`opt4 ${user_answer === 4 ? "selected" : ""}`}  onClick={() => answer_f(4)}>{opt4}</p>
            </div>
        </div>
    );
}