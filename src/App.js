import React, {useState} from 'react';
import './style.css';


export default function App() {
  const [count, setCount]= useState(0);
  const [startstop, setAction] = useState("Start")

  const handleStart = ()=> {
    if(startstop === "Start")
      setAction("Stop");
    else{
      setAction("Start");
      setCount(0);
      // clearInterval()
    }

    setInterval(()=> {setCount((v)=> v+1)},1000);

  }; 

  const handlePause = ()=> {
    
  };
  const handleResume = ()=> {
  }

 
  return (
    <>
      <h1>Counter: {count}</h1>
     <button onClick={()=>handleStart()}>{startstop}</button>
     <button onClick={()=>handlePause()}>Pause</button>
     <button onClick={()=>handleResume()}>Resume</button>

    </>
  );
}
/**
 *
 * 1. Implement a basic counter having "START", "RESUME", "PAUSE", "STOP" functionality
 * 2. Only "START" button should only be visible during the initial load or when the user has clicked on "STOP"
 * 3."RESUME", "PAUSE" and "STOP" buttons should only be visible once the user has clicked on "START" button
 */
