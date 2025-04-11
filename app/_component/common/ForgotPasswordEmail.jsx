"use client";

import { emailHandler } from "@/app/action/auth";
import { Button, TextField, CircularProgress } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { toast } from 'react-toastify';


const ForgotPasswordEmail = () => {
    const [state, action, pending] = useActionState(emailHandler, undefined);
    const errors = state?.error;
    const router = useRouter();

    useEffect(() => {
        if (state?.redirect && state?.data) {
            router.push(state.redirect);
            // console.log("User Data:", state.data);
            toast.success(state?.data?.message)
        }
        if (state?.error) {
            toast.error(state.error);
        }

    }, [state?.redirect, state?.data, router,state?.error]);

    return (
        <div className="flex items-center justify-center py-10">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
                    Forgot Password
                </h2>
                <p className="text-gray-500 text-center mb-6">
                    Enter your email, and we'll send you an OTP to reset your password.
                </p>

                <form action={action} className="space-y-4">
                    <TextField
                        type="email"
                        id="email"
                        label="Email Address *"
                        variant="outlined"
                        name="email"
                        className="w-full"
                        required
                    />
                    {errors?.email && <p className="text-red-500">{errors.email[0]}</p>}

                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        disabled={pending}
                        className="mt-4 bg-red-500"
                    >
                        {pending ? <CircularProgress size={24} color="inherit" /> : "Send OTP"}
                    </Button>
                </form>

                <p className="text-sm text-gray-500 text-center mt-4">
                    Remembered your password?{" "}
                    <Link href="/login" className="text-red-500 hover:underline">
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default ForgotPasswordEmail;
