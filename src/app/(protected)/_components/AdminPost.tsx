import Link from 'next/link';
import Avatar from '@/app/(protected)/_components/Avatar';

interface AdminPostTypes {
  id: string;
  type: string;
  user: {
    firstName: string;
    lastName: string;
    username: string;
  };
  createdAt: any;
  post: {
    title: string;
    content: string;
  };
}

export default function AdminPost({
  user,
    post,
}: AdminPostTypes) {
  return (
    <article className='news-post'>
      <header>
        <Avatar
          src='https://i.ibb.co/s5smtmL/profile-pic.jpg'
          business={true}
        />
        <Link href={''} id='url-profile'>
          <h4>{`${user.firstName} ${user.lastName}`}</h4>
        </Link>
      </header>
      <section>
        <h4>{post.title}</h4>
        <p>{post.content}</p>
      </section>
    </article>
  );
}
