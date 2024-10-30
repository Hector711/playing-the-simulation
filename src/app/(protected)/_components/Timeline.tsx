'use client';
import { useEffect, useState } from 'react';
import { DocumentData } from 'firebase/firestore';
import Post from './Post';
import { useSearchParams } from 'next/navigation';
import { getPostsPerPage } from '@/app/_firebase/getPosts';

export default function Timeline() {
  const [timelinePosts, setTimelinePosts] = useState<DocumentData[]>([]);
  const [page, setPage] = useState(1);
  const searchParams = useSearchParams();

  useEffect(() => {
    const pageParam = searchParams.get('page');
    if (pageParam) {
      setPage(Number(pageParam));
    }
  }, [searchParams]);

  useEffect(() => {
    async function loadData() {
      const data: DocumentData[] = await getPostsPerPage(page);
      console.log(data);
      setTimelinePosts(data);
    }
    loadData();
  }, [page]);

  return (
    <div id='timeline'>
      {timelinePosts.map((item, index) => (
        <Post
          {...item}
          key={index}
          id={item.id}
          name={item.name}
          labels={item.labels}
          upvotes={item.upvotes}
          contributors={item.contributors}
          metadata={item.metadata}
          user={item.user}
          post={item.post}
        />
      ))}
    </div>
  );
}

{
  /* <pre className='text-xs w-20'>{JSON.stringify(item, null, 2)}</pre> */
}
