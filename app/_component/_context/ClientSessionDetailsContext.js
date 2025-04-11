"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { getSession } from "@/app/lib/session"; // Fetch session from cookies

const ClientSessionContext = createContext(null);

export const ClientSessionProvider = ({ children }) => {
    const [clientDetails, setClientDetails] = useState(null);

    useEffect(() => {
        // Fetch session only when page refreshes or loads
        const fetchSession = async () => {
            try {
                const sessionData = await getSession();
                if (sessionData) {
                    setClientDetails(sessionData);
                }
            } catch (error) {
                console.error("Error fetching session:", error);
            }
        };

        if (!clientDetails) {
            fetchSession();
        }
    }, []);

    return (
        <ClientSessionContext.Provider value={{ clientDetails, setClientDetails }}>
            {children}
        </ClientSessionContext.Provider>
    );
};

// Custom hook to use session in components
export const useClientSession = () => useContext(ClientSessionContext);
