import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {supabase} from '@/api/supabase';

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const handlesubmit = async e => {
    try {
      e.preventDefault();
      const {data, error:supabaseError} = await supabase.auth.signInWithPassword({
        email: form.email,
        password: form.password
      });
      navigate('/inicio');
      if (supabaseError) throw supabaseError;
      console.log(data, supabaseError)
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
      setError(error.message);    
    }
  };

  return (
    <div className='login '>
      <h3>Iniciar Sesión</h3>
      <form action='' onSubmit={handlesubmit}>
        <input
          type='email'
          placeholder='Email'
          onChange={e => setForm({...form, email: e.target.value})}
        />
        <input
          type='password'
          placeholder='Password'
          onChange={e => setForm({...form, password: e.target.value})}
        />
        <button>Send</button>
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
