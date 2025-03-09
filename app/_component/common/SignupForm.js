'use client'
import { useEffect, useState } from "react";
import { useActionState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { signupHandler } from "@/app/action/auth";
import { useRouter } from "next/navigation";

const SignupForm = () => {
    const router = useRouter();
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [state, action, pending] = useActionState(signupHandler, undefined);
    const errors = state?.errors;

    useEffect(() => {
        if (state?.success) {
            router.push("/otpverify");
        }
    }, [state?.success, router]);

    return (
        <form className="w-full flex flex-col gap-4" action={action}>
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
                <Button
                    type="button"
                    className="!absolute !top-3 !right-2 !rounded-full !w-[35px] !h-[30px] !min-w-[35px] text-black z-50"
                    onClick={() => setIsShowPassword(!isShowPassword)}
                >
                    {isShowPassword ? (
                        <IoEyeOff className="text-[23px] text-black opacity-75" />
                    ) : (
                        <IoEye className="text-[23px] text-black opacity-75" />
                    )}
                </Button>
            </div>
            <div className="w-full">
                <Button
                    type="submit"
                    className="!w-full !bg-red-500 !text-white"
                    disabled={pending}
                >
                    {pending ? "Signing Up..." : "Sign Up"}
                </Button>
            </div>
        </form>
    );
};

export default SignupForm;
