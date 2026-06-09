export interface Question {
    id : number;
    question : string;
    options : string[];
    answer : number;
};

export interface UserAnswer {
    id : number;
    answer? : number;
};

export interface Result {
    correctAnswers : number,
    wrongAnswers : number,
    noAnswers : number,
    percentage : number,
};