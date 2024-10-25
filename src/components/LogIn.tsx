'use client'
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '@/app/firebase/config'
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

export default function LogIn() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignIn = async () => {
    try {
        const res = await signInWithEmailAndPassword(form.email, form.password);
        console.log({res});
        // sessionStorage.setItem('user', true)
        setForm({ email: '', password: '' });
        router.push('/')
    }catch(e){
        console.error(e)
    }
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => 
    setForm({ ...form, email: e.target.value });

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => 
    setForm({ ...form, password: e.target.value });

  return (
    
      <div className='login '>
      <h3>Iniciar Sesión</h3>
      <form action='' onSubmit={handleSubmit(handleSignIn)}>
        <input
          type='email'
          placeholder='Email'
          {...register('email', { required: true })}
          onChange={onChangeEmail}
        />
        {errors.email && <p>{String(errors.email.message)}</p>}
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
          onChange={onChangePassword}
        />
        {errors.password && <p>{String(errors.password.message)}</p>}
        <button type='submit'>Enviar</button>
      </form>
      <p className='register'>
        ¿Quieres unirte? &nbsp;
        <Link href='/registrate'>
        Registrate
        </Link>
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
