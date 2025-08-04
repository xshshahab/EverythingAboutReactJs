import React, { useCallback, useState, useEffect, useRef } from 'react'

const Main = () => {

    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [characterAllowed, setCharacterAllowed] = useState(false)
    const [password, setPassword] = useState("");

    const passwordRef = useRef(null);


    // Random password generator method
    const passwordGenerator = useCallback(() => {
        let myPassword = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if (numberAllowed) str += "0123456789"
        if (characterAllowed) str += "!@#$%^&*()_+~`|}{[]";

        for (let i = 1; i <= length; i++) {
            let random = Math.floor(Math.random() * str.length + 1);

            myPassword += str.charAt(random)
        }
        setPassword(myPassword)

    }, [length, numberAllowed, characterAllowed, setPassword]);

    // copy to clipboard password method
    const handleCopyPassword = useCallback(() => {
        passwordRef.current?.select()
        window.navigator.clipboard.writeText(password)
    }, [password])


    useEffect(() => {
        passwordGenerator()
    }, [length, numberAllowed, characterAllowed, passwordGenerator]);


    return (
        <main id="container" className='p-4'>
            <h1 className='text-5xl font-medium text-center'>Password <span className='text-orange-500'>Generator.</span></h1>
            <div id='first-input' className="w-full max-w-xl px-4 py-8 mx-auto my-8 text-orange-500 bg-gray-700 rounded-lg shadow-lg">
                <div className="flex mb-4 overflow-hidden rounded-lg shadow">
                    <input
                        className="w-full px-3 py-2 text-lg text-gray-800 border-none outline-none"
                        type="text"
                        ref={passwordRef}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} placeholder='password generator' />
                    <button onClick={handleCopyPassword} className='px-5 text-lg font-medium text-white bg-orange-500 outline-none shrink-0'>Copy</button>
                </div>
                <div id="second-inputs" className='flex text-sm gap-x-4'>
                    <div className="flex items-center gap-x-1">
                        <input
                            id="length"
                            className="range-slider"
                            type="range"
                            min={8}
                            value={length}
                            onChange={(e) => setLength(e.target.value)}
                            max={24}
                        />
                        <label className='text-lg font-medium' htmlFor="length">Length ({length})</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                            id="numberAllowed"
                            type="checkbox"
                            defaultChecked={numberAllowed}
                            onChange={() => {
                                setNumberAllowed(prev => !prev)
                            }}
                        />
                        <label className='text-lg font-medium' htmlFor="numberAllowed">Number</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                            id="characterAllowed"
                            type="checkbox"
                            defaultChecked={characterAllowed}
                            onChange={() => {
                                setCharacterAllowed(prev => !prev)
                            }}
                        />
                        <label className='text-lg font-medium' htmlFor="characterAllowed">Characters</label>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main