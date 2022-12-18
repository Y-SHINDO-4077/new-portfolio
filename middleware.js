// import { Buffer } from 'buffer';
// //window.Buffer = Buffer;
// import { NextRequest, NextResponse } from 'next/server'

// export const config = {
//   matcher: ['/work'],
// }

// export function middleware(req) {
//   const basicAuth = req.headers.get('authorization')
//   const url = req.nextUrl
  
//     if (basicAuth) {
//       const auth = basicAuth.split(' ')[1]
//       const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':')

//       if (user === 'do-portfolio' && pwd === 'aser128kA9Zhn') {
//         return NextResponse.next()
//       }
//     }
  
//   url.pathname = '/api/auth'

//   return NextResponse.rewrite(url)
// }


import { next } from "@vercel/edge";
import { NextRequest, NextResponse } from 'next/server'
export const config = {
  matcher: "/work",
};

export default function middleware(request) {
  const authorizationHeader = request.headers.get("authorization");
  const url = request.nextUrl

  if (authorizationHeader) {
    const basicAuth = authorizationHeader.split(" ")[1];
    const [user, pwd] = Buffer.from(basicAuth, 'base64').toString().split(':')
    //const [user, password] = atob(basicAuth).toString().split(":");

    if (user === 'do-portfolio' && pwd=== 'aser128kA9Zhn') {
      // return next();
      return NextResponse.next()
    }
  }
  url.pathname = '/api/auth'
  return NextResponse.rewrite(url)
  //return next();

}

