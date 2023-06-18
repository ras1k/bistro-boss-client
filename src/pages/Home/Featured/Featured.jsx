import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import img from '../../../assets/home/featured.jpg'
import moment from 'moment';
import './Featured.css'

const Featured = () => {
    return (
        <div className="mt-5 mb-10 featured-item text-white pt-8 my-20">
            <SectionTitle
                subHeading={'Check it out'}
                heading={'Featured Item'}
            ></SectionTitle>
            <div className='md:flex justify-center items-center pb-20 pt-12 px-36'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>{moment().format('MMMM Do, YYYY')}</p>
                    <p>Where can i get some?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio non minus distinctio quae, harum reprehenderit quisquam provident nulla dignissimos! Ab, vel quasi? Reiciendis iste, ipsam et harum eos, est laborum, magni doloremque omnis error itaque. Odit, harum officiis? Eaque rerum tempore aspernatur neque? Ab harum recusandae saepe, tempore mollitia soluta.</p>
                    <button className='btn btn-outline text-white mt-2'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;