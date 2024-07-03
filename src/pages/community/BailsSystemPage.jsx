import ModelMain from '@/layouts/ModelMain';
import YouTubeVideo from '@/components/YouTubeVideo';

export default function BailsSystemPage() {
  return (
    <ModelMain
      id='bails-page'
      className='community-common'
      title='Sistema de fianzas'
    >
      <section className='blurr'>
        <YouTubeVideo url='https://youtube.com/embed/1rs38CE7wnA?si=yxvcHfXe8zQ07D99' />
        <YouTubeVideo url='https://youtube.com/embed/7pGuBEsHwNE?si=xrHM_IJwyoLq7rvW' />
      </section>
    </ModelMain>
  );
}
