import { useRef } from "react";

export default function Answers({answers,selectedAnswers,answerState,onSelect}){
    const shuffledAnswers = useRef();

    if(!shuffledAnswers.current){
        shuffledAnswers.current = [...answers];
        //Math.random() generates values such as 0 and 1 and deducting 0.5 makes the shuffling works because
        //of the negative numbering
        shuffledAnswers.current.sort(()=> Math.random() - 0.5);
        //10000 milli seconds is equal to 10 seconds
        //key is used to acheive many things it is also used to call QuestionTimer again and again 
        //So that progress bar will be changed each time when questions are changed
        //isSelected is to find that is selected answer is same as last pushed value in useranswer

    }
    return (
        <ul id="answers">
        {shuffledAnswers.current.map(
            (answer) => {
                const isSelected = selectedAnswers === answer;
                let cssClass = '';
                if(answerState === 'answered' && isSelected){
                    cssClass='selected';
                }

                if((answerState === 'correct' || answerState === 'wrong') && isSelected){
                    cssClass = answerState;
                }

                return <li key={answer} className="answer">
                    <button 
                        onClick={() => onSelect(answer)} 
                        className={cssClass}
                        disabled={answerState !== ''}
                    >
                        {answer}
                    </button>
                </li>
            }
        )}
    </ul>

    )
}