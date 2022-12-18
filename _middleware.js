
import  { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'


export const middleware = (req) => {
  if (req.nextUrl.pathname.startsWith('/work')) {
    const authorizationHeader = req.headers.get('authorization')

    if (authorizationHeader) {
      const basicAuth = authorizationHeader.split(' ')[1]
      const [user, password] = atob(basicAuth).split(':')

      if (
        user ===  'do-portfolio' &&
        password === 'aser128kA9Zhn'
      ) {
        return NextResponse.next()
      }
    }

    const url = req.nextUrl
    url.pathname = '/api/auth'

    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}
