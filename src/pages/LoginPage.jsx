import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {
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
      navigate('/tasks');
    }
  }, [isAuthenticated]);

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      {signinErrors.map((error, i) => (
        <div className='bg-red-500 p-2' key={i}>
          {error}
        </div>
      ))}
      <form onSubmit={onSubmit}>
        <input
          type='email'
          {...register('email', { required: true })}
          placeholder='Email'
        />
        {errors.email && <p className='text-red-500'>Email is required</p>}
        <input
          type='password'
          {...register('password', { required: true })}
          placeholder='Password'
        />
        {errors.password && (
          <p className='text-red-500'>Password is required</p>
        )}
        <button type='submit'>Iniciar Sesión</button>
      </form>
      <p>
        Don't have an account? <Link to='/register'>Sign Up</Link>
      </p>
    </div>
  );
}

export default LoginPage;
