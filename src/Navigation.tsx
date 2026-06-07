import React from "react";


export default function Navigation({totalQuestions , currQuestion , nextQuestion_f , previousQuestion_f}) : React.ReactElement
{

    console.log(currQuestion);

    return (
        <div className="next-button-container">
            <button className="previous"
            style={{visibility: currQuestion === 1 ? "hidden" : "visible"}}
            onClick={previousQuestion_f}>←</button>

            <button className="next" 
            style={{visibility: currQuestion === totalQuestions ? "hidden" : "visible"}}
            onClick={nextQuestion_f}>→</button>
        </div>
    );
}