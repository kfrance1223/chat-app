import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get("token");

    const { pathname } = req.nextUrl;

    if (pathname.startsWith("/chat") && !token) {
        return NextResponse.redirect("/auth/signin");
    }

    if (pathname.startsWith("/auth") && token) {
        return NextResponse.redirect("/chat");
    }
}