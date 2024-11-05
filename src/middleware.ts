/** @format */

import { type NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function middleware(request: NextRequest) {
  console.log('\n\nNEW REQUEST ------');

  const authenticationPaths = [
    '/',
    '/login',
    '/signup',
    '/signup/username-form',
    '/signup/complete-user-profile',
    '/signup/show-user-profile',
    '/signup/new-account',
  ];
  const currentPath = request.nextUrl.pathname;
  const isAuthenticationPath = authenticationPaths.includes(currentPath);

  const response = NextResponse.next();
  const cookie = await cookies();
  const session = cookie.get('__session');

  try {
    if (!isAuthenticationPath) {
      console.log('Is protected route');
      if (!session) {
        return NextResponse.redirect(new URL('/login', request.url));
      }
    }
    if (isAuthenticationPath) {
      console.log('Is authentication route');
      if (!session) {
        console.log('No session');
        return response;
      }
      console.log('Has session');
    }

    console.log('Login api call...');
    const domain = new URL(request.url);
    const responseAPI = await fetch(`${domain.origin}/api/login`, {
      method: 'GET',
      headers: {
        Session: `${session?.value}`,
      },
    });

    if (!isAuthenticationPath) {
      if (responseAPI.status !== 200) {
        console.log('redirect to login');
        return NextResponse.redirect(new URL('/login', request.url));
      }
    }

    if (isAuthenticationPath) {
      const responseData = await responseAPI.json();
      console.log(responseData);
      if (responseAPI.status === 200) {
        console.log('redirect to home');
        return NextResponse.redirect(new URL('/home', request.url));
      }
    }

    return response;
  } catch (error) {
    console.error(error);
  }
}
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
