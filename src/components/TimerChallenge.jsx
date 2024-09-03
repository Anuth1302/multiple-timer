import { useState,useRef } from "react"

export default function TimerChallenge({title, targetTime}){

    const [timeStarted, setTimerStarted] = useState(false)
    const [timerExpired, setTimerExpired] = useState(false)
    const timer = useRef()

    function handleStart(){
        setTimerStarted(true)

        timer.current = setTimeout(()=>{
            setTimerExpired(true)
        },targetTime*1000)
    }

    function handleStop(){
        clearTimeout(timer.current)

    }

    return <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>You lost!</p>}
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
}