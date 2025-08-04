import React from 'react'
import { ValidPassword } from '../components/ValidPassword'
import { InValidPassword } from '../components/InValidPassword'

const TernaryPassword = ({ isValid }) => {
    return isValid ? <ValidPassword /> : <InValidPassword />
}

export default TernaryPassword