/** @format */

'use client';

import { useEffect } from 'react';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError(props: ErrorProps) {
  useEffect(() => {
    // Aqui puedes ejecutar servicios de observabilidad, servicios que monitoriean la aplicación.
    console.log(props.error);
  }, [props.error]);

  return (
    <main>
      <div>
        <h1 className='text-2xl font-bold text-red-500'>
          Ha ocurrido un Error 😢
        </h1>
        <button
          onClick={props.reset}
          className='mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-300'
        >
          Volver a intentarlo
        </button>
      </div>
    </main>
  );
}
