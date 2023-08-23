import "./styles.css";
import { useState } from "react";

export default function App() {
  const [timer, setTimer]=useState(0);
  const startTimer = () => {
    // Complete this function
    window.mytimer=setInterval(()=>{
      setTimer((timer)=>timer+1)
    },1000)
  };
  const stopTimer = () => {
   clearInterval(window.mytimer)
  };
  const resetTimer = () => {
    // Complete this function
  clearInterval(window.mytimer);
  setTimer(0)
  };
  return (
    <div className="container">
      <h1>Timer</h1>
      <span>{Math.trunc(timer / 60)} mins </span>
      <span>{timer % 60} secs</span>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
