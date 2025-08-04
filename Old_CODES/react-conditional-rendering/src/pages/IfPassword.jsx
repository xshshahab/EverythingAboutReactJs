import React from 'react';
import { ValidPassword } from '../components/ValidPassword';
import { InValidPassword } from '../components/InValidPassword';

const IfPassword = ({ isValid }) => {
    if (isValid) {
        return <ValidPassword />;
    } else {
        return <InValidPassword />;
    }
}

export default IfPassword;