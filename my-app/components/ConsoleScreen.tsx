'use client'
import React, {useEffect, useState} from 'react';
import {useThemeContext} from "@/components/context/consoleContext";

const ConsoleScreen = () => {
    const {message, setMessage} = useThemeContext();
    const test = false


    useEffect(() => {
        console.log(message,"test console")


    }, [message]);
    return (
        <div className="w-[70%] bg-red-400 mt-4 rounded-md p-3 flex flex-col h-auto  justify-center">

            {message.map((item:object) => {
                item = JSON.parse(JSON.stringify(item))
                return <div key={item.genId} className=" flex flex-row">{test ? <span className="mx-2 text-gray-500 flex flex-row">expiryOn : <p className="text-blue-300">{item.expiryOn}</p></span> : null}
                    <span className="mx-2 text-gray-500 flex flex-row">message : <p className="text-blue-300">{item.message}</p></span>
                    {(item.genId != null) ? <span className="mx-2 text-gray-500 flex flex-row">genId : <p
                        className="text-blue-300">{item.genId}</p></span> : null}
                    {(item.otpPin != null) ? <span className="mx-2 text-gray-500 flex flex-row">otpPin : <p className="text-blue-700">{item.otpPin}</p></span> : null}
                    {(item.apiClientId != null) ? <span className="mx-2 text-gray-500 flex flex-row">apiClientId : <p className="text-blue-300">{item.apiClientId}</p></span> : null}
                </div>
            })
            }

        </div>
    );
};

export default ConsoleScreen;
