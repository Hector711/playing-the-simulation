/** @format */

import React from 'react';

export function NewAccount() {
  return (
    <>
      <p className='text-base text-white'>
        Si no tienes una cuenta en Skool asociada a PTS no puedes entrar
        (todavía).
      </p>
      <p className='text-base text-white'>
        Pero en las próximas semanas implementaremos acceso para invitados.
      </p>
      <p className='text-base text-white'>
        Si quieres estar al tanto, déjame tu email y te avisaré!
      </p>
      <input
        type='email'
        placeholder='Email'
        className='w-full p-2 mt-2 border border-gray-300 text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
      <button className='bg-blue-500 text-white px-4 py-2 rounded'>
        Enviar
      </button>
    </>
  );
}
