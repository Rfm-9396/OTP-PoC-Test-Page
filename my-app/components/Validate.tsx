'use client';
import React from 'react'
import { useState } from 'react'
import {useThemeContext} from "@/components/context/consoleContext";
import RecyclableButton from "@/components/RecyclableButton";
import {IoMdCloseCircleOutline} from "react-icons/all";
function Validate() {

    const [otpPin, setOtpPin] = useState(0); // this is the load [0, 10000
    const [apiClientID, setApiClientID] = useState("teste-otp"); // this is the API Client ID
    const [receiverName, setReceiverName] = useState("teste-otp     aa "); // this is the API Client ID

    const {setMessages, showHide, openClose, genId, setGenId} = useThemeContext();

    const tabWindow = 'showValidate'
    const btnMessage = 'Validate'
    const handleClick = () => {

        setMessages([{}])

          const body = JSON.stringify({
            apiClientId: apiClientID,
            genId: genId,
            otpPin: otpPin,
            receiverName: receiverName,
          });

      fetch('http://localhost:8000/api/otp/validate',{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: body,
      }).then((res) => res.json())
        .then((data) => {
          setMessages([{message: data.message}])})

        .catch((error) => console.log(error))


    };

  return (
    showHide.showValidate ? (
        <div className='flex items-center p-3 bg-red-600 flex-row  rounded-md min-w-full'>
        {/*------------------ inputs-------------- */}
          <div>
            <div className="mb-1 flex items-center flex-col">
              <label  className="label">GenID</label>
              <input className="input" value={genId} onChange={(e) => setGenId(e.target.value)}  />
            </div>
            <div className="mb-1 flex items-center flex-col">
              <label  className="label">otp Pin</label>
              <input className="input"  value={otpPin} onChange={(e) => setOtpPin(parseInt(e.target.value))}  />
            </div>
            <div className="mb-1 flex items-center flex-col">
              <label  className="label">Api_ClientID</label>
              <input className="input"                 value={apiClientID} onChange={(e) => setApiClientID(e.target.value)}  />
            </div>
            <div className="mb-1 flex items-center flex-col">
              <label  className="label">Receiver Name</label>
              <input className="input"                 value={receiverName} onChange={(e) => setReceiverName(e.target.value)}  />
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

export default Validate