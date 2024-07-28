import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useForm } from 'react-hook-form';

export default function RegisterPage() {
  const [registerForm, setRegisterForm] = useState({
    email: '',
    password: '',
  });
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form action="">
      <input
          type='email'
          placeholder='Email'
          {...register('email', { required: true })}
          onChange={e => setRegisterForm({ ...registerForm, email: e.target.value })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      <input
          type='phone'
          placeholder='Numero teléfono'
          {...register('phone', { required: true })}
          onChange={e => setRegisterForm({ ...registerForm, phone: e.target.value })}
        />
        {errors.phone && <p>{errors.phone.message}</p>}
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
          onChange={e => setRegisterForm({ ...registerForm, password: e.target.value })}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <button type='submit'>Enviar</button>
      </form>
  )
}
