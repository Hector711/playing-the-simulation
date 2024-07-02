import ModelMain from '@/layouts/ModelMain';
import YouTubeVideo from '@/components/YouTubeVideo';

export default function IntroductionPage() {
  return (
    <ModelMain id='community' className='home introduction-page' title='Introducción'>
      <section className='blurr'>
        <YouTubeVideo url='https://youtube.com/embed/K5DP4p5otPo?si=sG5Jtji_Cwxj26nw' />
        <YouTubeVideo url='https://youtube.com/embed/-7Iv19JomWQ?si=YrBbRj-gfM0wKwSW' />
        <YouTubeVideo url='https://youtube.com/embed/epJi4uLw27s?si=naWaFYdsw96ed6la' />
      </section>
    </ModelMain>
  );
}
