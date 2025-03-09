export const storeTempUser = (userData) => {
    if (typeof window !== "undefined") {
        sessionStorage.setItem("tempUser", JSON.stringify(userData));
    }
};

export const getTempUser = () => {
    if (typeof window !== "undefined") {
        const data = sessionStorage.getItem("tempUser");
        return data ? JSON.parse(data) : null;
    }
};

export const clearTempUser = () => {
    if (typeof window !== "undefined") {
        sessionStorage.removeItem("tempUser");
    }
};