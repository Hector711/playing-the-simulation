import { createContext, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPosts } from '@/api/postsApi';

const PostsContext = createContext();

export const usePosts = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error('usePosts must be used within a PostsProvider');
  }
  return context;
};
export function PostsProvider({ children }) {
  const {
    isLoading,
    data: posts,
    isError,
    error,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  return (
    <PostsContext.Provider
      value={{
        isLoading,
        isError,
        error,
        posts
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}
