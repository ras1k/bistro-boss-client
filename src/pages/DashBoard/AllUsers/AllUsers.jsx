import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://bistro-boss-server-three-omega.vercel.app/users')
        return res.json()
    })

    const handleMakeAdmin = user => {
    fetch(`https://bistro-boss-server-three-omega.vercel.app/users/admin/${user._id}`,{
        method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount){
            refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is Made Admin`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
    }

    const handleDelete = (user) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://bistro-boss-server-three-omega.vercel.app/users/${user._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                `${user.name} has been deleted.`,
                                'success'
                            )
                        }
                    })
            }
        })
    }

    // const handleDelete = user => {
    //     fetch('http://localhost:5000/users')
    // }
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
                                        user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="btn hover:bg-black bg-yellow-600 text-white"><FaUserShield /></button>

                                    }</td>
                                    <td>                                       
                                        <button onClick={() => handleDelete(user)} className="btn hover:bg-black bg-red-500 text-white"><FaTrashAlt /></button>
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