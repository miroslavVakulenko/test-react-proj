import css from "./Controls.module.css"

export default function Controls({ isFirst, isLast, onPrev, onNext }) {
  return (
    <div className={css.buttonWrapper}>
      <button className={css.button} onClick={onPrev} disabled={isFirst} >Prev</button>
      <button className={css.button} onClick={onNext} disabled={isLast}>Next</button>
    </div>
  )
}