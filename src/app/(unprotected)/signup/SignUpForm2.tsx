/** @format */

'use client';

import { signUpUser } from '@/app/_firebase/auth';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Spinner from '@/components/Spinner';

export default function Page() {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleOnChange = (e: any) => {
    // Manejar cambios si es necesario
  };

  const handleSignUp = async (values: any) => {
    setIsLoading(true);
    try {
      await signUpUser({
        ...values,
        // Valores por defecto para los campos requeridos por Firebase
        firstName: 'Usuario',
        lastName: 'Nuevo',
        phone: '',
        birthDate: new Date().toISOString(),
        gender: 'N/A',
        region: 'Default',
        zone: 'Default',
        location: 'Default',
        confirmPassword: values.password,
      });
      router.replace('/');
    } catch (error: any) {
      alert(error.message || 'Ha ocurrido un error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className='flex flex-col items-center justify-center min-h-screen'>
      <form
        action=''
        onSubmit={handleSubmit(handleSignUp)}
        id='login-form'
        className='flex flex-col gap-4 w-full max-w-sm p-8'
      >
        <input
          type='email'
          placeholder='Email'
          className='p-2 border rounded'
          {...register('email', { required: true })}
          onChange={handleOnChange}
        />

        <input
          type='password'
          placeholder='Password'
          className='p-2 border rounded'
          {...register('password', {
            required: true,
            minLength: {
              value: 6,
              message: 'La contraseña debe tener al menos 6 caracteres',
            },
          })}
          onChange={handleOnChange}
        />

        {errors.password && (
          <p className='text-red-500'>{String(errors.password.message)}</p>
        )}

        <button
          type='submit'
          disabled={isLoading}
          className='p-2 bg-blue-500 text-white rounded disabled:opacity-50'
        >
          {isLoading ? <Spinner /> : 'Registrarse'}
        </button>
      </form>
    </main>
  );
}
