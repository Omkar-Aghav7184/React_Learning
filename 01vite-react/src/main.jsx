import React, { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>MyApp Vite Omkar Champion </h1>
    </div>
  )
}

// Manual object — not a valid React element (won't render)
let ReactElement = {
  type:'a',
  props: {
    href: "https://www.google.com",
    target:"_blank"
  },
  children: "Click here to visit google page!"
};

// JSX version of <a> tag — valid React element
let renderElement = (
  <a href='https://www.google.com' target='_blank'>Click here to visit google page!</a>
)

let username = " Omkar Aghav"

//using React.createElement()
let ReactInjectedElement = React.createElement(
  'a',
  {href: "https://www.youtube.com", target :"_blank"},
  "Click here to visit youtube page!",
  username

)
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App/>
  // </StrictMode>

  //MyApp() is also executable not a good practice

  // React element, not JSX — rendered using {} inside JSX
  <StrictMode>
    {ReactInjectedElement}
  </StrictMode>

  //without StrictMode
  // ReactInjectedElement
   
)

/**Notes:
 * React.createElement(...) returns a React element, not a component — so you use {ReactInjectedElement} directly.
    JSX (<Component />) is for React components or HTML tags.
 */
