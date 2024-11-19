/** @format */

import { cookies, headers } from 'next/headers';
import { auth } from '@/app/_firebase/_admin/_adminConfig';
export const dynamic = 'force-dynamic';

const expiresIn = 60 * 60 * 24 * 5 * 1000;

/* *
 * CALLED FROM GOOGLE AUTH BUTTON
 * */
export async function POST() {
  const header = await headers();
  const authorization = header.get('Authorization');
  // Comprobamos si hay token
  if (!authorization || !authorization?.startsWith('Bearer ')) {
    return Response.json(
      { error: 'No se ha proporcionado un token de autenticación' },
      { status: 401 },
    );
  }
  try {
    // Verify token
    const idToken = authorization.split('Bearer ')[1];
    const verifyToken = await auth.verifyIdToken(idToken);
    if (!verifyToken) {
      return Response.json(
        { error: 'Error al verificar el token' },
        { status: 401 },
      );
    }

    // Create session cookie
    const sessionCookie = await auth.createSessionCookie(idToken, {
      expiresIn,
    });

    // Set cookie
    const cookie = await cookies();
    cookie.set('__session', sessionCookie, {
      maxAge: expiresIn,
      httpOnly: true,
      secure: true,
    });

    return Response.json(
      { message: 'Inicio de sesión exitoso' },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Error al iniciar sesión' }, { status: 401 });
  }
}
