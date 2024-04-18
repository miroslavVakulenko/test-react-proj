// src/App.jsx

// import { Product } from './Product';
// import Toggler from "./Toggler" 
import Reader from "./Reader/Reader"
import articles from "./articles.json"
import ClickCounter from "./ClickCounter/ClickCounter"
import { useState } from "react"
import Timer from "./Timer/Timer"
// import { useState } from "react";

// import PaymentCard from "./PaymentCard"
export default function App() {
  // const handleClick = (arg, clientX, evt) => {
  //   console.log(arg, clientX, evt);
  // }
  
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('submit done')
  // }

  // const [text, setText] = useState("hello")
  // const handleChange = () => {
  //   setText(event.target.value);
  // }
  // // false practice, use multiple states for couple buttons--------
  // const [clicks, setClicks] = useState(0);
  // const handleClick1 = () => {
  //   setClicks(clicks + 1);
  // }
  // const [clicks2, setClicks2] = useState(0);
  // const handleClick2 = () => {
  //   setClicks2(clicks2 + 1);
  // }
  //false practice end-------

  // const ClickCounter = () => {
  //   const [clicks, setClicks] = useState(0);
  //   const handleClick = () => {
  //     setClicks(clicks + 1);
  //   }
  // }
  const [isTimerVisible, setIsTimerVisible] = useState(false);
  return (
    <>
      <h1>State in React</h1>
      <hr />
      {/* тут ми використовуємо вбудовану в браузер api через обгортку event */}
      {/* <button onClick={(evt) => { handleClick("arg", evt.clientX, evt) }}>Click me</button> */}
      {/* submit form */}
      {/* <form onSubmit={handleSubmit}>
        <button>Submit</button>
      </form> */}
      {/* useState change markup */}
      {/* <input type="text" onChange={handleChange} /> */}
      {/* <p>{text}</p> */}
      {/* false practice----- */}
      {/* <button onClick={handleClick1}>Clicks number: {clicks}</button>
      <button onClick={handleClick2}>Clicks number: {clicks2}</button> */}
      {/* false practice end----- */}
      {/* state isolation */}
      {/* <ClickCounter />
      <ClickCounter />
      <ClickCounter /> */}
      {/* <PaymentCard />
    <Toggler/>
    <Toggler/>
    <Toggler /> */}
      <Reader items={articles} /> 
      {/* useEffect hook */}
      <ClickCounter />
      <button onClick={() => setIsTimerVisible(!isTimerVisible)}>{isTimerVisible ? "Hide" : "Show" }</button>
      {isTimerVisible && <Timer/>}
    </>
  )
}


  