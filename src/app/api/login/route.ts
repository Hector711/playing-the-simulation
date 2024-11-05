/** @format */

import { auth } from '@/app/_firebase/_adminConfig';
import { cookies, headers } from 'next/headers';
import { getUserDoc } from '@/app/_firebase/users';
import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';

/**
 * CALLED FROM MIDDLEWARE
 * */
export async function GET() {
  console.log('No verified');

  try {
    const header = await headers();
    const session = header.get('Session');

    if (!session) {
      return NextResponse.json(
        { isLogged: false, error: 'No se ha encontrado sesion' },
        { status: 401 },
      );
    }

    const verified = await auth.verifySessionCookie(session, true);
    if (!verified) {
      return NextResponse.json(
        { isLogged: false, error: 'No se ha podido verificar la sesión' },
        { status: 401 },
      );
    }
    console.log('No verified');


    const userID = verified.user_id;
    const user = await getUserDoc(userID);
    if (!user) {
      return NextResponse.json(
        {
          isLogged: false,
          error:
            'Se ha verificado la sesion pero no se han encontrado los datos del usuario',
        },
        { status: 401 },
      );
    }

    console.log('cookie verified with user');
    return NextResponse.json({ isLogged: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ isLogged: false }, { status: 500 });
  }
}

export async function POST() {
  try {
    const header = await headers();
    const authorization = header.get('Authorization');
    if (authorization?.startsWith('Bearer ')) {
      const idToken = authorization.split('Bearer ')[1];
      const decodedToken = await auth.verifyIdToken(idToken);
      if (decodedToken) {
        // Generate session cookie
        const expiresIn = 60 * 60 * 24 * 5 * 1000;
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
