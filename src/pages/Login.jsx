import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, isAuthenticated, errors: signinErrors } = useAuth();
  const navigate = useNavigate();
  const onSubmit = handleSubmit(data => {
    signin(data);
  });
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated]);

  return (
    <div className='login'>
      <h3>Iniciar Sesión</h3>
      {signinErrors.map((error, i) => (
        <div className='errors' key={i}>
          {error}
        </div>
      ))}
      <form onSubmit={onSubmit} className='login'>
        <input
          type='email'
          {...register('email', { required: true })}
          placeholder='Email'
        />
        {errors.email && <p className='errors show'>Email is required</p>}
        <input
          type='password'
          {...register('password', { required: true })}
          placeholder='Password'
        />
        {errors.password && <p className='errors show'>Password is required</p>}
        <button type='submit'>Iniciar Sesión</button>
      </form>
      <p className='register'>
        ¿Quieres unirte? &nbsp;
        <a
          href='https://www.skool.com/playing-the-simulation-7538/about'
          id='join-link'
        >
          Clicka aqui
        </a>
      </p>
    </div>
  );
}
