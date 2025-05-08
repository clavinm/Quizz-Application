import { useCallback, useState } from "react"
import QUESTIONS from '../questions'
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz(){
    
    const [userAnswers, setUserAnswers] = useState([]);
    //This index holds the current question which the user is answering
    const activeQuestionIndex = userAnswers.length;
    //if the quizz reached to end or not
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
    //submitted answers are stored in array
    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
        setUserAnswers((prevUserAnswers)=>{
            return [...prevUserAnswers, selectedAnswer];
        });
    },[]);
    //Skipped/timeout answers are handled
    const quizSkipAnswers = useCallback(() => 
        handleSelectAnswer(null),
        [handleSelectAnswer]);

    if(quizIsComplete) return <Summary userAnswers={userAnswers}/>

    return (
<div id="quiz">
    <Question 
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}    
        quizSkipAnswers={quizSkipAnswers}
    />
</div>
    )
}