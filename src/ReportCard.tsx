import React from "react";
import * as itface from "./types";

export default function ReportCard({correctAnswers , wrongAnswers , noAnswers , percentage} : itface.Result) : React.ReactElement
{
    return (
        <div className="reportcard-container">
            <h2>Your final score</h2>
            <hr></hr>
            <div className="correct">
                <p>Correct Answers: {correctAnswers}</p>
            </div>
            <div className="blank">
                <p>No Answers: {noAnswers}</p>
            </div>
            <div className="wrong">
                <p>Wrong Answers: {wrongAnswers}</p>
            </div>
            <div className="percentage">
                <p>Persentage: {percentage}</p>
            </div>
        </div>
    );
}