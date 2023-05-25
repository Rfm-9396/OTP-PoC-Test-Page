'use client';
import React, { useState } from 'react';

const RecyclableComponent = ({ variable1, variable2, variable3, uri }) => {
    const [var1, setVar1] = useState(variable1);
    const [var2, setVar2] = useState(variable2);
    const [var3, setVar3] = useState(variable3);
    const [fetchUri, setFetchUri] = useState(uri);

    const handleFetch = () => {
        const body = JSON.stringify({
            variable1: var1,
            variable2: var2,
            variable3: var3,
        });

        fetch(fetchUri, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: body,
        })
            .then((res) => res.json())
            .then((data) => {
                // Handle the response data
                console.log(data);
            })
            .catch((error) => {
                // Handle any errors
                console.log(error);
            });
    };

    return (
        <div className="bg-red-600 rounded flex flex-col items-center">
            <div className="flex flex-col ">
                <label htmlFor="variable1" className="text-white my-2">{var1}:</label>
                <input
                    type="text"
                    id="variable1"
                    value={var1}
                    onChange={(e) => setVar1(e.target.value)}
                />
            </div>
            <div className="flex flex-col ">
                <label htmlFor="variable1" className="text-white my-2">{var2}:</label>
                <input
                    type="text"
                    id="variable2"
                    value={var2}
                    onChange={(e) => setVar2(e.target.value)}
                />
            </div>
            <div className="flex flex-col ">
                <label htmlFor="variable1" className="text-white my-2">{var3}:</label>
                <input
                    type="text"
                    id="variable3"
                    value={var3}
                    onChange={(e) => setVar3(e.target.value)}
                />
            </div>

            <button onClick={handleFetch}>Send Request</button>
        </div>
    );
};

export default RecyclableComponent;
