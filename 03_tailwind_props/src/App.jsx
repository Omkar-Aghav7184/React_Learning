import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {

  let obj = {
    name: "Omkar",
    email: "omkar@google.com",
    age:23
  }

  let arr= [1,2,3,4,5];
  return (
    <>
      <h1 className='bg-orange-400 text-white p-4 rounded-2xl  mb-4  '>Tailwind Test</h1>
      <Card username="Omkar Aghav" myObj= {obj} myArr= {arr} btnText="Click me"/>
      <Card username= "Omkar Aghav" myObj = {obj} btnText="visit me" />
    </>
  )
}
export default App
