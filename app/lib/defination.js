import { z } from 'zod';

// validate signup form data
export const SignupFormSchema = z.object({
    name: z
        .string()
        .min(2, "Name must be at least 2 characters long")
        .max(50, "Name must be at most 50 characters long")
        .nonempty("Name is required"),
    email: z
        .string()
        .email("Invalid email address")
        .nonempty("Email is required"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters long")
        .nonempty("Password is required"),
    mobile: z
        .string()
        .regex(/^[6-9]\d{9}$/, "Invalid mobile number")
        .nonempty("Password is required"),
});

// validate login form data
export const loginFormSchema = z.object({
    email: z
        .string()
        .email("Invalid email address")
        .nonempty("Email is required"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters long")
        .nonempty("Password is required"),
});

// validate otp form data
export const OtpFormSchema = z.object({
    otp: z
        .string()
        .min(6, "OTP must be exactly 6 digits.")
        .max(6, "OTP must be exactly 6 digits.")
        .regex(/^\d{6}$/, "OTP must be a 6-digit number. Not contain letter or special character"),
});

export const ForgotPasswordEmailSchema = z.object({
    email: z
        .string()
        .email("Invalid email address")
        .nonempty("Email is required"),
})

// validate reset password form data
export const ResetPasswordFormSchema = z.object({
    otp: z
        .string()
        .regex(/^\d{6}$/, "OTP must be a 6-digit number"),

    password: z
        .string()
        .min(8, "Password must be at least 8 characters long"),

    confirmPassword: z
        .string()
        .min(8, "Confirm Password must be at least 8 characters long"),
}).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
});

export const addCategorySchema = z.object({
    categoryName: z
        .string()
        .min(2, "Category must be at least 2 characters long")
        .max(50, "Category must be at most 50 characters long")
        .nonempty("Category is required"),
});
