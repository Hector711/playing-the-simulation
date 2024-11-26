import News from '@/app/(protected)/_components/News';
import Timeline from '@/app/(protected)/_components/Timeline';

export default function HomePage() {
  return (
    <main id='home-page'>
      <Timeline />
      <News />
    </main>
  );
}
