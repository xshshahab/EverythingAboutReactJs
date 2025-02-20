import React, { createContext } from 'react';
import ComponentA from '../shared/ComponentA';


export const Data = createContext();
export const AnotherData = createContext();


const MyApp = () => {

    const name = "XshShahab"
    const age = 20;

    return (
        <Data.Provider value={name}>
            <AnotherData.Provider value={age}>
                <div className="flex flex-col gap-2.5 items-center min-h-[50vh] bg-stone-800 p-6">
                    <h1 className='text-2xl font-semibold text-emerald-500 underline'>Learning Context Api</h1>
                    <ComponentA />
                </div>
            </AnotherData.Provider>
        </Data.Provider>
    )
}

export default MyApp