import { NextResponse } from 'next/server';
import { authConfig } from './auth.config';
import NextAuth from 'next-auth';

const { auth } = NextAuth(authConfig);

import { PUBLIC_ROUTES, LOGIN, ROOT, PROTECTED_SUB_ROUTES } from './lib/routes';

export async function middleware(request) {
  const { nextUrl } = request;
  const session = await auth();
  // console.log('-----Middleware is Working!-----');
  // console.log('SESSION: ', session);
  //   return NextResponse.redirect(new URL('/', request.url));

  const isAuthenticated = !!session?.user;
  // console.log('IS AUTHENTICATED: ', isAuthenticated);
  // console.log('PATH NAME: ', nextUrl.pathname);

  const isPublicRoute =
    (PUBLIC_ROUTES.find((route) => nextUrl.pathname.startsWith(route)) ||
      nextUrl.pathname !== ROOT) &&
    !PROTECTED_SUB_ROUTES.find((route) => nextUrl.pathname.includes(route));

  // console.log('IS PUBLIC: ', isPublicRoute);

  if (!isAuthenticated && !isPublicRoute) {
    return NextResponse.redirect(new URL(LOGIN, nextUrl));
  }
}

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
