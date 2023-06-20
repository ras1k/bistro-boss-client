import React from 'react';


const FoodCard = ({ item }) => {
    const { _id, price, recipe, name, image } = item;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className='bg-slate-900 text-white absolute right-0 mr-6 mt-6 p-2 rounded-lg'>${price}</p>
                <div className="card-body text-center">
                    <h2 className="card-title justify-center text-2xl">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions text-center justify-center">
                        <button className="btn btn-outline border-0 border-b-4">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;