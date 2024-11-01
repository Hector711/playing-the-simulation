/** @format */

import Link from 'next/link';

export default function page() {
  return (
    <>
      <p className='text-lg font-semibold'>Ya tienes una cuenta en Skool?</p>
      <div id='skool-buttons' className='flex space-x-4 mt-4'>
        <Link
          className='px-4 py-2 bg-green-500 rounded hover:bg-green-600 transition duration-300'
          href='/signup/username-form'
        >
          Si
        </Link>
        <Link
          className='px-4 py-2 bg-red-500 rounded hover:bg-red-600 transition duration-300'
          href='/signup/new-account'
        >
          No
        </Link>
      </div>
    </>
  );
}
