import React from 'react'

const Dynamic = () => {
    const fullname = () => {
        return "John Doe"
    }

    const urAge = 18;

    return (
        <div>Hello, {fullname()} and your age's : {urAge}</div>
    )
}

export default Dynamic