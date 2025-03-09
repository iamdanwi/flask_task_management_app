import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const authToken = request.cookies.get("auth-token")
  const { pathname } = request.nextUrl

  // Define protected routes
  const protectedRoutes = ["/dashboard", "/tasks"]
  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route))

  // Define auth routes
  const authRoutes = ["/login", "/signup"]
  const isAuthRoute = authRoutes.some((route) => pathname === route)

  // Redirect logic
  if (isProtectedRoute && !authToken) {
    // Redirect to login if trying to access protected route without auth
    return NextResponse.redirect(new URL("/login", request.url))
  }

  if (isAuthRoute && authToken) {
    // Redirect to dashboard if trying to access auth routes while logged in
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard/:path*", "/tasks/:path*", "/login", "/signup"],
}

