import ModelMain from '@/layouts/ModelMain';
import YouTubeVideo from '@/components/YouTubeVideo';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function IntroductionPage() {
  return (
    <ModelMain className='home community-page' title='Introducción'>
      <section>
        <YouTubeVideo url='https://youtube.com/embed/K5DP4p5otPo?si=sG5Jtji_Cwxj26nw' />
        <h4>Categorias de Post:</h4>
        <CategoriesList />
        <YouTubeVideo url='https://youtube.com/embed/-7Iv19JomWQ?si=YrBbRj-gfM0wKwSW' />
        <YouTubeVideo url='https://youtube.com/embed/epJi4uLw27s?si=naWaFYdsw96ed6la' />
      </section>
    </ModelMain>
  );
}

function CategoriesList() {
  return (
    <>
      {categories.map(({ title, content }, i) => (
        <Accordion 
        // defaultExpanded
         key={i} color='primary'sx={{ boxShadow: 'none', textTransform: 'none', padding: 0, backgroundColor: '#141921' }} >
          
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1-content'
            id='panel1-header'
          >
              <h4>{title}</h4>
          </AccordionSummary>
          <AccordionDetails>
              <p>{content}</p>
          </AccordionDetails>
        </Accordion>
      ))}

      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2-content'
          id='panel2-header'
        >
          <Typography>Header</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </>
  );
}

const categories = [
  {
    title: 'Afterwork',
    content: 'Charla informal. Cada like o comentario suma 1 punto.',
  },
  {
    title: 'Wins',
    content:
      'Sección dedicada a los meritos, logros, informes de ejecución y demás historias de exitos. Aportará puntos extras. ',
  },
  {
    title: 'Biblioteca',
    content:
      'Todos los aportes de valor a la comunidad. Aportará puntos extras.',
  },
  {
    title: 'Retos',
    content:
      'Aquí todos pueden publicar sus retos ademas de los retos oficiales de la comunidad.',
  },
  {
    title: 'Elevator Pitch (Proyectos)',
    content:
      'Publica un elevator pitch de tu proyecto y presenta a la comunidad.',
  },
  {
    title: 'Brainstorming',
    content: 'Publica tus ideas y recibe feedback de la comunidad.',
  },
];
