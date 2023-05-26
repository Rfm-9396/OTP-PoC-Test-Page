'use client';

import { createContext, useContext, useState } from 'react';
type Props = {
    children: React.ReactNode
}

type stateHistoryT = {
    stateId: number,
    stateDescription: string,
    stateDate: string
}

type messageT = {
    genId: string | null,
    otpPin: string | null,
    apiClientId: string | null,
    expiryOn: string | null,
    currentStatus: string | null,
    message: string | null,
    stateHistory: stateHistoryT[]
}

const ThemeContext = createContext<any>(null);

export const ThemeContextProvider = ({children}:Props) => {
    const [genId, setGenId] = useState<string | null>(null);
    const [messages, setMessages] = useState<messageT[]>([]);
    const [showHide, setShowHide] = useState({
        showGenerate:false,
        showValidate:false,
        showGetHistory:false,
        showGetOtp:false,
        showInvalidate:false,});
    const pushMessage = (item:messageT) => {
        if (messages.length > 10) {
            setMessages([]);
        }

        setMessages((prevData) => [...prevData, item]);
    };

    const openClose = (item:string) => {
        if (item === "showGenerate") {
            setShowHide((prevData) => ({...prevData, showGenerate: !prevData.showGenerate,
                showGetHistory: false, showGetOtp: false, showValidate: false, showInvalidate: false}));
        }
        if (item === "showValidate") {
            setShowHide((prevData) => ({...prevData, showValidate: !prevData.showValidate,
                showGetHistory: false, showGetOtp: false, showGenerate: false, showInvalidate: false}));
        }
        if (item === "showGetHistory") {
            setShowHide((prevData) => ({...prevData, showGetHistory: !prevData.showGetHistory,
                showGenerate: false, showGetOtp: false, showValidate: false, showInvalidate: false}));
        }
        if (item === "showGetOtp") {
            setShowHide((prevData) => ({...prevData, showGetOtp: !prevData.showGetOtp,
                showGenerate: false, showGetHistory: false, showValidate: false, showInvalidate: false}));
        }
        if (item === "showInvalidate") {
            setShowHide((prevData) => ({...prevData, showInvalidate: !prevData.showInvalidate,
                showGenerate: false, showGetHistory: false, showValidate: false, showGetOtp: false}));
        }
    }






    return (
        <ThemeContext.Provider value={{messages, setMessages, pushMessage, showHide, openClose, genId, setGenId}}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useThemeContext = () => useContext(ThemeContext);