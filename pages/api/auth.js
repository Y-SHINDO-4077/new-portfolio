



import{ NextApiRequest, NextApiResponse } from 'next'

export default function handler(_, res) {
  res.setHeader('WWW-authenticate', 'Basic realm="Secure Area"')
  res.statusCode = 401
  res.end(`Auth Required.`)
}

// import  {  createApiPage  }  from  'nextjs-basic-auth-middleware' 

// export  default  createApiPage ( )



// export function next(init){
//     const headers = new Headers(init?.headers ?? {});
//     headers.set('x-middleware-next', '1');
//     return new Response(null, {
//       ...init,
//       headers,
//     });
//   }