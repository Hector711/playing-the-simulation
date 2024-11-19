/** @format */

import { cookies, headers } from 'next/headers';
import { auth } from '@/app/_firebase/_admin/_adminConfig';
import { adminGetUserDoc } from '@/app/_firebase/_admin/adminUsers';
import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';

const expiresIn = 60 * 60 * 24 * 5 * 1000;

/* *
 * CALLED FROM GOOGLE AUTH BUTTON ???
 * */
export async function POST() {
  try {
    const header = await headers();
    const authorization = header.get('Authorization');
    if (authorization?.startsWith('Bearer ')) {
      const idToken = authorization.split('Bearer ')[1];
      const decodedToken = await auth.verifyIdToken(idToken);
      if (decodedToken) {
        // Generate session cookie
        
        const sessionCookie = await auth.createSessionCookie(idToken, {
          expiresIn,
        });

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
      }
      return Response.json(
        { error: 'Error al iniciar sesión' },
        { status: 401 },
      );
    }

    return Response.json(
      { error: 'No se ha proporcionado un token de autenticación' },
      { status: 401 },
    );
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Error al iniciar sesión' }, { status: 401 });
  }
}
