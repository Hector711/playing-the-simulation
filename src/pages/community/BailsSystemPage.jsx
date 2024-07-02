import ModelMain from '@/layouts/ModelMain';
import YouTubeVideo from '@/components/YouTubeVideo';

export default function BailsSystemPage() {
  return (
    <ModelMain id='bails-page' className='community-common' title='Sistema de fianzas'>
      <YouTubeVideo url='https://youtube.com/embed/1rs38CE7wnA?si=yxvcHfXe8zQ07D99' />
      <p>
        Pasos a seguir para cumplir tus objetivos del mes: Paso 1. Apunta tus objetivos del mes Paso 2. Ve a esta página web Paso 3. Escoge la fianza mas acorde a tus objetivos y haz el pago Paso 4. Ve al apartado de fianzas en los canales de la comunidad y rellena la plantilla del comentario fijado Paso 5. Crea el drive abierto donde subirás tus pruebas comprobables y medibles y adjúntalo en tu comentario. A final de mes se te contactará por privado
        https://carlos-adams.com/sistema-de-fianzas/
      </p>
      <YouTubeVideo url='https://youtube.com/embed/7pGuBEsHwNE?si=xrHM_IJwyoLq7rvW' />
    </ModelMain>
  );
}