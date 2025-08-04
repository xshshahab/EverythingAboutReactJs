import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

const UserProfile = () => {
    const { user } = useContext(UserContext)
    return (
        <div className="max-w-3xl mx-auto bg-zinc-900 p-6 rounded-lg shadow-md mt-6 text-center">
            <h1 className="text-2xl font-bold text-gray-200">User Profile</h1>
            <h3 className="text-lg text-gray-200 mt-2">
                Name: <span className="font-semibold text-gray-300">{user.name}</span>
            </h3>
        </div>
    )
}

export default UserProfile