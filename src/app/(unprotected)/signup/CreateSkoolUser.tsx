import { useRouter } from 'next/navigation';
import { useSignUpPhase } from '@/hooks/useSignUpPhase';
import { useUserProfile } from '@/hooks/useUserProfile';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export function CreateSkoolUser() {
  const router = useRouter();
  const { setSignUpPhase } = useSignUpPhase();
  const { userProfile } = useUserProfile();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    if (userProfile?.id && userProfile?.email) {
      try {
        const response = await axios.post('/api/signup', {
          uid: userProfile.id,
          email: userProfile.email,
          password: data.password,
        });
        console.log(response);

        if (response.status === 200) {
          console.log('Usuario creado con éxito');
          router.push('/');
          setSignUpPhase(0);
        } else {
          console.error('Error al crear el usuario');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    } else {
      console.error("El perfil de usuario no está completo.");
    }
  };

  return (
    <>
      <p>Termina de crear tu usuario en Playing The Simulation 2.0</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder="Email" disabled value={userProfile?.email} />
        <input type="password" placeholder="Contraseña" className="text-black" {...register('password', { required: true })} />
        {errors.password && (
          <p className='errors'>{String(errors.password.message)}</p>
        )}
        <button type="submit">Crear usuario</button>
      </form>
    </>
  );
}
