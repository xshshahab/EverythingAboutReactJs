import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/UserContext'

const UpdateUser = () => {
    const { updateUser } = useContext(UserContext);
    const [newName, setNewName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newName.trim()) {
            updateUser(newName)
            setNewName("")
        }
    }

    return (
        <div className="max-w-md mx-auto bg-slate-800 p-6 rounded-lg shadow-md mt-6">
            <h2 className="text-xl font-semibold text-gray-200 mb-4">Edit Your Username</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                    type="text"
                    placeholder="Enter new username..."
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                >
                    Update
                </button>
            </form>
        </div>
    )
}

export default UpdateUser