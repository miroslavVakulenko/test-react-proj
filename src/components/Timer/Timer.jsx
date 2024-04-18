import { useEffect } from "react"

export default function Timer() {

  useEffect(() => {
    const id = setInterval(() => {
      console.log('1sec')
    }, 1000);
    //
    return () => {
      clearInterval(id);
    }
  }, [])
  return <p> seconds</p>
}