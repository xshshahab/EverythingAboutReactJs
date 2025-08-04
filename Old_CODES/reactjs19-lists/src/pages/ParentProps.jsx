import React from 'react'
import UserProps from '../components/UserProps'
import UserDestructure from '../components/UserDestructure'

const ParentProps = () => {
    return <>
        <UserProps name="xsh shahab" img="https://images.pexels.com/photos/30117400/pexels-photo-30117400/free-photo-of-silhouette-of-surfer-at-sunset-in-taghazout.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" age={20} isMarried={false} hobbies={["Coding", "Reading", "Travelling"]} />
        <UserDestructure name="xsh shahab" img="https://images.pexels.com/photos/30117400/pexels-photo-30117400/free-photo-of-silhouette-of-surfer-at-sunset-in-taghazout.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" age={20} isMarried={false} hobbies={["Coding", "Reading", "Travelling"]} />
    </>
}

export default ParentProps