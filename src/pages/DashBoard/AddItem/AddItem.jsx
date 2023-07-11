import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
const AddItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const img_hosting_URl = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {
        console.log(data)
        const fromData = new FormData();
        fromData.append('image', data.image[0])

        fetch(img_hosting_URl, {
            method: 'POST',
            body: fromData
        })
            .then(res => res.json())
            .then(imgResponse => {
                console.log(imgResponse)
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const {name, category, price, recipe} = data;
                    const newItem= {name, category, price: parseFloat(price), recipe, image: imgURL};
                    console.log(newItem)
                }
            })
    };
    // console.log(errors);
    return (
        <div className='w-full h-full px-10 ms-10 mt-2'>
            <Helmet>
                <title>Bistro Boss | Add Item</title>
            </Helmet>
            <SectionTitle subHeading={'Whats New'} heading={'Add An Item'}></SectionTitle>
            <div className='bg-slate-100 p-10 rounded-lg'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text font-semibold">Recipe Name?<span className='text-red-600'>*</span></span>
                        </label>
                        <input type="text" placeholder="Type here"
                            {...register("name", { required: true, maxLength: 80 })}
                            className="input input-bordered w-full  " />
                    </div>
                    <div className='flex gap-5'>
                        <div className="form-control w-full  ">
                            <label className="label">
                                <span className="label-text">Category<span className='text-red-600'>*</span></span>
                            </label>
                            <select defaultValue="Pick One" className="select select-bordered" {...register("category", { required: true })}>
                                <option disabled>Pick one</option>
                                <option>Pizza</option>
                                <option>Soup</option>
                                <option>Salad</option>
                                <option>Dessert</option>
                                <option>Drinks</option>
                            </select>
                        </div>
                        <div className="form-control w-full  ">
                            <label className="label">
                                <span className="label-text font-semibold">Price<span className='text-red-600'>*</span></span>
                            </label>
                            <input type="number" placeholder="Price" {...register("price", { required: true })} className="input input-bordered w-full  " />
                        </div>
                    </div>
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Recipe Details<span className='text-red-600'>*</span></span>
                            </label>
                            <textarea className="textarea textarea-bordered h-24" {...register("recipe", { required: true })} placeholder="Recipe"></textarea>
                        </div>
                    </div>
                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text">Item Image<span className='text-red-600'>*</span></span>
                        </label>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full  " />
                    </div>
                    <div className='text-center'>
                        <input type="submit" className='btn btn-outline w-full btn-primary border-b-4 mt-4' value="Submit" />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddItem;