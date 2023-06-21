import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div className=''>
            {title && <Cover img={coverImg} title={title}></Cover>}
            <div className='grid md:grid-cols-2 gap-10 mt-20'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}><div className='text-center'> <button className='btn btn-outline border-orange-600 border-0 border-b-4 mb-10'>Order Now</button> </div></Link>
        </div>
    );
};

export default MenuCategory;