import { useCallback,useEffect,useRef,useState } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numsAllowed, setNumAllowed] = useState(false);
  const [charsAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //userRef Hook
  const passRef = useRef(null);

  const passwordGenerator = useCallback( () => {
    let pass =""

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numsAllowed) str+= "0123456789"

    if(charsAllowed) str+= "!@#$%^&*-_+=[]{}~`"

    for(let index=1;index<=length;index++)
    {
      let char = Math.floor(Math.random()*str.length+1)
      pass +=str.charAt(char)
    }

    setPassword(pass);

  }, [length,numsAllowed,charsAllowed,setPassword])

  useEffect( ()=> {
    passwordGenerator()
  }, [length,numsAllowed,charsAllowed,passwordGenerator])

  const copyClipBoardPassword = useCallback( ()=>{
    console.log("Password Copied!");
    passRef.current?.select();
    passRef.current?.setSelectionRange(0,20);
    window.navigator.clipboard.writeText(password)

  },[password])

  return (
    <div className=" w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className=" bg-white flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passRef}
        />
        <button className="outline-none bg-pink-500 hover:bg-pink-900 text-black px-3 py-0.5 shrink-0"
        onClick= {() => {
          copyClipBoardPassword()
        }} >
          Copy
        </button>
      </div>
      <div className=' flex text-sm gap-x-2'>
        <div className=' flex items-center gap-x-1'>
          <input
            type="range"
            min={5}
            max={50}
            value={length}
            className="cursor-pointer"
            onChange={ (e)=> {
              setlength(Number(e.target.value)) // Because slider value is string by default
            }}
          />
          <label> Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={numsAllowed}
            id="NumberInput"
            onChange={ ()=>{
              setNumAllowed( (prevNum)=> (!prevNum))
            }}
          />
          <label htmlFor="NumberInput">Number:</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={charsAllowed}
            id="characterInput"
            onChange={ ()=>{
              setCharAllowed((prevChar)=>(!prevChar))
            }}
          />
          <label>Characters:{charsAllowed}</label>
        </div>
      </div>
    </div>
  );
}

export default App;

/**Notes:
 * <button onClick={copyClipBoardPassword()}>Copy</button>  // Logs immediately when app loads
<button onClick={copyClipBoardPassword}>Copy</button>    // Logs only when clicked

Rule of Thumb for Beginners
If...	Then use...
Just want to call a function (no args)	onClick={myFunction}
Need to call with args or add extra logic	onClick={() => myFunction(args)}

 */
