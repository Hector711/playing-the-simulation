import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useForm } from 'react-hook-form';

export default function Login() {
  const { signInWithPassword, setForm, form, signOut } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmitLogIn = async (form) => {
    await signInWithPassword(form);
  };

  const onSubmitSignOut = async () => {
    signOut()
  }

  return (
    <div className='login '>
      <h3>Iniciar Sesión</h3>
      <form action='' onSubmit={handleSubmit(onSubmitLogIn)}>
        <input
          type='email'
          placeholder='Email'
          {...register('email', { required: true })}
          onChange={e => setForm({ ...form, email: e.target.value })}
        />
        {errors.email && <p>{errors.email.message}</p>}
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
          onChange={e => setForm({ ...form, password: e.target.value })}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <button type='submit'>Enviar</button>
      </form>
      <p className='register'>
        ¿Quieres unirte? &nbsp;
        <Link to='/registrate'>
        Regustrate
        </Link>
        <a
          href='https://www.skool.com/playing-the-simulation-7538/about'
          id='join-link'
        >
          Clicka aqui
        </a>
      </p>

      <button onClick={onSubmitSignOut}>Cerrar Sesión</button>
    </div>
  );
}
