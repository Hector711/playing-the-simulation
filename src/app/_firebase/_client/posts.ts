/** @format */

import { getDocs, query, orderBy, limit, startAfter, collection } from 'firebase/firestore';
import { db } from '@/app/_firebase/_client/_clientConfig';
const PAGE_SIZE = 10;

export async function countPages(): Promise<number> {
  const collectionRef = collection(db, 'posts');
  const snapshot = await getDocs(collectionRef);
  const totalPages = Math.ceil(snapshot.size / PAGE_SIZE);
  return totalPages;
}

export async function fetchPosts() {
  const collectionRef = collection(db, 'posts');
  const q = query(
    collectionRef,
    orderBy('createdAt', 'desc'),
    limit(PAGE_SIZE),
  );
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map(doc => doc.data());
  return data;
}

export async function getPostsPerPage(pageNumber: number = 1) {
  try {
    const collectionRef =  collection(db, 'posts');
    const offset = (pageNumber - 1) * PAGE_SIZE;

    let q = query(
      collectionRef,
      orderBy('createdAt', 'desc'),
      limit(PAGE_SIZE),
    );

    if (offset > 0) {
      const initialQuery = query(
        collectionRef,
        orderBy('createdAt', 'desc'),
        limit(offset),
      );
      const initialSnapshot = await getDocs(initialQuery);
      const lastVisibleDoc =
        initialSnapshot.docs[initialSnapshot.docs.length - 1];

      q = query(
        collectionRef,
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
