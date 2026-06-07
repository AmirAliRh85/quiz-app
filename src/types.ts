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