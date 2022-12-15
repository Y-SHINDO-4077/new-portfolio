

import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: ['/work'],
}

export function middleware(req) {
  const basicAuth = req.headers.get('authorization')
  const url = req.nextUrl

  if (basicAuth) {
    const auth = basicAuth.split(' ')[1]
    const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':')

    if (user === 'do-portfolio' && pwd === 'aser128kA9Zhn') {
      return NextResponse.next()
    }
  }
  url.pathname = '/api/auth'

  return NextResponse.rewrite(url)
}
