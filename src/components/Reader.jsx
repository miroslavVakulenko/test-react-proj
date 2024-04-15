import { useState } from "react";

export default function Reader({ items }) {
  const [selectedIdx, setSelectedIdx] = useState(0)
  const handlePrev = () => {
    setSelectedIdx( selectedIdx - 1)
  }
  const handleNext = () => {
    setSelectedIdx(selectedIdx +1)
  }
  const currentItem = items[selectedIdx];
  
  const totalLength = items.length;
  return (
    <div>
      <div>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
      <p>{selectedIdx + 1}/{totalLength}</p>
      <article>
        <h2>{currentItem.topic}</h2>
        <p>{currentItem.text}</p>
      </article>
    </div>
  )
}