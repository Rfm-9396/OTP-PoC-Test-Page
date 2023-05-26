import React from 'react';
import {BiCopy} from "react-icons/all";
import {useThemeContext} from "@/components/context/consoleContext";

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


const Responses: React.FunctionComponent<messageT> = (response) => {
    const {setGenId} = useThemeContext();
    return (

        <div className="bg-red-300 rounded-xl p-2 m-2">
            <div className="flex flex row  items-center">
                {(response.message != null) ? <span className="mx-2 text-gray-700 flex flex-row">message : <p className="text-sky-600">{response.message}</p></span> : <p className="text-white">OTP's</p>}
                {(response.genId != null) ? <span className="mx-2 text-gray-700 flex flex-row">genId : <p className="text-sky-600">{response.genId}</p>
                        <BiCopy className="ml-1" onClick={() => setGenId(response.genId)} /></span>
                    : null}
                {(response.otpPin != null) ? <span className="mx-2 text-gray-700 flex flex-row">otpPin : <p className="text-blue-700">{response.otpPin}</p></span> : null}
            </div>
            <div className="flex-row flex w-1/2 items-center">

                {(response.apiClientId != null) ? <span className="mx-2 text-gray-700 flex flex-row">apiClientId : <p className="text-sky-600">{response.apiClientId}</p></span> : null}
            </div>

            {(response.expiryOn != null) ? <span className="mx-2 text-gray-700 flex flex-row">expiryOn : <p className="text-sky-600">{response.expiryOn}</p></span> : null}
            {(response.currentStatus != null) ? <span className="mx-2 text-gray-700 flex flex-row">currentStatus : <p className="text-sky-600">{response.currentStatus}</p></span> : null}
            {(response.stateHistory != null) ? <span className="mx-2 text-gray-700 flex flex-row">stateHistory : <p className="text-sky-600">{response.stateHistory.map(
                (item:stateHistoryT) => {
                    return <div>
                        <span className="mx-2 text-gray-500 flex flex-row">stateId : <p className="text-sky-600">{item.stateId}</p></span>
                        <span className="mx-2 text-gray-500 flex flex-row">stateDescription : <p className="text-sky-600">{item.stateDescription}</p></span>
                        <span className="mx-2 text-gray-500 flex flex-row">stateDate : <p className="text-sky-600">{item.stateDate}</p></span>
                    </div>

                }
            )}
            </p></span> : null}
        </div>
    );
};

export default Responses;
