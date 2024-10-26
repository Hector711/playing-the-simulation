
interface NoticiaPost {
  id: string;
  type: string;
  date: any;
  title: string;
  content: string;
}

export default function NoticiaPost({ title, content}: NoticiaPost) {
  return (
    <article className='news-post'>
      <section>
          <h4>{title}</h4>
          <p>{content}</p>
      </section>
    </article>
  )
}
