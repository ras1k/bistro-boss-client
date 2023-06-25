import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import img1 from '../../../assets/menu/salad-bg.jpg';
import img2 from '../../../assets/menu/soup-bg.jpg';
import img3 from '../../../assets/menu/pizza-bg.jpg';
import { Link } from 'react-router-dom';

const ShouldTry = () => {
    return (
        <div className='mb-20 mt-10'>
            <SectionTitle
                subHeading={'Should Try'}
                heading={'Chef Recommends'}
            ></SectionTitle>
            <div className='grid md:grid-cols-3 mt-10'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Salad</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, unde.</p>
                        <div className="card-actions">
                            <Link to='/order/salad'><button className="btn btn-outline border-0 border-b-4 text-green-700">Add To Cart</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Soup</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ex!</p>
                        <div className="card-actions">
                           <Link to='/order/soup'><button className="btn btn-outline border-0 border-b-4 text-red-600">Add To Cart</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Pizza</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, atque.</p>
                        <div className="card-actions">
                            <Link to='/order/pizza'><button className="btn btn-outline border-0 border-b-4 text-yellow-600">Add To Cart</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShouldTry;