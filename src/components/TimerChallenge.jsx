import { useState,useRef } from "react"
import ResultModal from "./ResultModal"

export default function TimerChallenge({title, targetTime}){

    const [timeStarted, setTimerStarted] = useState(false)
    const [timerExpired, setTimerExpired] = useState(false)
    const timer = useRef()
    const dialog = useRef()

    function handleStart(){
        

        timer.current = setTimeout(()=>{
            setTimerExpired(true)
            dialog.current.showModal();
        },targetTime*1000)

        setTimerStarted(true)
    }

    function handleStop(){
        clearTimeout(timer.current)

    }

    return <>
    <ResultModal ref={dialog} result='lost' targetTime={targetTime} />
    <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time"> 
            {targetTime} second{targetTime > 1 ? 's':''}
        </p>
        <p>
            <button onClick={timeStarted ? handleStop : handleStart}>
                {timeStarted ? 'Stop' : 'Start'} Challenge
            </button>
        </p>
        <p className={timeStarted ? 'active' : undefined}>
            {timeStarted ? 'Timer is running...' : 'Timer inacgive' }
        </p>
    </section>
    </>
}