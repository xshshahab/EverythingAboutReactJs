import React from 'react';

const UserWrapper = ({ children }) => {
    return (
        <div className='mt-5 min-h-80 bg-stone-800 p-4 flex flex-col items-center text-center font-medium'>
            <h1 className='text-3xl font-semibold underline text-orange-500'>Exercise Context Api</h1>
            {children}
        </div>
    );
}

export default UserWrapper;