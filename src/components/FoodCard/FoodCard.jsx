import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';


const FoodCard = ({ item }) => {
    const { _id, price, recipe, name, image } = item;
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCard = (item) => {
        console.log(item)
        if (user && user.email) {
        const cartItem = {menuItemId: _id, price, email: user.email, name, image }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Successfully added to cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                    
                })
        }
        else {
            Swal.fire({
                title: 'Please login to order',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}})
                }
            })
        }
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className='bg-slate-900 text-white absolute right-0 mr-6 mt-6 p-2 rounded-lg'>${price}</p>
                <div className="card-body text-center">
                    <h2 className="card-title justify-center text-2xl">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions text-center justify-center">
                        <button onClick={() => handleAddToCard(item)} className="btn btn-outline border-0 border-b-4">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;