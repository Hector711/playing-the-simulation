/** @format */

import { type NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function middleware(request: NextRequest) {
  console.log('\n\n');
  // console.log('request', request);

  // 1. Check if route is protected
  const authenticationPaths = ['/', '/login', '/signup'];
  const currentPath = request.nextUrl.pathname;
  const isAuthenticationPath = authenticationPaths.includes(currentPath);

  const response = NextResponse.next();
  const cookie = await cookies();
  const session = cookie.get('__session');

  try {
    if (!isAuthenticationPath) {
      console.log('is protected route');
      if (!session) {
        return NextResponse.redirect(new URL('/login', request.url));
      }
    }
    if (isAuthenticationPath) {
      console.log('is authentication route');
      if (!session) {
        console.log('no session');
        console.log('response', response);
        return response;
      }
      console.log('has session');
    }

    const domain = new URL(request.url);
    const responseAPI = await fetch(`${domain.origin}/api/login`, {
      headers: {
        Cookie: `__session=${session?.value}`,
      },
    });
    console.log('sending to api...');

    if (!isAuthenticationPath) {
      if (responseAPI.status !== 200) {
        console.log('redirect to login');
        return NextResponse.redirect(new URL('/login', request.url));
      }
    }

    if (isAuthenticationPath) {
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
