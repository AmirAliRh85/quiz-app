import Question from "./Question";

export default function App()
{
    return (
        <div>
            <Question number={1} question={"Whats 1+1?"} opt1={4} opt2={3} opt3={2} opt4={1} answer={3}/>
        </div>
    );
}