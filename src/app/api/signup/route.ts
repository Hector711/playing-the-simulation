/** @format */

import { NextRequest } from 'next/server';
import { getAuth } from 'firebase-admin/auth';
import { app } from '@/app/_firebase/_adminConfig';
import { NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  if (req.method === 'POST') {
    const { uid, email, password } = await req.json();

    console.log({ uid, email, password });
    try {
      const auth = getAuth(app);
      const userRecord = await auth.createUser({
        uid: uid,
        email: email,
        password: password,
      });
      console.log('Usuario creado:', userRecord.uid);
      return NextResponse.json(
        { message: 'Usuario creado con éxito', uid: userRecord.uid },
        { status: 200 },
      );
    } catch (error) {
      console.error('Error al crear el usuario:', error);
      return NextResponse.json(
        { error: 'Error al crear el usuario' },
        { status: 500 },
      );
    }
  } else {
    return NextResponse.json(
      { error: `Método ${req.method} no permitido` },
      { status: 405 },
    );
  }
}
