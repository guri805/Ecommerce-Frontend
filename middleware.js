import { NextResponse } from 'next/server';

export function middleware(request) {
    const url = request.nextUrl.clone();
    const tempUser = request.cookies.get('tempUser')?.value;

    // Protect /forgotpasswordotpverify
    if (!tempUser && url.pathname === '/forgotpasswordotpverify') {
        url.pathname = '/forgotpassword';
        return NextResponse.redirect(url);
    }

    // Protect /otpverify
    if (!tempUser && url.pathname === '/otpverify') {
        url.pathname = '/login';
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

// ✅ Valid matcher config
export const config = {
    matcher: [
        '/forgotpasswordotpverify',
        '/otpverify',
    ],
};
