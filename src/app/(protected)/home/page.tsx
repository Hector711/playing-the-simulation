// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ModelMain from '@/layouts/ModelMain';
import ModelLeft from '@/layouts/ModelLeft';
import ModelRight from '@/layouts/ModelRight';
import AsideProfile from '../_components/AsideProfile';
import News from '@/app/(protected)/_components/News';

export default function HomePage() {
  return (
    <>
      <ModelLeft>
        <AsideProfile />
      </ModelLeft>

      <ModelMain id='timeline' className='home'>
        {/* <Accordion className='accordions' id='new-post-accordion'>
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
        </Accordion> */}
        <hr className='home' />
      </ModelMain>
      <ModelRight>
        <News />
      </ModelRight>
    </>
  );
}

// function Timeline() {

//   return (
//     <section className='timeline'>
//       <div>
//         {posts.map(post => (
//           <Post
//             key={post.id}
//             post={post}
//             title={post.title}
//             description={post.description}
//             fullName={post.fullName}
//             urlProfile={post.urlProfile}
//             urlPost={post.urlPost}
//             type={post.type}
//             username={post.username}
//             numLikes={post.numLikes}
//             numComments={post.numComments}
//             profilePic={post.profilePic}
//             deleteById={post => {
//               deletePostMutation.mutate(post.id);
//             }}
//             saveById=''
//           />
//         ))}
//       </div>
//     </section>
//   );
// }
