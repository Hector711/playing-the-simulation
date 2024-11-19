/** @format */

import { auth } from '@/app/_firebase/_admin/_adminConfig';
import { adminGetUserDoc } from '@/app/_firebase/_admin/adminUsers';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';

/* *
 * CALLED FROM MIDDLEWARE
 * */
export async function GET() {
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

    const userID = verified.user_id;
    const user = await adminGetUserDoc(userID);

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
