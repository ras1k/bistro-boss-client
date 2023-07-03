import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';
import { AuthContext } from '../../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('https://bistro-boss-server-three-omega.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                            Swal.fire({
                                title: 'User Signup successful',
                                showClass: {
                                    popup: 'animate__animated animate__fadeInDown'
                                },
                                hideClass: {
                                    popup: 'animate__animated animate__fadeOutUp'
                                }
                            });
                            navigate(from, { replace: true })
                    })
            })
    }
    return (
        <div className='text-center mb-4'>
            <div className="divider"></div>
            <button onClick={handleGoogleSignIn} className='btn btn-circle btn-outline'><FaGoogle /></button>
        </div>
    );
};

export default SocialLogin;