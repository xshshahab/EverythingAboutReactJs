import React from 'react'
import CompB from './CompB'

const CompA = ({ name, username }) => {
    return <CompB name={name} username={username} />
}

export default CompA