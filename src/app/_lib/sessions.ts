import { cookies } from 'next/headers';
import { redirect } from 'next/navigation'; // Añade esta línea


export async function createSession(userId: string) {
  const expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30);
  const cookie = await cookies();
  cookie.set('usuario', userId, { expires });
  redirect('/');
}

export async function verifySession() {
  const cookie = await cookies()
  cookie.get('usuario')?.value;

  if (!cookie) {
    redirect('/login');
  }

  return { userId: cookie };
}

export async function deleteSession() {
  const cookie = await cookies();
  cookie.delete('usuario');
  redirect('/login');
}
