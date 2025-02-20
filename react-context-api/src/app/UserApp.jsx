import React from 'react';
import { UserProvider } from '../context/UserContext';
import UserProfile from '../components/user/UserProfile';
import UpdateUser from '../components/user/UpdateUser';

const UserApp = () => {
    return (
        <UserProvider>
            <div className="min-h-[40vh] flex flex-col items-center justify-center p-4">
                <UserProfile />
                <UpdateUser />
            </div>
        </UserProvider>
    );
}

export default UserApp;       