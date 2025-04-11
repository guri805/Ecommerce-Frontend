"use client";

import { loginHandler } from "@/app/action/auth";
import { Button, TextField } from "@mui/material";
import Link from "next/link";
import { useActionState, useState, useEffect } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useRouter } from "next/navigation"; //  Import useRouter
import { useClientSession } from "../_context/ClientSessionDetailsContext";
import { toast } from 'react-toastify';

const LoginComponent = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [state, action, pending] = useActionState(loginHandler, undefined);
    const errors = state?.errors;
    const router = useRouter(); //  Initialize router
    const { setClientDetails } = useClientSession();

    //  Redirect after login
    useEffect(() => {
        // On successful login
        if (state?.redirect && state?.data?.user) {
            toast.success("Login successful!");
            setClientDetails(state.data.user); // Set user state
            router.push(state.redirect); // Redirect
        }
    
        // On redirect without user data (e.g., OTP verify)
        else if (state?.redirect) {
            toast.info("Please verify your email to continue.");
            router.push(state.redirect);
        }
    
        // On login error
        if (state?.error) {
            toast.error(state.error);
        }
    
    }, [state?.redirect, state?.data, state?.error, state?.errors, router, setClientDetails]);
    



    return (
        <form className="w-full flex flex-col gap-4" action={action}>
            <div className="form-group w-full">
                <TextField
                    type="email"
                    id="email"
                    label="Email Id*"
                    variant="outlined"
                    name="email"
                    className="w-full"
                    required
                />
                {errors?.email && <p className="error">{errors.email[0]}</p>}
            </div>
            <div className="form-group w-full relative">
                <TextField
                    type={isShowPassword ? "text" : "password"}
                    id="password"
                    label="Password*"
                    name="password"
                    variant="outlined"
                    className="w-full"
                    required
                />
                {errors?.password && <p className="error">{errors.password[0]}</p>}
                <button
                    type="button"
                    className="absolute top-3 right-3 rounded-full w-[35px] h-[35px] flex items-center justify-center text-black"
                    onClick={() => setIsShowPassword(!isShowPassword)}
                >
                    {isShowPassword ? (
                        <IoEyeOff className="text-[23px] text-black opacity-75" />
                    ) : (
                        <IoEye className="text-[23px] text-black opacity-75" />
                    )}
                </button>
            </div>

            <Link href="/forgotpassword" className="text-sm font-medium text-red-500 hover:underline">
                Forgot Password?
            </Link>

            <div className="w-full">
                <Button type="submit" className="w-full bg-red-500 text-white" disabled={pending}>
                    {pending ? "Logging in..." : "Login"}
                </Button>
            </div>
        </form>
    );
};

export default LoginComponent;
