import { useState,useRef } from "react";
export default function Player() {

  const [enteredPlayerName , setEnteredPlayerName] = useState('')
  const [submitted , setSubmitted ] = useState(false)
  const playerName = useRef()

  function handleChange(e){
    setSubmitted(false)
setEnteredPlayerName(e.target.value)
  }

  function handleClick(){
setSubmitted(true)
  }
  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayerName : 'unknown Person'}</h2>
      <p>
        <input type="text" value={enteredPlayerName} onChange={handleChange}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
