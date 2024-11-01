/** @format */

'use client';
import { useRouter } from 'next/navigation';
import { useUserProfile } from '@/hooks/userProfileHook';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useEffect } from 'react';
export function CompleteUserProfile() {
  const router = useRouter();

  const { userProfile, loadUserProfile } = useUserProfile();

  useEffect(() => {
    loadUserProfile();
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    if (userProfile?.id && userProfile?.email) {
      try {
        const response = await axios.post('/api/signup', {
          uid: userProfile.id,
          email: userProfile.email,
          password: data.password,
        });
        console.log(response);

        if (response.status === 200) {
          console.log('Usuario creado con éxito');
          router.push('/');
        } else {
          console.error('Error al crear el usuario');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    } else {
      console.error('El perfil de usuario no está completo.');
    }
  };

  return (
    <>
      <p className='text-xl font-semibold mb-4'>
        Termina de crear tu usuario en Playing The Simulation 2.0
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=' flex flex-col gap-4 shadow-md rounded px-8 pt-6 pb-8 mb-4'
      >
        <div className='mb-4'>
          <input
            type='email'
            placeholder='Email'
            disabled
            value={userProfile?.email || ''}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <input
            type='password'
            placeholder='Contraseña'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            {...register('password', { required: true })}
          />
          {errors.password && (
            <p className='errors'>{String(errors.password.message)}</p>
          )}
        </div>
        <div className='flex items-center justify-between'>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Crear usuario
          </button>
        </div>
      </form>
    </>
  );
}
