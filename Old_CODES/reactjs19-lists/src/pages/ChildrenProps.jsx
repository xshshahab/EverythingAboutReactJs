import React from 'react'
import Children from '../components/Children'
import ChildrenDesc from '../components/ChildrenDesc'

const ChildrenProps = () => {
    return (
        <div>
            <Children>
                <h1>Hey, I am Children with props</h1>
                <p>Lorem ipsum dolor sit amet.</p>
            </Children>

            <ChildrenDesc>
                <h1>Hey, I am also a children with destructing </h1>
                <p>Lorem ipsum dolor sit amet.</p>
            </ChildrenDesc>
        </div>
    )
}

export default ChildrenProps