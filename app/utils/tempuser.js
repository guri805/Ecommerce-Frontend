export const storeTempUser = (userData, otp, otp_expires) => {
    if (typeof window !== "undefined") {
        // localStorage.setItem("tempUser", JSON.stringify({ ...userData, otp, otp_expires }));
        sessionStorage.setItem("tempUser", "name" );

    }
};

export const getTempUser = () => {
    if (typeof window !== "undefined") {
        const tempUser = sessionStorage.getItem("tempUser");
        return tempUser ? JSON.parse(tempUser) : null;
    }
    return null;
};

export const clearTempUser = () => {
    if (typeof window !== "undefined") {
        sessionStorage.removeItem("tempUser");
    }
};
