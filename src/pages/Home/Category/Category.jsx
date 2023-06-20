import React from 'react';
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import img6 from '../../../assets/home/slide6.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


const Category = () => {
    return (
        <section>
            <SectionTitle
            subHeading={'From 11am to 10pm'}
            heading={'Order Online'}        
            ></SectionTitle>
            <div className='mb-4'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={img1} alt="" />
                        <h3 className='text-3xl uppercase text-center text-white -mt-12'>Salad</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt="" />
                        <h3 className='text-3xl uppercase text-center text-white -mt-12'>Pizza</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="" />
                        <h3 className='text-3xl uppercase text-center text-white -mt-12'>Suop</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="" />
                        <h3 className='text-3xl uppercase text-center text-white -mt-12'>cake</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img5} alt="" />
                        <h3 className='text-3xl uppercase text-center text-white -mt-12'>Salad</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-[400px]' src={img6} alt="" />
                        <h3 className='text-3xl uppercase text-center text-white -mt-12'>Drinks</h3>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Category;