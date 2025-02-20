import React, { useContext } from 'react'
import { AnotherData, Data } from '../app/MyApp'

const UsingComp = () => {

    const userName = useContext(Data);
    const age = useContext(AnotherData);

    return (
        <div className='text-center my-4'>
            <p className='text-base font-medium text-zinc-300'>With using useContext() hook</p>
            <h2 className='text-2xl font-semibold text-orange-500 mt-3'>My Name is : {userName}, and I'm {age} years old</h2>

        </div>
    )
}

export default UsingComp