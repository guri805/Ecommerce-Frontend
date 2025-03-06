'use client'
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from "react";

const SignupForm = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [formField, setFormField] = useState({
        fullname: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormField({ ...formField, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Signup Data:', formField);
        // Add signup logic here (API call, authentication, etc.)
    };
    return (
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="form-group w-full">
                <TextField
                    type="text"
                    id="fullname"
                    label="Name"
                    variant="outlined"
                    name="fullname"
                    className="w-full"
                    value={formField.fullname}
                    onChange={handleChange}
                    required
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
                    value={formField.email}
                    onChange={handleChange}
                    required
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
                    value={formField.password}
                    onChange={handleChange}
                    required
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
                <Button type="submit" className="!w-full !bg-red-500 !text-white">
                    Sign Up
                </Button>
            </div>
        </form>
    )
}

export default SignupForm
