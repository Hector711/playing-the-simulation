/** @format */

import { auth } from '@/app/_firebase/_adminConfig';
import { cookies, headers } from 'next/headers';
import { NextRequest } from 'next/server';
import { getUserWithID } from '@/app/_firebase/users';
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const header = await headers();
    const authorization = header.get('Authorization');

    if (authorization?.startsWith('Bearer ')) {
      const idToken = authorization.split('Bearer ')[1];

      const decodedToken = await auth.verifyIdToken(idToken);
      if (decodedToken) {
        //Generate session cookie
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

        return Response.json('', { status: 200 });
      }
      return Response.json('', { status: 401 });
    }

    return Response.json('', { status: 401 });
  } catch (error) {
    console.error(error);
    return Response.json('', { status: 401 });
  }
}

export async function GET(request: NextRequest, response: Response) {
  try {
    const header = await headers();

    const cookie = await cookies();
    const session = cookie.get('__session')?.value || '';

    // Validate if the cookie exist in the request
    if (!session) {
      return Response.json({ isLogged: false }, { status: 401 });
    }

    const verified = await auth.verifySessionCookie(session, true);

    if (!verified) {
      console.log('no verified');
      return Response.json({ isLogged: false }, { status: 401 });
    }
    const userID = verified.user_id;
    const user = await getUserWithID(userID);

    if (!user) {
      console.log('No se ha podido obtener el usuario');
      return Response.json({ isLogged: false }, { status: 401 });
    }

    console.log('cookie verified with user');
    return Response.json({ isLogged: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ isLogged: false }, { status: 500 });
  }
}
