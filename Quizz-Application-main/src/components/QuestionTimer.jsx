import { useEffect, useState } from "react";

export default function QuestionTimer({timeout, onTimeOut, mode}){

    const [remainingTime,setRemainingTime] = useState(timeout);
    
    useEffect(()=>{
        console.log('setting time');
        const timer = setTimeout(onTimeOut,timeout);
        return ()=>{
            clearTimeout(timer);
        }
    },[onTimeOut,timeout])

    useEffect(()=>{
        console.log('setting inter');
        const interval= setInterval(()=>{
            setRemainingTime((prevRemainingTime)=> prevRemainingTime - 100);
        },100);
        return ()=>{
            clearInterval(interval);
        }
    },[]);

    return (
    <progress id="question-time" max={timeout} value={remainingTime} className={mode}/>
    )
}