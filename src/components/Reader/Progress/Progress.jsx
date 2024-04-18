import css from "./Progress.module.css"

export default function Progress({ current, total }) {
  return (
    <div className={css.progressWrapper}>
      <p className={css.progress}>{current}/{total}</p>
    </div>
    
)
}