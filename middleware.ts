import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({ req, res });
    
    const { data: { session } } = await supabase.auth.getSession(); 
    
    if (session === null) return NextResponse.redirect(new URL("/auth", req.nextUrl));
    
    return res;
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/account/:path*',
}