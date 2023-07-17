import React from 'react';
import useAuth from '../../../hooks/useAuth';

const UserHome = () => {
    const { user } = useAuth();
    return (
        <div className='w-full h-full px-10 ms-10 mt-2'>
            <div className='text-center mt-4'>
                <h2 className='text-3xl font-bold'>Welcome back {user.displayName}</h2>
            </div>
        </div>
    );
};

export default UserHome;