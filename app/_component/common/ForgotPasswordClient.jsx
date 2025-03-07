"use client";
import { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useRouter } from "next/navigation";

const ForgotPasswordClient = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowPasswordTwo, setIsShowPasswordTwo] = useState(false);

    // const router = useRouter();

    return (
        <section className="loginSection py-10">
            <div className="container">
                <div className="card shadow-md w-[500px] m-auto rounded-md bg-white p-5 px-10 flex flex-col gap-4">
                    <h3 className="text-center text-lg text-black font-semibold">New Password</h3>
                    <form className="w-full flex flex-col gap-4">
                        {/* New Password Field */}
                        <div className="form-group w-full relative">
                            <TextField
                                type={!isShowPassword ? "password" : "text"}
                                id="password"
                                label="New Password"
                                variant="outlined"
                                name="password"
                                className="w-full"
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

                        {/* Confirm Password Field */}
                        <div className="form-group w-full relative">
                            <TextField
                                type={!isShowPasswordTwo ? "password" : "text"}
                                id="confirmPassword"
                                label="Confirm Password"
                                name="confirmPassword"
                                variant="outlined"
                                className="w-full"
                            />
                            <Button
                                type="button"
                                className="!absolute !top-3 !right-2 !rounded-full !w-[35px] !h-[30px] !min-w-[35px] text-black z-50"
                                onClick={() => setIsShowPasswordTwo(!isShowPasswordTwo)}
                            >
                                {isShowPasswordTwo ? (
                                    <IoEyeOff className="text-[23px] text-black opacity-75" />
                                ) : (
                                    <IoEye className="text-[23px] text-black opacity-75" />
                                )}
                            </Button>
                        </div>

                        {/* Confirm Password Button */}
                        <div className="w-full">
                            <Button className="!w-full !bg-red-500 !text-white">Confirm Password</Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ForgotPasswordClient;
