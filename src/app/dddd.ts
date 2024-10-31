import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const isAuthenticationPath = (request: NextRequest) =>
    ['/iniciar-sesion', '/registrarse', '/recuperar-cuenta'].includes(
        request.nextUrl.pathname
    );

export async function middleware(request: NextRequest, context: any) {
    try {
        const response = NextResponse.next();
        const session = request.cookies.get('__session');
        if (!isAuthenticationPath(request)) {
            if (!session) {
                return NextResponse.redirect(
                    new URL('/iniciar-sesion', request.url)
                );
            }
        }

        if (isAuthenticationPath(request)) {
            if (!session) {
                return response;
            }
        }

        const domain = new URL(request.url);
        const responseAPI = await fetch(`${domain.origin}/api/login`, {
            headers: {
                Cookie: `__session=${session?.value}`,
            },
        });

        if (!isAuthenticationPath(request)) {
            if (responseAPI.status !== 200) {
                return NextResponse.redirect(
                    new URL('/iniciar-sesion', request.url)
                );
            }
        }

        if (isAuthenticationPath(request)) {
            if (responseAPI.status === 200) {
                return NextResponse.redirect(new URL('/', request.url));
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
