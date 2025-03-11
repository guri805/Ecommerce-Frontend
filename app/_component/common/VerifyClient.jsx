'use client'
import { verifyOtpHandler } from "@/app/action/auth";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";

const VerifyOtp = () => {
    const router = useRouter();
    const [state, action, pending] = useActionState(verifyOtpHandler, undefined);
    const errors = state?.errors;

    useEffect(() => {
        if (state?.success) {
            router.push("/login");
        }
    }, [state?.success, router]);

    return (
        <form className="w-full flex flex-col gap-4" action={action}>
            <div className="form-group w-full">
                <input
                    type="text"
                    id="otp"
                    name="otp"
                    placeholder="Enter OTP"
                    required
                    className="border p-2 w-full"
                />
            </div>
            {errors && <p className="text-red-500">{errors}</p>}
            <div className="w-full">
                <button type="submit" className="w-full bg-blue-500 text-white p-2">
                    Verify OTP
                </button>
            </div>
        </form>
    );
};

export default VerifyOtp;
