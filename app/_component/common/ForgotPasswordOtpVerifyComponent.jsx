"use client";
import { resetPasswordOtpHandler } from "@/app/action/auth";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { TextField } from "@mui/material";
import { toast } from 'react-toastify';

const ResetPasswordComponent = () => {
    const router = useRouter();
    const [state, action, pending] = useActionState(resetPasswordOtpHandler, undefined);
    const errors = state?.error;

    useEffect(() => {
        if (state?.redirect && state?.data) {
            router.push(state.redirect);
            // console.log("Password Reset Response:", state.data);
            toast.success(state?.data?.message)
        }
        if (state?.error) {
            toast.error(state.error);
        }

    }, [state?.redirect, state?.data, router,state?.error]);

    return (
        <form className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-md flex flex-col gap-4" action={action}>
            <h2 className="text-xl font-semibold text-center mb-2">Reset Your Password</h2>

            <div className="form-group">
                <TextField
                    type="text"
                    id="otp"
                    label="Enter Otp*"
                    variant="outlined"
                    name="otp"
                    className="w-full"
                    required
                />
                {errors?.otp && <p className="text-red-500">{errors.otp[0]}</p>}
            </div>

            <div className="form-group">
                <TextField
                    type="password"
                    id="password"
                    label="New Password*"
                    variant="outlined"
                    name="password"
                    className="w-full"
                    required
                />
                {errors?.password && <p className="text-red-500">{errors.password[0]}</p>}
            </div>

            <div className="form-group">
                <TextField
                    type="password"
                    id="confirmPassword"
                    label="Confirm Password*"
                    variant="outlined"
                    name="confirmPassword"
                    className="w-full"
                    required
                />
                {errors?.confirmPassword && <p className="text-red-500">{errors.confirmPassword[0]}</p>}
            </div>

            <button
                type="submit"
                disabled={pending}
                className={`w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition ${pending ? "opacity-50 cursor-not-allowed" : ""
                    }`}
            >
                {pending ? "Verifying..." : "Reset Password"}
            </button>
        </form>
    );
};

export default ResetPasswordComponent;
