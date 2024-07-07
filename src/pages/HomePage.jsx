import React from 'react';
import ModelMain from '../layouts/ModelMain';
import Post from '@/components/Post';
import { useQuery } from '@tanstack/react-query';
import { getPosts } from '@/api/postsApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deletePost } from '@/api/postsApi';

const navHomePage = [
  { title: 'Afterwork', slug: '' },
  { title: 'Wins', slug: '' },
  { title: 'Biblioteca', slug: '' },
  { title: 'Retos', slug: '' },
  { title: 'Elevator Pitch', slug: '' },

];

export default function HomePage() {
  return (
    <>
      <ModelMain id='timeline' className='home' nav={navHomePage}>
        {/* <NewPost /> */}
        <hr className='home' />
        <Timeline />
      </ModelMain>
    </>
  );
}




function Timeline() {
  const queryClient = useQueryClient();

  const deletePostMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
    },
  });
  // const onHandleDelete = ( post ) => {
  //   // mutate es necesario porque es lo que ejecuta la petición
  //   deletePostMutation.mutate(post.id)
  //   // console.log(post.id);
  // };

  const {
    isLoading,
    data: posts,
    isError,
    error,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    // nos permite seleccionar los datos que queremos de la respuesta
    select: posts => posts.sort((a, b) => b.id - a.id),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className='timeline'>
      <div>
        {posts.map(post => (
          <Post
            key={post.id}
            post={post}
            title={post.title}
            description={post.description}
            fullName={post.fullName}
            urlProfile={post.urlProfile}
            urlPost={post.urlPost}
            type={post.type}
            username={post.username}
            numLikes={post.numLikes}
            numComments={post.numComments}
            profilePic={post.profilePic}
            deleteById={post => {
              deletePostMutation.mutate(post.id);
            }}
            saveById=''
          />
        ))}
        
      </div>
    </section>
  );
}
