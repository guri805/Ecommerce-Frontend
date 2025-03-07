'use client'

import React, { useState } from 'react';

const OTPInput = ({ length, onChange }) => {
    const [otp, setOtp] = useState(new Array(length).fill(''));

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (isNaN(value)) return;

        let newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);

        if (onChange) {
            onChange(newOtp.join(''));
        }

        if (value && index < length - 1) {
            document.getElementById(`otp-input-${index + 1}`).focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            document.getElementById(`otp-input-${index - 1}`).focus();
        }
    };

    return (
        <div className="flex gap-2">
            {
                otp.map((value, index) => (
                    <input
                        key={index}
                        id={`otp-input-${index}`}
                        type="text"
                        maxLength="1"
                        value={value}
                        onChange={(e) => handleChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        className="w-10 h-10 text-center border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                ))
            }
        </div >
    );
};

export default OTPInput;
