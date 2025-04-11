'use server'
import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";

// Setup keys
const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey);

// Encypt session data
export const encrypt = async (payload) => {
    // console.log(`before encrypt payload: ${JSON.stringify(payload)}`);
    return new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime("7d")
        .sign(encodedKey)
}

// Decrypt session data
export const decrypt = async (session) => {
    try {
        // console.log(`before decrypt session: ${session}`);
        const { payload } = await jwtVerify(session, encodedKey, {
            algorithms: ["HS256"]
        })
        // console.log(`decrypted payload: ${JSON.stringify(payload)}`);
        return payload;
    } catch {
        // console.log("Failed to verify session");
    }
}

// Create a temporary session for unverified users (OTP verification)
export const createTempUserSession = async (email) => {
    // console.log("Creating temporary session for email:", email);
    const otpExpiry = Date.now() + 10 * 60 * 1000; // OTP expires in 10 minutes
    const cookieStore = cookies();
    
    // Check if the tempUser cookie exists
    const existingSession =await cookieStore.get("tempUser")?.value;

    let sessionData = { email, otpExpiry };

    if (existingSession) {
        try {
            const existingPayload = await decrypt(existingSession);
            // console.log("Existing Temp User Session:", existingPayload);

            // Update the email and expiry time
            sessionData = { ...existingPayload, email, otpExpiry };
        } catch (error) {
            // console.log("Error decrypting tempUser session:", error);
        }
    }

    // Encrypt and update the cookie
    const session = await encrypt(sessionData);
    cookieStore.set("tempUser", session, {
        httpOnly: true,
        secure: true,
        expires: new Date(otpExpiry),
        sameSite: "lax",
        path: "/",
    });

    // console.log("Temporary session stored/updated in cookies.");
};

// Retrieve temporary user session (used for OTP verification)
export const getTempUser = async () => {
    try {
        const cookieStore = await cookies(); 
        const session = cookieStore.get("tempUser")?.value;

        if (!session) {
            return null;
        }

        // console.log("Retrieved temp session:", session);

        const payload = await decrypt(session); //  Await decrypt function
        return payload || null;
    } catch (error) {
        // console.log("Error decrypting session:", error);
        return null;
    }
};

// Clear tempUser cookie
export async function clearTempUser() {
    const cookieStore = await cookies()
    cookieStore.delete('tempUser')
}

// Create a permanent user session (stored in cookies)
export const createSession = async (id, email, name, role) => {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days expiry
    const session = await encrypt({id, email, name, role });

    // console.log("Storing session in cookies:", session);

    const cookieStore = await cookies();
    cookieStore.set("session", session, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: "lax",
        path: "/",
    });

    // console.log("Session stored successfully.");
};

// Get the session 
export const getSession = async () => {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get("session")?.value;

    if (!sessionCookie) {
        return null;
    }

    try {
        const sessionData = await decrypt(sessionCookie);
        // console.log("Retrieved Session Data:", sessionData);
        return sessionData;
    } catch (error) {
        // console.error("Error decrypting session:", error);
        return null;
    }
};

// Update a existing session 
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

// Delete the session
export async function deleteSession() {
    const cookieStore = await cookies()
    cookieStore.delete('session')
}





