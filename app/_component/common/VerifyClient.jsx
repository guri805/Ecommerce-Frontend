'use client'
import { verifyOtpHandler } from "@/app/action/auth";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useClientSession } from "../_context/ClientSessionDetailsContext";
import { toast } from 'react-toastify';

const VerifyOtp = () => {
    const router = useRouter();
    const [state, action, pending] = useActionState(verifyOtpHandler, undefined);
    const errors = state?.error;
    const { setClientDetails } = useClientSession();

    useEffect(() => {
        // On successful login
        if (state?.redirect && state?.data) {
            router.push(state.redirect);
            setClientDetails(state.data.user);
            // console.log("User Data:", state.data.user);
            toast.success("otp verified successfully");
        }

        // On otp verify error
        if (state?.error) {
            toast.error(state.error);
        }

        // On field-level errors (from Zod)
        if (state?.errors) {
            toast.error("Please correct the highlighted fields.");
        }
    }, [state?.redirect, state?.data, router, state?.error, state?.errors]);

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
            {errors?.otp && <p className="text-red-500">{errors.otp[0]}</p>}
            <div className="w-full">
                <button type="submit" className="w-full bg-blue-500 text-white p-2">
                    Verify OTP
                </button>
            </div>
        </form>
    );
};

export default VerifyOtp;
