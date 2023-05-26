'use client';
import React from 'react'
import { useState} from 'react'
import {useThemeContext} from "@/components/context/consoleContext";
import RecyclableButton from "@/components/RecyclableButton";
import {IoMdCloseCircleOutline} from "react-icons/all";

function Generate() {

    const {pushMessage, showHide, openClose, setMessages} = useThemeContext();
    const [load, setLoad] = useState(5); // this is the load [0, 10000
    const [apiClientID, setApiClientID] = useState("teste-otp"); // this is the API Client ID
    const {showGenerate} = showHide;

    const tabWindow = 'showGenerate'
    const btnMessage = 'Generate'



 function handleClick(count:number)  {
     setMessages([{}])


     for (let i = 0; i < count; i++) {

    fetch('http://localhost:8000/api/otp/create',{
      method: 'POST',
      body: JSON.stringify({
        "apiClientId": apiClientID,
        }),
      headers: {
        'Content-Type': 'application/json'
      },
    }).then((res) => res.json())
      .then((data) => pushMessage(data))
    .catch((error) => console.log(error))
     }

  };

    
  return (
    showGenerate ? (
    <div className='flex items-center p-3 bg-red-600 flex-row  rounded-md min-w-full'>
      
      {/*------------------ inputs-------------- */}
      <div>
        <div className="mb-1 flex items-center flex-col">
          <label  className="label">Api_ClientId</label>
          <input className="input" value={apiClientID} onChange={(e) => setApiClientID(e.target.value)}  />
        </div>
        <div className="mb-1 flex items-center flex-col">
          <label  className="label">Load</label>
            <input className="input" value={load} onChange={(e) => setLoad(parseInt(e.target.value))}  />
        </div>
      </div>
      {/*------------------ inputs-------------- */}
        <div className="ml-auto flex flex-col items-center">
            <div  onClick={()=> handleClick(load)}>
                <RecyclableButton message={btnMessage}/>
            </div>
            <IoMdCloseCircleOutline className="text-white hover:cursor-pointer mt-1" size="1.5em" onClick={()=> openClose(tabWindow)}/>
        </div>

      
    </div>) : (<div  onClick={()=> openClose(tabWindow)} className="w-full bg-red-600 rounded-md">
        <RecyclableButton message={btnMessage}/>


    </div>)
  )
}

export default Generate