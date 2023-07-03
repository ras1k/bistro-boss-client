import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaWallet, FaShoppingCart, FaCalendarAlt, FaHome, FaHamburger, FaArrowAltCircleDown, FaUtensils, FaUser, FaBook, FaUsers } from 'react-icons/fa';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';

const DashBoard = () => {
    const [cart] = useCart()

    // const isAdmin = true;
    const isAdmin = useAdmin()

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-[#D1A054]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full text-base-content">

                        {
                            isAdmin ? <>
                                <li><NavLink to='dashboard/home'><FaHome /> Admin Home</NavLink></li>
                                <li><NavLink to='/menu'><FaUtensils /> Add Items</NavLink></li>
                                <li><NavLink to='/dashboard/allusers'><FaUsers /> All Users</NavLink></li>
                                <li><NavLink to='dashboard/allusers'><FaBook /> Manage Bookings</NavLink></li>
                            </> : <>
                                <li><NavLink to='/dashboard/home'><FaHome /> User Home</NavLink></li>
                                <li><NavLink to='/dashboard/mycart'><FaShoppingCart /> My Cart <span className="badge ">+{cart?.length || 0}</span></NavLink></li>
                                <li><NavLink to='/dashboard/history'><FaWallet /> Payment History</NavLink></li>
                                <li><NavLink to='/dashboard/reservation'><FaCalendarAlt /> Reservation</NavLink></li>
                            </>
                        }
                        <div className="divider"></div>
                        <li><NavLink to='/'><FaHome /> Home</NavLink></li>
                        <li><NavLink to='/menu'><FaHamburger /> Menu</NavLink></li>
                        <li><NavLink to='/order'><FaArrowAltCircleDown />Order Food</NavLink></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;