'use client';
import React from 'react'
import { useState } from 'react'
import {useThemeContext} from "@/components/context/consoleContext";
import RecyclableButton from "@/components/RecyclableButton";
import {IoMdCloseCircleOutline} from "react-icons/all";

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

function GetHistory() {
    const [apiClientID, setApiClientID] = useState("teste-otp"); // this is the API Client ID
    const [genId, setGenId] = useState("teste-otp"); // this is the API Client ID

    const {setMessages, showHide, openClose} = useThemeContext();

    const tabWindow = 'showGetHistory'
    const btnMessage = 'Get History'
    const handleClick = () => {
        setMessages([{}])

        fetch(`http://localhost:8000/api/otp/history/${genId}/${apiClientID}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((res) => res.json())
            .then((data) => {
                const messageResponse:messageT = {
                    genId: null,
                    otpPin: null,
                    apiClientId: null,
                    expiryOn: null,
                    currentStatus: null,
                    message: data.message,
                    stateHistory: data.stateHistory

                }
                console.log(data)
                setMessages([messageResponse])})


            .catch((error) => console.log(error))
    };

    return (
        showHide.showGetHistory ? (
            <div className='flex items-center p-3 bg-red-600 flex-row  rounded-md min-w-full'>
            {/*------------------ inputs-------------- */}
              <div>
                  <div className="mb-1 flex items-center flex-col">
                      <label  className="label">GenID</label>
                      <input className="input"   value={genId} onChange={(e) => setGenId(e.target.value)}  />
                  </div>
                  <div className="mb-1 flex items-center flex-col">
                    <label  className="label">Api_ClientID</label>
                    <input className="input" value={apiClientID} onChange={(e) => setApiClientID(e.target.value)}></input>
                </div>
              </div>
            {/*------------------ inputs-------------- */}
                <div className="ml-auto flex flex-col items-center">
                    <div  onClick={()=> handleClick()}>
                        <RecyclableButton message={btnMessage}/>
                    </div>
                    <IoMdCloseCircleOutline className="text-white hover:cursor-pointer mt-1" size="1.5em" onClick={()=> openClose(tabWindow)}/>
                </div>
            </div>
        ) : (<div  onClick={()=> openClose(tabWindow)} className="w-full bg-red-600 rounded-md">
            <RecyclableButton message={btnMessage}/>


        </div>)
    )
}

export default GetHistory