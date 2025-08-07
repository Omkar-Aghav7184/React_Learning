import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [color, setColor] = useState("white");
  // This will always log: "object", because useState() returns an array like:
  // const [state, setState] = useState("black"); // => ["black", function]
  // console.log(typeof(useState("black"))); //object

  // console.log(color);
  // console.log(typeof color); //string
  // console.log(typeof setColor); //function
  

  return (
    <div className="w-full h-screen duration-200 flex items-center justify-center"
    style={{backgroundColor:color, margin:0, padding: 0}}>
      <div className='fixed flex flex-wrap items-center justify-center bottom-40 gap-3  bg-amber-500 rounded-3xl shadow-2xs'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-amber-100 px-5 py-5 rounded-3xl'>
          <button 
          onClick={ () => { setColor("red") } }
          className='outline-none bg-red-500 hover:bg-red-600 text-black font-semibold px-4 py-4 rounded-full shadow-2xs'
          style={{backgroundColor:"red"}}
          >Red</button>
          <button
          onClick={ () => { setColor("orange") } }
          className='outline-none bg-orange-500 hover:bg-orange-600 text-black font-semibold px-4 py-4 rounded-full shadow-2xs'
          // style={{backgroundColor:"orange"}}
          >Orange</button>
          <button 
          onClick={ () => { setColor("yellow") } }
          className='outline-none bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-4 rounded-full shadow-md'
          // style={{backgroundColor:"yellow"}}
          >Yellow</button>
          <button 
          onClick={ () => { setColor("green") } }
          className='outline-none bg-green-500 hover:bg-green-600 text-black font-semibold px-4 py-4 rounded-full shadow-md'
          // style={{backgroundColor:"green"}}
          >Green</button>
          <button 
          onClick={ () => { setColor("blue") } }
          className='outline-none bg-blue-500 hover:bg-blue-600 text-black font-semibold px-4 py-4 rounded-full shadow-md'
          // style={{backgroundColor:"blue"}}
          >Blue</button>
          <button
          onClick={ () => { setColor("indigo") } } 
          className='outline-none bg-indigo-500 hover:bg-indigo-600 text-black font-semibold px-4 py-4 rounded-full shadow-md'
          // style={{backgroundColor:"indigo"}}
          >Indigo</button>
          <button 
          onClick={ () => { setColor("violet") } }
          className='outline-none bg-violet-500 hover:bg-violet-600 text-black font-semibold px-4 py-4 rounded-full shadow-md'
          // style={{backgroundColor:"violet"}}
          >Violet</button>
        </div>
      </div>
    </div>
  )
}
/**Notes:
 * 
 * So Why Does onClick={() => { setColor("red"); }} Still Work?
Because: setColor("red") is a side effect, not something you need to return.
React's onClick doesn't care about the return value from your function.
Whether you return a value or not, onClick just runs the function.

Are JavaScript onclick and React's onClick the same?
❌ No, they are not exactly the same.
They look similar, but there are key differences between:
Native HTML/JavaScript onclick=
React's JSX onClick={}

 Important Note:
Even though they both trigger actions on clicks, React's onClick:
Is JSX
Is more JavaScript-like
Does not behave identically to DOM's onclick

Why this happens on reload:
React components don’t remember state across page reloads.
Every time you refresh, it re-runs useState("white"), and sets the background to white again.
 */

export default App
