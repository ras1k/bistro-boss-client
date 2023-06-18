import React from 'react';

const MenuItem = ({ item }) => {
    const { _id, price, recipe, name, image } = item;
    return (
        <div className='flex space-x-2'>
            <img className='w-[200px] rounded-e-[150px] rounded-ss-none rounded-s-[150px]' src={image} alt="" />
            <div>
                <h3 className='uppercase'>{name}...................</h3>
                <p className='text-slate-600'><small>{recipe}</small></p>
            </div>
            <p className='text-yellow-600'>${price}</p>
        </div>
    );
};

export default MenuItem;