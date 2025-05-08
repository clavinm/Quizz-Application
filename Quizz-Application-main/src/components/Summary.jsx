import quizCompleteLogo from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js'
export default function Summary({userAnswers}){
    //if stored values are false then ?? and for true values && is used for short validation in if statements
    const skippedAnswers = userAnswers.filter(answer => answer === null);
    const correctAnswer = userAnswers.filter((answer,index) => answer === QUESTIONS[index].answers[0]);

    const skippedAnswersShare = Math.round((skippedAnswers.length / userAnswers.length)*100); 
    const correctAnswersShare = Math.round((correctAnswer.length / userAnswers.length)*100); 
    const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;
    return(
        <div id="summary">
            <img src={quizCompleteLogo} />
            <h2>Quizz is complete</h2>
            <div id="summary-stats">
                <p>
                    <span className='number'>{skippedAnswersShare}%</span>
                    <span className='text'>skipped</span>
                </p>
                <p>
                    <span className='number'>{correctAnswersShare}%</span>
                    <span className='text'>Answered Correctly</span>
                </p>
                <p>
                    <span className='number'>{wrongAnswersShare}%</span>
                    <span className='text'>Answered Incorrectly</span>
                </p>
            </div>
            <ol>
            {userAnswers.map((answers,index)=>{
                let cssClass = 'user-answer';

                if(answers === null){
                    cssClass += ' skipped';
                }else if(answers === QUESTIONS[index].answers[0]){
                    cssClass += ' correct';
                }else{
                    cssClass += ' wrong';
                }
                return(
                <li key={index}>
                    <h3>{index + 1}</h3>
                    <p className='question'>{QUESTIONS[index].text}</p>
                    <p className={cssClass}>{answers ?? 'Skipped'}</p>
                </li>
                )
            })}
            </ol>
        </div>
    )
}