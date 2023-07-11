import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageItems = () => {

    const [menu, ,refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();

    const handleDelete = (item) => {
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
                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className='w-full h-full px-10 ms-10 mt-2'>
            <SectionTitle heading={'Manage All Items'} subHeading={'Hurry Up'}>
            </SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th className='text-center'>Name</th>
                            <th className='text-center'>Category</th>
                            <th className='text-center'>Recipe</th>
                            <th className='text-center'>Price</th>
                            <th className='text-green-600 text-center'>Update</th>
                            <th className='text-red-600 text-center'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td className='text-center'>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-left font-bold">{item.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className='text-left'>
                                    {item.category}
                                </td>
                                <td className=''>
                                    {item.recipe}
                                </td>
                                <td>${item.price}</td>
                                <td className='text-center'>
                                    <button disabled className="btn hover:bg-black bg-green-600 text-white"><FaEdit /></button>
                                </td>
                                <td className='text-center'>
                                    <button onClick={() => handleDelete(item)} className="btn hover:bg-black bg-red-600 text-white"><FaTrashAlt /></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;