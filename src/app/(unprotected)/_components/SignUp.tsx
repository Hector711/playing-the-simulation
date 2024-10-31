/** @format */

'use client';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/app/_firebase/clientConfig';
import { EventType } from '@/types';
import { useForm } from 'react-hook-form';
import { createUserDocWithUid } from '@/app/_firebase/users';
import Spinner from '@/components/Spinner';
export default function SignUp() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    try {
      const res = await createUserWithEmailAndPassword(
        form.email,
        form.password,
      );

      const uid = res?.user?.uid;
      if (!uid) {
        throw new Error('No se pudo obtener el UID del usuario.');
      }

      await createUserDocWithUid(uid, {
        email: form.email,
        username: form.email,
        firstName: '',
        lastName: '',
      });
      setForm({ email: '', password: '' });
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOnChange = (e: EventType) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form action='' onSubmit={handleSubmit(handleSignUp)} id='login-form'>
        <input
          type='email'
          placeholder='Email'
          {...register('email', { required: true })}
          onChange={handleOnChange}
        />
        <input
          type='password'
          placeholder='Password'
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
          <p className='errors'>{String(errors.password.type)}</p>
        )}
        <button type='submit' disabled={isLoading}>
          {isLoading ? <Spinner /> : 'Registrarse'}
        </button>
      </form>
    </>
  );
}
