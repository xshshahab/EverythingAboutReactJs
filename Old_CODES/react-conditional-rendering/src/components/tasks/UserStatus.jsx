import React from 'react';

const UserStatus = ({ loggedIn, isAdmin }) => {
    {
        if (loggedIn && isAdmin) return <h1> Welcome Admin</h1>;
        return <h1>Welcome User</h1>;
    }
}

export default UserStatus;