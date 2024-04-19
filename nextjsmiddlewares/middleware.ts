import { NextRequest, NextResponse } from "next/server";

// let requestCount = 0;
// export function middleware(req: NextRequest){
//     requestCount++;
//     const res = NextResponse.next()
//     console.log("request count ",requestCount);
//     return res;
// }

//Issue- NextJS does file based routing sp This runs on ALL Routes 

//selectivily

// export const config = {
//     matcher: '/api/:path'
// }

//but this runs on only 1 page filter
 
export function middleware(request: NextRequest) {
  console.log(request.nextUrl.pathname)
  if (request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/signin', request.url))
  }
 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.next()
  }
}
