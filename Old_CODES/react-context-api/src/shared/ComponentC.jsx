import React from 'react';
import { AnotherData, Data } from '../app/MyApp';

const ComponentC = () => {
    return (
        <Data.Consumer>
            {
                (name) => {
                    return <AnotherData.Consumer>
                        {
                            (age) => {
                                return <div className='my-5 text-center'>
                                    <p className='text-base font-medium text-zinc-300'>Without using useContext() hook</p>
                                    <h1 className='text-2xl font-semibold text-orange-500'>My name is : {name} and I'm {age} years old.</h1>
                                </div>
                            }
                        }
                    </AnotherData.Consumer>
                }
            }
        </Data.Consumer>
    )
}

export default ComponentC