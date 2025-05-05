'use server'
import axios from "axios"
import { ForgotPasswordEmailSchema, loginFormSchema, OtpFormSchema, ResetPasswordFormSchema, SignupFormSchema } from "../lib/defination"
import { clearTempUser, createSession, createTempUserSession, deleteSession, getTempUser } from "../lib/session";
import { redirect } from "next/navigation";


// signup handler
export const signupHandler = async (state, formData) => {
    // Validate form fields using Zod schema
    const validatedFields = SignupFormSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        mobile: formData.get("mobile"),
    });

    if (!validatedFields.success) {
        return { error: validatedFields.error.flatten().fieldErrors };
    }

    const { name, email, password, mobile } = validatedFields.data;

    try {
        const response = await axios.post("http://localhost:3001/signup", {
            name,
            mobile,
            email,
            password,
        }, {
            withCredentails: true
        });
        const serverResponse = response?.data;
        // console.log("Server Response:", serverResponse);

        if (serverResponse?.success) {
            // console.log("Signup successful");
            return serverResponse;
        } else {
            // console.log("Signup failed:", serverResponse?.message);
            return { error: serverResponse?.message };
        }
    } catch (error) {
        // console.error("Signup error:", error);
        return { error: "Unexpected error occurred during signup." };
    }
};

// login handler
export const loginHandler = async (state, formData) => {
    // Validate form input using Zod schema
    const validatedFields = loginFormSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
    });

    // Return form validation errors (Zod)
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    try {
        const { email, password } = validatedFields.data;
        const response = await axios.post("http://localhost:3001/login", { email, password });

        const serverResponse = response?.data;
        // console.log("Server Response:", serverResponse);

        const user = serverResponse?.user;
        // console.log("check data", user?.verify_email, user?.email)
        if (user?.verify_email === false) {
            // console.log("Email not verified. Redirecting to OTP verification:", user?.email);
            await createTempUserSession(user?.email);
            return { redirect: "/otpverify" };
        }

        if (user?.verify_email) {
            await createSession(user?.id, user?.email, user?.name, user?.role);
            return { redirect: "/", data: serverResponse };
        }

        // console.log("Login failed:", serverResponse?.message);
        return { error: serverResponse?.message || "Login failed. Please try again." };

    } catch (error) {
        // console.error("Login Error:", error);
        return {
            error: error.response?.data?.message || "Unexpected error occurred during login.",
        };
    }
};

// verifyotp handler
export const verifyOtpHandler = async (state, formData) => {
    // Validate form input using Zod schema
    const validatedFields = OtpFormSchema.safeParse({
        otp: formData.get("otp")
    });

    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors,
        };
    }

    try {
        const { otp } = validatedFields.data;
        // console.log("Verifying OTP:", otp);

        // Retrieve temporary user session (which contains the email)
        const tempUser = await getTempUser();

        if (!tempUser || !tempUser?.email) {
            return { error: "Session expired. Please try logging in again." };
        }

        // console.log("Temp User Data:", tempUser);

        // Send both OTP and email to backend
        const response = await axios.post("http://localhost:3001/verifyotp", {
            otp,
            email: tempUser?.email,
        });

        // console.log("verification otp", response?.data?.user);


        if (response?.data?.success) {
            // If OTP is correct, create a permanent session
            await createSession(response?.data?.user?.id, response?.data?.user?.email, response?.data?.user?.name, response?.data?.user?.role);
            await clearTempUser();
            return { success: true, message: "Email verified successfully!", data: response?.data, redirect: "/" };
        } else {
            return { error: response?.data?.message };
        }
    } catch (error) {
        // console.error("OTP Verification Error:", error);

        if (error.response?.status === 409) {
            return { error: "User already registered. Please log in." };
        }

        return { error: "OTP verification failed. Please try again." };
    }
};

// logout session 
export async function logout() {
    deleteSession();
    redirect('/');
}

// email handler while forgot password
export const emailHandler = async (state, formData) => {
    // Validate form input using Zod schema
    const validatedFields = ForgotPasswordEmailSchema.safeParse({
        email: formData.get("email"),
    });

    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors,
        };
    }
    try {
        const { email } = validatedFields.data;
        const response = await axios.post(`http://localhost:3001/forgotpasswordotp`, { email });
        const serverResponse = response?.data
        // console.log("Login Response:", serverResponse);

        if (serverResponse?.success) {
            await createTempUserSession(serverResponse?.email);
            return { data: serverResponse, redirect: "/forgotpasswordotpverify", };
        } else {
            return { error: serverResponse?.message };
        }

    } catch (error) {
        // console.error("OTP Verification Error:", error);
        return { error: "OTP verification failed. Please try again." };
    }
}

// otp verification for reset password
export const resetPasswordOtpHandler = async (state, formData) => {
    // Step 1: Validate form input using Zod
    const validatedFields = ResetPasswordFormSchema.safeParse({
        otp: formData.get("otp"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword"),
    });

    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors,
        };
    }

    try {
        const { otp, password, confirmPassword } = validatedFields.data;

        if (password !== confirmPassword) {
            return { error: "Passwords do not match." };
        }
        // console.log("Resetting Password with OTP:", otp, password);
        // Step 2: Get the temp user from session (email)
        const tempUser = await getTempUser();

        if (!tempUser || !tempUser?.email) {
            return { error: "Session expired. Please try logging in again." };
        }

        // Step 3: Submit OTP + new password to backend
        const response = await axios.post("http://localhost:3001/verifyotpandsetpassword", {
            email: tempUser.email,
            otp,
            password,
        });

        let serverResponse = response?.data;
        if (serverResponse?.success) {
            clearTempUser();
            return { data: serverResponse, redirect: "/login" };
        }else {
            return { error: serverResponse?.message };
        }

    } catch (error) {
        console.error("Reset Password Error:", error);
    }
};
