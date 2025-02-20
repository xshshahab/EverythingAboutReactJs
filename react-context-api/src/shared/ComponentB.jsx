import React from 'react'
import ComponentC from './ComponentC'
import UsingComp from './UsingComp'

const ComponentB = () => {
    return <>
        <ComponentC />
        <UsingComp />
    </>
}

export default ComponentB