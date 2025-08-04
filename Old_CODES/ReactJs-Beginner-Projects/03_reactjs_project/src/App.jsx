import React from 'react'
import Meals from './components/Meals'
import Footer from './components/Footer'

export const App = () => {
    return (
        <>
            <h1 className='heading'>Meals Recipe App</h1>
            <Meals />
            <Footer />
        </>
    )
}
