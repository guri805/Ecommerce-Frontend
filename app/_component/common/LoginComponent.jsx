'use client';

import { Button, TextField } from '@mui/material';
import Link from 'next/link';
import { useActionState, useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';

const LoginComponent = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [state, action, pending] = useActionState(loginhandler, undefined)
    const errors = state?.errors;

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
                    type={isShowPassword ? 'text' : 'password'}
                    id="password"
                    label="Password*"
                    name="password"
                    variant="outlined"
                    className="w-full"
                    required
                />
                {errors?.password && <p className="error">{errors.password[0]}</p>}
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

            <Link href="/otpverify" className="link cursor-pointer text-sm font-medium">
                Forgot Password?
            </Link>

            <div className="w-full">
                <Button type="submit" className="!w-full !bg-red-500 !text-white">
                    Login
                </Button>
            </div>
        </form>
    );
};

export default LoginComponent;
