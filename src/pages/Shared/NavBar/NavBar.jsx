import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaBeer, FaShoppingCart } from 'react-icons/fa';

const NavBar = () => {

    const { logOut, user } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(result => { })
            .catch(error => {
                console.log(error)
            })
    }

    const navOption = <div className='flex items-center'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/order'>Order Food</Link></li>
        <li><Link to='/'>
            <button className="btn btn-ghost">
                <FaShoppingCart />
                <div className="badge badge-neutral">+99</div>
            </button>
        </Link></li>
    </div>
    return (
        <>
            <div className="navbar md:fixed bg-opacity-30 text-white z-10 max-w-screen-xl bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOption}
                        </ul>
                    </div>
                    <Link to='/'><p className="btn btn-ghost normal-case text-xl">Bistro Boss</p></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ?
                        <><span>{user?.displayName}</span>
                            <img src={user?.photoURL} className='w-[30px] ms-2' alt="" />
                            <button className="btn text-white btn-ghost" onClick={handleLogOut}>log out</button></> :
                        <><Link to='/login'><p className="btn text-white btn-ghost">Login</p></Link></>
                    }
                </div>
            </div>
        </>
    );
};

export default NavBar;