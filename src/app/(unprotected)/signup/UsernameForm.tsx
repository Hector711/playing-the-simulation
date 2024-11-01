
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/app/_firebase/_clientConfig';
import { useUserProfile } from '@/hooks/userProfileHook';
import { UserProfileTypes } from '@/types';
import { useSignUpPhase } from '@/hooks/signUpPhaseHook';

// @hector-luengo-guerra-1936
export  function UsernameForm() {
  const { register, handleSubmit, formState: { errors }, setError } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const { setUserProfile } = useUserProfile();

  const { setSignUpPhase } = useSignUpPhase();

  const findSkoolUser = async (data: any) => {
    setIsLoading(true);
    try {
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('username', '==', data.username));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          const data = doc.data() as UserProfileTypes;
          setUserProfile(data);
          console.log('data -->', data);
          setSignUpPhase(2);
        });
      } 
      if(querySnapshot.empty) {
        setError('username', { message: 'No se encontró ningún usuario con ese username.' });
      }
    } catch (error: any) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(findSkoolUser)} id='skool-form'>
        <p>Introduce tu username de Skool</p>
        
        <input
          type='text'
          placeholder='Username'
          className='text-black'
          {...register('username', { required: 'El username es obligatorio' })}
        />
        {errors.username && (
          <p className='errors'>{String(errors.username.message)}</p>
        )}

        <button type='submit'>{isLoading ? <p>Cargando...</p> : 'Continuar'}</button>
      </form>
    </>
  );
}