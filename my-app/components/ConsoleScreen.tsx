'use client'
import React from 'react';
import {useThemeContext} from "@/components/context/consoleContext";
import Responses from "@/components/Responses";

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

const ConsoleScreen = () => {
    const {messages} = useThemeContext();

    return (
        <div className="bg-red-400 mt-4 rounded-md p-3 flex flex-col h-fit  justify-center min-h-[100px] text-sm ">
            <div className="overflow-y-scroll ">
                {/*{messages.map((item:any) => {
                    item = JSON.parse(JSON.stringify(item))
                    return <div key={item.message} className=" flex flex-row">
                        {(item.message != null) ? <span className="mx-2 text-gray-500 flex flex-row">message : <p className="text-blue-300">{item.message}</p></span> : null}
                        {(item.genId != null) ? <span className="mx-2 text-gray-500 flex flex-row">genId : <p className="text-blue-300">{item.genId}</p></span> : null}
                        {(item.otpPin != null) ? <span className="mx-2 text-gray-500 flex flex-row">otpPin : <p className="text-blue-700">{item.otpPin}</p></span> : null}
                        {(item.apiClientId != null) ? <span className="mx-2 text-gray-500 flex flex-row">apiClientId : <p className="text-blue-300">{item.apiClientId}</p></span> : null}
                    </div>
                })
                }*/}
            </div>
            {messages.length === 0 ? <div className="text-gray-500 text-center">No messages yet</div> : null}
            {messages.map((item:messageT) => {
                return <div>
                    <Responses {...item}/>
                </div>

            })}


        </div>
    );
};

export default ConsoleScreen;
