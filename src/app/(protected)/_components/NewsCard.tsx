import Link from 'next/link';
import AvatarUser from '@/app/(protected)/_components/AvatarUser';
import { NewsCardTypes } from '@/types/postsTypes';

export default function NewsCard({ type, user, post }: NewsCardTypes) {
  if (type === 'Noticia') {
    return (
      <article className='news-post'>
        <section>
          <h4>{post.title}</h4>
          <p>{post.content}</p>
        </section>
      </article>
    );
  } else {
    return (
      <article className='news-post'>
        <header>
          <AvatarUser
            alt={user?.firstName || ''}
            src='https://i.ibb.co/s5smtmL/profile-pic.jpg'
            size='news'
            status='entrepeneur'
          />
          <Link href={''} id='url-profile'>
            <h4>{`${user?.firstName || ''} ${user?.lastName || ''}`}</h4>
          </Link>
        </header>
        <section>
          <h4>{post.title}</h4>
          <p>{post.content}</p>
        </section>
      </article>
    );
  }
}
