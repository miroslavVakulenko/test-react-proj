
import css from "./ArticleView.module.css"

export default function ArticleView({ article: { topic, text } }) {
  return (
    <article className={css.article}>
        <h2 className={css.articleHeader}>{topic}</h2>
        <p className={css.articleText}>{text}</p>
      </article>
  )
}