'use server'
import axios from "axios"
import { loginFormSchema, SignupFormSchema } from "../lib/defination"
import { clearTempUser, createSession, createTempUserSession, deleteSession, getTempUser } from "../lib/session";
import { redirect } from "next/navigation";


export const signupHandler = async (state, formData) => {
    const validatedFields = SignupFormSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
    });

    if (!validatedFields.success) {
        return { errors: validatedFields.error.flatten().fieldErrors };
    }

    const { name, email, password } = validatedFields.data;

    try {
        const response = await axios.post("http://localhost:3001/signup", {
            name,
            email,
            password
        });

        console.log("Signup Response:", response.data);
        if (response?.data?.success) {
            const email = response?.data?.email;
            const name = response?.data?.name;
            const password = response?.data?.password
            const otp = response?.data?.otp
            await createTempUserSession(email, name, password, otp);
            return response.data;
        } else {
            return { errors: 'An error occurred while logging in' };
        }

    } catch (error) {
        console.error("Signup error:", error);
        return { errors: "Unexpected error occurred during signup." };
    }
};

export const verifyOtpHandler = async (state, formData) => {
    const otp = formData.get("otp");

    try {
        const tempUser = await getTempUser(); // Await the async function
        console.log("signup verifyOtpHandler", tempUser);

        if (!tempUser) {
            return { errors: "Session expired. Please sign up again." };
        }

        // Ensure `otpExpiry` is valid and has not expired
        if (tempUser?.otpExpiry < Date.now()) {
            clearTempUser();
            return { errors: "OTP expired. Please request a new one." };
        }

        // Check if the provided OTP matches the one stored in session
        if (tempUser?.otp !== otp) {
            return { errors: "Invalid OTP. Please try again." };
        }

        // If OTP is correct, send user data to the backend for saving
        const response = await axios.post("http://localhost:3001/saveuser", {
            name: tempUser.name,
            email: tempUser.email,
            password: tempUser.password, // Fixed syntax
        });

        if (response?.data?.success) {
            clearTempUser();
            return { success: true, message: "Email verified successfully!" };
        } else {
            return { errors: response.data.message };
        }
    } catch (error) {
        console.error("OTP verification error:", error);

        // Handle specific errors (e.g., user already exists)
        if (error.response?.status === 409) {
            return { errors: "User already registered. Please log in." };
        }

        return { errors: "OTP verification failed." };
    }
};


export const loginhandler = async (state, formData) => {
    const validatedFields = loginFormSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
    });

    try {
        if (!validatedFields?.success) {
            // Return validation errors
            return {
                errors: validatedFields?.error?.flatten()?.fieldErrors,
            };
        }
        const { email, password } = validatedFields?.data;
        console.log(validatedFields.data);
        const response = await axios.post(`http://localhost:3001/login`, { email, password });

        if (response?.data?.success) {
            const userEmail = response?.data?.user?.email;
            const userRole = response?.data?.user?.role;
            await createSession(userEmail, userRole);
            return response.data;
        } else {
            return { errors: 'An error occurred while logging in' };
        }
    } catch (error) {
        console.error('Login error:', error);
        return { errors: 'Unexpected error occurred during login' };
    }
}
export async function logout() {
    deleteSession();
    redirect('/');
}
