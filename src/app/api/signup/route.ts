/** @format */

import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { auth } from '@/app/_firebase/_adminConfig';
import { cookies, headers } from 'next/headers';
import { getUserSkool } from '@/app/_firebase/skoolUsers';
import { createUserFromSkoolData } from '@/app/_firebase/_admin/users';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  const header = await headers();
  const authorization = header.get('Authorization');
  console.log(authorization);

  if (!authorization || !authorization?.startsWith('Bearer ')) {
    return NextResponse.json(
      { error: 'No se ha proporcionado un token de autenticación' },
      { status: 401 },
    );
  }
  await verifyToken(authorization);

  const { uid, email, username } = await req.json();
  
  const response = await createUser(uid, email, username);

  return response;
}

async function verifyToken(authorization: string) {
  try {
    const idToken = authorization.split('Bearer ')[1];
    const verified = await auth.verifyIdToken(idToken);

    if (!verified) {
      return Response.json(
        { error: 'Error al verificar el token' },
        { status: 401 },
      );
    }
    console.log('Token verified');
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
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: 'Error al gestionar la session token' },
      { status: 401 },
    );
  }
}

async function createUser(uid: string, email: string, username: string) {
  console.log({ uid, email });

  try {
    // 'hector-luengo-guerra-1936'
    const skoolUser = await getUserSkool(username);
    await createUserFromSkoolData(skoolUser);

    return Response.json(
      { message: 'Inicio de sesión exitoso' },
      { status: 200 },
    );
  } catch (error) {
    return Response.json(
      { error: 'Error al crear el usuario' },
      { status: 500 },
    );
  }
}
