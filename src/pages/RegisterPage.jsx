import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/tasks');
    }
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async values => {
    signup(values);
  });

  return (
    <div>
      <h1>Register</h1>
      {registerErrors.map((error, i) => (
        <div className='bg-red-500 p-2' key={i}>
          {error}
        </div>
      ))}
      <form onSubmit={onSubmit}>
        <input
          type='text'
          {...register('username', { required: true })}
          placeholder='Username'
        />
        {errors.username && (
          <p className='text-red-500'>Username is required</p>
        )}
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
        <button type='submit'>Register</button>
      </form>
      <p>
        Allready have an account? <Link to='/login'>Log In</Link>
      </p>
    </div>
  );
}

export default RegisterPage;
