import Link from 'next/link';
import Avatar from '@/app/(protected)/_components/Avatar';

interface AdminPost {
  id: string;
  type: string;
  user: {
    fullName: string;
    username: string;
  };
  date: any;
  title: string;
  content: string;
}

export default function AdminPost({
  user,
  title,
  content,
}: AdminPost) {
  return (
    <article className='news-post'>
      <header>
        <Avatar
          src='https://i.ibb.co/s5smtmL/profile-pic.jpg'
          business={true}
        />
        <Link href={''} id='url-profile'>
          <h4>{user.fullName}</h4>
          <span>&#8226; @{user.username}</span>
        </Link>
      </header>
      <section>
        <h4>{title}</h4>
        <p>{content}</p>
      </section>
    </article>
  );
}
