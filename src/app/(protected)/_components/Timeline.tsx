'use client';
import { useEffect, useState } from 'react';
import { fetchItems } from '@/app/firebase/getDocuments';
import { DocumentData } from 'firebase/firestore';
import Post from './Post';

export default function Timeline() {
  const [items, setItems] = useState<DocumentData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchItems();
      setItems(data);
    };

    fetchData();
  }, []);

  return (
    <div id='timeline'>
      {items.map((item, index) => (
        <Post 
          {...item} 
          key={index} 
          id={item.id} 
          name={item.name} 
          labels={item.labels} 
          upvotes={item.upvotes} 
          createdAt={item.createdAt}
          user={item.user}
          post={item.post}
        />
      ))}
    </div>
  );
}

{/* <pre className='text-xs w-20'>{JSON.stringify(item, null, 2)}</pre> */}