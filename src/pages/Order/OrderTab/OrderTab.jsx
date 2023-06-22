import React from 'react';
import FoodCard from '../../../components/FoodCard/FoodCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const OrderTab = ({ items }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    return (
        <div>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            ></Swiper>
            <SwiperSlide>
                <div className='grid grid-cols-1 gap-10 mb-10 md:grid-cols-3'>
                    {
                        items.map(item => <FoodCard
                            key={item._id}
                            item={item}
                        ></FoodCard>)
                    }
                </div>
            </SwiperSlide>
        </div>
    );
};

export default OrderTab;