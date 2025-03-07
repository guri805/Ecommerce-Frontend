"use client";
import { useState } from "react";
import OTPInput from "./OTPInput";
import { Button } from "@mui/material";

const VerifyClient = () => {
    const [otp, setOtp] = useState("");

    const handleOtpChange = (value) => {
        setOtp(value);
    };

    const verifyOtp = async (e) => {
        e.preventDefault();
        alert(otp); // Replace this with API call for OTP verification
    };

    return (
        <section className="loginSection py-10">
            <div className="container">
                <div className="card shadow-md w-[500px] m-auto rounded-md bg-white p-5 px-10 flex flex-col gap-4 items-center">
                    <h3 className="text-lg font-semibold">Enter Verification Code</h3>
                    <p className="text-sm text-gray-600">
                        We've sent a code to <span className="text-primary">guri@gmail.com</span>. Please enter it below.
                    </p>
                    <form onSubmit={verifyOtp} className="flex flex-col gap-4 items-center w-full">
                        <OTPInput length={4} onChange={handleOtpChange} />
                        <Button type="submit" className="!bg-primary !text-white w-full !rounded-lg">
                            Verify OTP
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default VerifyClient;
