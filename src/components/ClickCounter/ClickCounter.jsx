import { useState, useEffect } from "react"

export default function ClickCounter() {
  const [clicks, setClicks] = useState(0);

  const updateClicks = () => {
    setClicks(clicks + 1);
  }

  useEffect(() => {
    localStorage.setItem('clicksCount', clicks)
  }, [clicks])

  const [date, setDate] = useState(Date.now());
  const updateDate = () => {
    setDate(Date.now());
  }
  // first arg in useEffect = () =>{}. second = []
  useEffect(() => {
  console.log('useEffect on mount')
  }, [])
  useEffect(() => {
    console.log("hello", date)
  }, [date])
  useEffect(() => {
    console.log("hello", clicks)
  },[clicks])
  return (
    <>
      <button onClick={updateClicks}>Clicks:{clicks} </button>;
      <button onClick={updateDate}>Date: {date}</button>
    </>
  )
}