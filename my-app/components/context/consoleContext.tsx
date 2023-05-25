'use client';

import { createContext, useContext, useState } from 'react';
type Props = {
    children: React.ReactNode
}

const ThemeContext = createContext({});

export const ThemeContextProvider = ({children}:Props) => {
    const [message, setMessage] = useState(
        [
            {
                genId: "",
                otpPin: "",
                apiClientId: "",
                expiryOn: "",
                currentStatus: "",
                message: "",

            }
            ]);

    return (
        <ThemeContext.Provider value={{message, setMessage}}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useThemeContext = () => useContext(ThemeContext);