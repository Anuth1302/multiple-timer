import { useState,useRef } from "react";
export default function Player() {

  const [enteredPlayerName , setEnteredPlayerName] = useState(null)
  // const [submitted , setSubmitted ] = useState(false)
  const playerName = useRef()

//   function handleChange(e){
//     setSubmitted(false)
// setEnteredPlayerName(e.target.value)
//   }

  function handleClick(){
    setEnteredPlayerName(playerName.current.value)
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown Person'}</h2>
      <p>
        <input ref={playerName} type="text"/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
