/** @format */

import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const cookie = await cookies();
  const sessionCookie = cookie.get('__session')?.value;

  if (!sessionCookie)
    return NextResponse.json(
      { success: false, error: 'Session not found.' },
      { status: 400 },
    );
  console.log('sessionCookie -->', sessionCookie);

  cookie.delete('__session');

  return NextResponse.json({}, { status: 200 });
}
