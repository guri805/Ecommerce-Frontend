'use server'
import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";

//  1st step
const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey);

// 2nd step
export const encrypt = async (payload) => {
    console.log(`before encrypt payload: ${JSON.stringify(payload)}`);
    return new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime("7d")
        .sign(encodedKey)
}

// 3rd
export const decrypt = async (session) => {
    try {
        console.log(`before decrypt session: ${session}`);
        const { payload } = await jwtVerify(session, encodedKey, {
            algorithms: ["HS256"]
        })
        console.log(`decrypted payload: ${JSON.stringify(payload)}`);
        return payload;
    } catch {
        console.log("Failed to verify session");
    }
}

export const createSession = async (userId, userRole) => {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    // encrypt the user id
    const session = await encrypt({ userId, userRole, expiresAt })
    console.log(`session to be stored in cookies: ${session}`);

    const cookieStore = await cookies();
    // store the session in cookies for optimistic auth check
    cookieStore.set("session", session, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: "lax",
        path: "/"
    })
    console.log("Session successfully stored in cookies.");
}

export const createTempUserSession = async (name, email, password, otp) => {
    const otpExpiry = Date.now() + 10 * 60 * 1000;
    const session = await encrypt({ name, email, password, otp, otpExpiry })
    console.log(`session to be stored in cookies: ${session}`);
    const cookieStore = await cookies()
    cookieStore.set("tempUser", session, {
        httpOnly: true,
        secure: true,
        expires: otpExpiry,
        sameSite: "lax",
        path: "/"
    })
    console.log("Session successfully stored in cookies.");
}

export const getTempUser = async () => {
    const session = (await cookies()).get("tempUser")?.value;

    if (!session) {
        return ("session does not exist");
    }

    try {
        const payload = await decrypt(session);
        console.log("payload from session.js ",payload);
        return payload || ("Error to decrypt session");
    } catch (error) {
        console.error("Error decrypting session:", error);
        return null;
    }
}

export async function clearTempUser() {
    const cookieStore = await cookies()
    cookieStore.delete('tempUser')
}

export async function updateSession() {
    const session = (await cookies()).get('session')?.value
    const payload = await decrypt(session)

    if (!session || !payload) {
        return null
    }

    const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)(
        await cookies()
    ).set('session', session, {
        httpOnly: true,
        secure: true,
        expires: expires,
        sameSite: 'lax',
        path: '/',
    })
}

export async function deleteSession() {
    const cookieStore = await cookies()
    cookieStore.delete('session')
}

