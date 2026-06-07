import Question from "./Question";
import Navigation from "./Navigation";
import * as itface from "./types";
import React from "react"


const question_sample : itface.Question[] = [
    {
        id : 1,
        question : "What's 1 + 1?",
        options : ["1" , "2" , "3" , "4"],
        answer : 2
    },
    {
        id : 2,
        question : "What's 1 - 1?",
        options : ["1" , "2" , "0" , "-1"],
        answer : 3    
    },
    {
        id : 3,
        question : "which one of these programming language is faster?",
        options : ["C" , "Java" , "JavaScript" , "Python"],
        answer : 1    
    }
]

const totalQuestion : number = question_sample.length;


export default function App()
{   
    const [currQuestion , setCurrQuestion] = React.useState(1);
    console.log(currQuestion);
    
    function nextQuestion()
    {
        if (currQuestion < totalQuestion)
            setCurrQuestion(currQuestion + 1);
    }

    function previousQuestion()
    {
        if (currQuestion > 1)
            setCurrQuestion(currQuestion - 1);
    }

    return (
        <div className="container">
            <Question number={currQuestion} totalQuestions={totalQuestion} question={question_sample[currQuestion - 1].question} 
            opt1={question_sample[currQuestion - 1].options[0]} 
            opt2={question_sample[currQuestion - 1].options[1]} 
            opt3={question_sample[currQuestion - 1].options[2]} 
            opt4={question_sample[currQuestion - 1].options[3]} 
            answer={question_sample[currQuestion - 1].answer}/>
            
            <Navigation nextQuestion_f={nextQuestion} previousQuestion_f={previousQuestion} currQuestion={currQuestion} totalQuestions={totalQuestion}></Navigation>
        </div>
    );
}