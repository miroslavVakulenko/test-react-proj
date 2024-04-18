import { useState } from "react";
import Controls from "./Controls/Controls";
import Progress from "./Progress/Progress";
import ArticleView from "./ArticleView/ArticleView";
import css from "./Reader.module.css"
export default function Reader({ items }) {
  const [selectedIdx, setSelectedIdx] = useState(0)
  const handlePrev = () => {
    setSelectedIdx( selectedIdx - 1)
  }
  const handleNext = () => {
    setSelectedIdx(selectedIdx +1)
  }
  const totalLength = items.length;
  const isFirst = selectedIdx === 0;
  const isLast = selectedIdx === totalLength - 1;
  const currentItem = items[selectedIdx];

  return (
    <div className={css.reader}>
      <Controls onPrev={handlePrev} onNext={handleNext} isFirst={isFirst} isLast={isLast} />
      <Progress current={selectedIdx +1} total={totalLength} />
      <ArticleView article={currentItem} />
    </div>
  )
}