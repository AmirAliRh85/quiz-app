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

const user_answer : itface.UserAnswer[] = [
    {
        id : 1,
        answer : 0,
    },
    {
        id : 2,
        answer : 0,
    },
    {
        id : 3,
        answer : 0,
    }
]

const totalQuestion : number = question_sample.length;


export default function App()
{   
    const [currQuestion , setCurrQuestion] = React.useState(1);
    // console.log(currQuestion);
    
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

    const [userAnswer , setUserAnswer] = React.useState(user_answer);
    
    function _setUserAnswer(val : number)
    {
        const updatedUserAnswers = [...userAnswer];
        if (val === updatedUserAnswers[currQuestion - 1].answer)
            updatedUserAnswers[currQuestion - 1] = {
                ...updatedUserAnswers[currQuestion - 1],
                answer: 0  
            };
        else
            updatedUserAnswers[currQuestion - 1] = {
                ...updatedUserAnswers[currQuestion - 1],
                answer: val  
            };


        setUserAnswer(updatedUserAnswers);
        // console.log(updatedUserAnswers);
    }

    const [isSubmited , setIsSubmited] = React.useState(false);

    function _setIsSubmited()
    {
        setIsSubmited(true);
    }

    if (!isSubmited)
    {
        return (
            <div className="container">
            <Question number={currQuestion} totalQuestions={totalQuestion} question={question_sample[currQuestion - 1].question} 
            opt1={question_sample[currQuestion - 1].options[0]} 
            opt2={question_sample[currQuestion - 1].options[1]} 
            opt3={question_sample[currQuestion - 1].options[2]} 
            opt4={question_sample[currQuestion - 1].options[3]} 
            answer_f={_setUserAnswer}
            user_answer={userAnswer[currQuestion - 1].answer}
            _setIsSubmited={_setIsSubmited}/>
            
            <Navigation nextQuestion_f={nextQuestion} previousQuestion_f={previousQuestion} currQuestion={currQuestion} totalQuestions={totalQuestion}></Navigation>
        </div>
        );
    }
    else
    {
        return (
            <div>Hello World</div>
        );
    }
}