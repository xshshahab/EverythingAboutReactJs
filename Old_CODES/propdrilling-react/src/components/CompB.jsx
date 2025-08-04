import React from 'react';
import CompC from './CompC';

const CompB = ({ name, username }) => {
    return <CompC name={name} username={username} />
}

export default CompB;