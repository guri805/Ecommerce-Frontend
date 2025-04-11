"use client";
import { useEffect, useState } from "react";
import { useActionState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import TextField from "@mui/material/TextField";
import { Button, IconButton } from "@mui/material";
import { signupHandler } from "@/app/action/auth";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';

const SignupForm = () => {
    const router = useRouter();
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [state, action, pending] = useActionState(signupHandler, undefined);
    const errors = state?.error;

    useEffect(() => {
        if (state?.success) {
            router.push("/login");
            toast.success("Signup successful! Please login to continue.");
        } else if (state?.error) {
            toast.error(state.error);
        }
    }, [state?.success, state?.error, router]);

    return (
        <form className="w-full flex flex-col gap-4" action={action}>
            {/* Name Field */}
            <div className="form-group w-full">
                <TextField
                    type="text"
                    id="name"
                    label="Name*"
                    variant="outlined"
                    name="name"
                    className="w-full"
                    required
                    error={!!errors?.name}
                    helperText={errors?.name || ""}
                />
            </div>

            {/* Mobile Field */}
            <div className="form-group w-full">
                <TextField
                    type="text"
                    id="mobile"
                    label="Mobile Number*"
                    variant="outlined"
                    name="mobile"
                    className="w-full"
                    required
                    error={!!errors?.mobile}
                    helperText={errors?.mobile || ""}
                />
            </div>

            {/* Email Field */}
            <div className="form-group w-full">
                <TextField
                    type="email"
                    id="email"
                    label="Email Id*"
                    variant="outlined"
                    name="email"
                    className="w-full"
                    required
                    error={!!errors?.email}
                    helperText={errors?.email || ""}
                />
            </div>

            {/* Password Field with Eye Icon - Fixed Button */}
            <div className="form-group w-full relative">
                <TextField
                    type={isShowPassword ? "text" : "password"}
                    id="password"
                    label="Password*"
                    variant="outlined"
                    name="password"
                    className="w-full"
                    required
                    error={!!errors?.password}
                    helperText={errors?.password || ""}
                />
                <IconButton
                    className="!absolute !top-3 !right-2 !rounded-full"
                    onClick={() => setIsShowPassword(!isShowPassword)}
                >
                    {isShowPassword ? (
                        <IoEyeOff className="text-[23px] opacity-75" />
                    ) : (
                        <IoEye className="text-[23px] opacity-75" />
                    )}
                </IconButton>
            </div>

            {/* Submit Button - Fixed MUI Styling */}
            <div className="w-full">
                <Button
                    type="submit"
                    sx={{ width: "100%", backgroundColor: "red", color: "white" }}
                    disabled={pending}
                >
                    {pending ? "Signing Up..." : "Sign Up"}
                </Button>
            </div>
        </form>
    );
};

export default SignupForm;
