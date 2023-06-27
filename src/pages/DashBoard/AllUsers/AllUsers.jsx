import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })

    const handleMakeAdmin = id => {

    }

    const handleDelete = user => {

    }
    return (
        <div className='w-full h-full ms-10 mt-2'>
            <Helmet>
                <title>Bistro Boss | Users</title>
            </Helmet>
            <h3 className='text-3xl my-4 text-center font-semi'>Total Users: {users.length}</h3>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{
                                        user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(item)} className="btn hover:bg-black bg-yellow-600 text-white"><FaUserShield /></button>

                                    }</td>
                                    <td>                                       
                                        <button onClick={() => handleDelete(item)} className="btn hover:bg-black bg-red-500 text-white"><FaTrashAlt /></button>
                                    </td>
                                    
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;