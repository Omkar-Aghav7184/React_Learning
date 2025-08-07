import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let [counter, setCounter] = useState(10); // Correct initial state

  const addCounter= () => {
    if(counter>=20){
      console.log("Counter is too large!");
    }
    else{
      // counter = counter + 1;
      //Interview-Ques
      // setCounter( (prevCounter) => (prevCounter + 1) );
      // setCounter( (prevCounter) => (prevCounter+1) );
      // setCounter( (prevCounter) => (prevCounter+1) );
      // setCounter( (prevCounter) => (prevCounter+1) );
      //when you {} it must return anything in arrow function
      // setCounter( (prevCounter) => {return prevCounter+1} );

      // setCounter(counter + 1);
      // setCounter(counter + 1);
      setCounter(counter + 1);
      console.log("Clicked! ",counter); 
    }
  }

  const removeCounter = ()=> {
    if(counter<1){
      console.log("Not Taking Negative values!");
    }
    else{
      // counter = counter -1;
      setCounter(counter - 1);
      console.log("Clicked! ",counter);
    }
  }

  return (
    <div>
        <h1>Counter Game</h1>
        <h2>Counter Value:{counter}</h2>
        <button onClick={addCounter}>Add Counter {counter}</button>
        <br/>
        <button onClick={removeCounter}>Remove Counter {counter}</button>
        <h3><footer>Final: {counter}</footer></h3>
    </div>
  )
}

export default App

/**Notes:
 * React batches multiple setState calls when they're based on the same value (counter + 1), 
 * not the latest one. So all 3 setCounter(counter + 1) calls compute the same value 
 * and effectively result in only one increment, not three.
 */
