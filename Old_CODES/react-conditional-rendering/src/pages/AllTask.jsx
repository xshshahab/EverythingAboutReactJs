import React from 'react'
import Weather from '../components/tasks/Weather'
import UserStatus from '../components/tasks/UserStatus'

const AllTask = () => {
    return (
        <main style={{ padding: "20px", margin: "10px", border: "1px solid green", borderRadius: "10px" }} >
            <Weather temperature={17} />
            <UserStatus loggedIn={true} isAdmin={false} />
        </main>
    )
}

export default AllTask