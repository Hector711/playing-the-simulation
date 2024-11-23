// import Link from 'next/link';
import NotAvailable from '@/components/NotAvailable';

export default function NotFound() {
  return (
    <main>
      <NotAvailable />
      {/* <h1>404: No se encontró la página</h1>
      <h2>Uy! Parece que el enlace se escondió!</h2>
      <Link href='/'>Volver al inicio</Link> */}
    </main>
  );
}
