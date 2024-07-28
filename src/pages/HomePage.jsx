import React, { useState } from 'react';
import ModelMain from '../layouts/ModelMain';
import Post from '@/components/Post';
import { useQuery } from '@tanstack/react-query';
import { getPosts } from '@/api/postsApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deletePost } from '@/api/postsApi';
// import NewPost from '@/components/NewPost';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { supabase } from '@/api/supabase';

export default function HomePage() {
  const [post, setPost] = useState({
    title: '',
    description: '',
  });
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      console.log(post);
      const {
        data: { user },
      } = await supabase.auth.getUser();
      console.log(user);
      const { data: result, error } = await supabase.from('posts').insert({
        title: post.title,
        description: post.description,
        user_id: user.id,
      });
      if (error) throw error;
      
    console.log('Post creado:', result);
    // Reiniciar el formulario
  } catch (error) {
    console.error('Error al crear el post:', error.message);
    // Aquí podrías mostrar un mensaje de error al usuario
  }
  };

  return (
    <>
      <ModelMain id='timeline' className='home'>
        <Accordion className='accordions' id='new-post-accordion'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className='arrow-icons' />}
            id='new-post-accordion-header'
          >
            <h2 className='impact'>Nuevo Post</h2>
          </AccordionSummary>
          <AccordionDetails
            className='list-container items-categories'
            id='new-post-accordion-content'
          >
            {/* <NewPost /> */}
            <form action='' onSubmit={handleSubmit}>
              <input
                type='text'
                name='title'
                placeholder='Titulo del post'
                onChange={e => setPost({ ...post, title: e.target.value })}
              />
              <input
                type='text'
                name='description'
                placeholder='Descripción del post'
                onChange={e =>
                  setPost({ ...post, description: e.target.value })
                }
              />
              <button type='submit'>Crear Post</button>
            </form>
          </AccordionDetails>
        </Accordion>
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
