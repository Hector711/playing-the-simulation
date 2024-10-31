/** @format */

import { getDocs, query, orderBy, limit, startAfter } from 'firebase/firestore';
import getCollection from '@/app/_firebase/getCollection';

const PAGE_SIZE = 10;

export async function countPages(): Promise<number> {
  const collectionRef = await getCollection('posts');
  const snapshot = await getDocs(collectionRef);
  const totalPages = Math.ceil(snapshot.size / PAGE_SIZE);
  return totalPages;
}

export async function fetchPosts() {
  const postsCollection = await getCollection('posts');
  const q = query(
    postsCollection,
    orderBy('createdAt', 'desc'),
    limit(PAGE_SIZE),
  );
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map(doc => doc.data());
  return data;
}

export async function getPostsPerPage(pageNumber: number = 1) {
  try {
    const postsCollection = await getCollection('posts');
    const offset = (pageNumber - 1) * PAGE_SIZE;

    let q = query(
      postsCollection,
      orderBy('createdAt', 'desc'),
      limit(PAGE_SIZE),
    );

    if (offset > 0) {
      const initialQuery = query(
        postsCollection,
        orderBy('createdAt', 'desc'),
        limit(offset),
      );
      const initialSnapshot = await getDocs(initialQuery);
      const lastVisibleDoc =
        initialSnapshot.docs[initialSnapshot.docs.length - 1];

      q = query(
        postsCollection,
        orderBy('createdAt', 'desc'),
        startAfter(lastVisibleDoc),
        limit(PAGE_SIZE),
      );
    }

    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map(doc => doc.data());
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}
