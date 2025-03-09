'use server'
import axios from "axios"
import { loginFormSchema, SignupFormSchema } from "../lib/defination"
import { createSession, deleteSession } from "../lib/session";
import { redirect } from "next/navigation";
import { storeTempUser } from "../utils/tempuser";
import { getTempUser, clearTempUser } from "../utils/tempuser";


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
        const response = await axios.post("http://localhost:3001/signup",
            { name, email, password }
        );

        console.log("Signup Response:", response.data);

        if (response?.data?.success) {
            // Store temp user in sessionStorage
            storeTempUser({ name, email, password });
            return { success: true };

        } else {
            return { errors: "Signup failed. Try again." };
        }
    } catch (error) {
        console.error("Signup error:", error);
        return { errors: "Unexpected error occurred during signup." };
    }
};

export const verifyOtpHandler = async (otp) => {
    try {
        const tempUser = getTempUser();
        if (!tempUser) {
            return { errors: "Session expired. Please sign up again." };
        }

        const response = await axios.post("http://localhost:3001/verifyotp", {
            email: tempUser.email,
            otp
        });

        if (response?.data?.success) {
            // Save user to database after OTP verification
            await axios.post("http://localhost:3001/saveuser", tempUser);

            // Clear temp user data from session storage
            clearTempUser();

            return { success: true, message: "Email verified successfully!" };
        } else {
            return { errors: response.data.message };
        }
    } catch (error) {
        console.error("OTP verification error:", error);
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
