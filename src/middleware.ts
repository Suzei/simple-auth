import { NextRequest, NextResponse } from "next/server";
import { isTokenExpired } from "pocketbase";

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get("pb_auth");
  const token = authCookie?.value ? JSON.parse(authCookie.value).token : null;
  const url = request.nextUrl.clone();

  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    url.pathname = "/";
    if (!token || isTokenExpired(token)) {
      return NextResponse.redirect(url);
    }
  }

  if (authCookie && request.nextUrl.pathname.endsWith("/")) {
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }
}
