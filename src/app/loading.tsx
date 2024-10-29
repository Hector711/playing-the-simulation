import Spinner from '@/components/Spinner';

export default function loading() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Spinner />
    </div>
  );
}
