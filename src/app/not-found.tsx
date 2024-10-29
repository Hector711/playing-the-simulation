import Link from 'next/link';

export default function NotFound() {
  return (
    <main>
      <h1>404: No se encontró la página</h1>
      <h2>Uy! Parece que el enlace se escondió!</h2>
      <Link href='/'>Volver al inicio</Link>
    </main>
  );
}
