/** @format */

import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { auth } from '@/app/_firebase/_admin/_adminConfig';
import { cookies, headers } from 'next/headers';
import { getUserSkool } from '@/app/_firebase/_admin/adminSkoolUsers';
import { createUserFromSkoolData } from '@/app/_firebase/_admin/adminUsers';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  // HEADER
  const header = await headers();
  const authorization = header.get('Authorization');
  // BODY
  const { uid, username } = await req.json();

  // Comprobamos si hay token
  if (!authorization || !authorization?.startsWith('Bearer ')) {
    return NextResponse.json(
      { error: 'No se ha proporcionado un token de autenticación' },
      { status: 401 },
    );
  }
  await verifyToken(authorization);

  const response = await createUser(uid, username);
  return response;
}

const expiresIn = 60 * 60 * 24 * 5 * 1000;

async function verifyToken(authorization: string) {
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
    console.log('Token verified');
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
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: 'Error al gestionar la session token' },
      { status: 401 },
    );
  }
}

async function createUser(uid: string, username: string) {
  try {
    // 'hector-luengo-guerra-1936'
    const skoolUser = await getUserSkool(username);
    console.log('skoolUser -->', skoolUser);
    await createUserFromSkoolData(uid, skoolUser);

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
