import { NextRequest, NextResponse } from 'next/server'
import { getTakForHost, TAK_ROUTES } from '@/lib/domains'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') ?? ''
  const tak = getTakForHost(host)

  if (!tak) {
    return NextResponse.next()
  }

  const basePath = TAK_ROUTES[tak]
  const { pathname } = request.nextUrl

  // Hoofddomein: geen rewrite nodig
  if (basePath === '/') {
    return NextResponse.next()
  }

  // Subdomein/tak-domein: root en paden naar basispad mappen
  if (pathname === '/' || pathname === '') {
    return NextResponse.rewrite(new URL(basePath, request.url))
  }

  if (!pathname.startsWith(basePath)) {
    const suffix = pathname.startsWith('/') ? pathname : `/${pathname}`
    return NextResponse.rewrite(new URL(`${basePath}${suffix}`, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
}
